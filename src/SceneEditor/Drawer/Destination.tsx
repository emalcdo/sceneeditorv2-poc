import { 
  Svg, 
  // SVG, 
  Polygon, 
  // Circle, 
  G, 
  Image
} from '@svgdotjs/svg.js';
import '@svgdotjs/svg.draggable.js';

import { Drawer } from "./Drawer";
import { ActiveRegion } from '../SceneEditor.d';
import destinationPin from './destination_pin.svg';

// Create a custom class extending SVG.js elements
export class Destination {
  public static typeID: number = 6;
  public static type: string = 'destination';
  public id: number | null;
  public points: number[][];

  private draw: Svg;
  private destinationContainer: G;
  private polygon: Polygon;
  private pointHandles: G;
  private destinationPinImage: Image

  constructor(draw: Svg, initialPoints: number[][], activeRegion : ActiveRegion, features : object) {
    this.draw = draw;

    this.id = activeRegion.tempID;
    // Create the polygon
    this.polygon = this.draw
      .polygon(initialPoints)
      .attr({
        'stroke': 'rgba(2, 143, 104, 1)',
        'stroke-width': 2,
        'stroke-dasharray': '5,5',
        'fill': 'rgba(2, 143, 104, 0.5)',
        'pointer-events': 'visiblePainted'
      })
      .draggable(); // Make the entire polygon draggable

    // Store the initial points
    this.points = initialPoints;

    // Create draggable points
    this.pointHandles = this.drawPoints(initialPoints);

    // Destination Pin Image
    this.destinationPinImage = this.draw.image(destinationPin).size(13.5, 24.75)

    // Group elements to container
    this.destinationContainer = this.draw.group().attr({ ...activeRegion });
    this.destinationContainer.add(this.polygon);
    this.destinationContainer.add(this.pointHandles);
    this.destinationContainer.add(this.destinationPinImage);

    // Update the Destination Pin Image center
    const centroid : [number, number] | null = getCentroid(this.points);
    this.destinationPinImage.center(centroid[0], centroid[1]);

    // Add drag listeners to update the polygon
    this.addDragListeners();

    // Add drag listener to move the entire Destination
    this.addDestinationDragListener();
  }

  // Method to draw draggable points
  private drawPoints(points: number[][]): G {
    const group = this.draw.group();
    points.forEach(([x, y], index) => {
      const handle = this.draw
        .circle(15)
        .fill('rgba(2, 143, 104, 1)')
        .center(x, y)
        .draggable();

      // Store the index as data for easy reference
      handle.data('index', index);
      group.add(handle);
    });
    return group;
  }

  // Add drag listeners to update the polygon
  private addDragListeners(): void {
    this.pointHandles.children().forEach((point) => {
      point.on('dragmove', () => {
        const index = point.data('index');
        const { x, y } = point.bbox();

        // Update the corresponding point in the array
        this.points[index] = [x + point.width() / 2, y + point.height() / 2];

        // Update the polygon's shape
        this.polygon.plot(this.points);

        // Update the Destination Pin Image center
        const centroid : [number, number] | null = getCentroid(this.points);
        this.destinationPinImage.center(centroid[0], centroid[1]);
      });
    });
  }

  // Add drag listener to move the entire Destination
  private addDestinationDragListener(): void {
    this.polygon.on('dragmove', (event) => {
      const dx = event.detail.box.x - this.polygon.x();
      const dy = event.detail.box.y - this.polygon.y();

      // Update all points and move the point handles
      this.points = this.points.map(([x, y]) => [x + dx, y + dy]);
      this.polygon.plot(this.points);

      this.pointHandles.children().forEach((point, index) => {
        const [newX, newY] = this.points[index];
        point.center(newX, newY);
      });

      // Update the Destination Pin Image center
      const centroid : [number, number] | null = getCentroid(this.points);
      this.destinationPinImage.center(centroid[0], centroid[1]);
    });
  }

  // Method to get current polygon points
  public getPoints(): number[][] {
    return this.points;
  }

  // Method to add a new point to the polygon
  public addPoint(x: number, y: number): void {
    this.points.push([x, y]);

    // Update the polygon and redraw points
    this.polygon.plot(this.points);
    this.pointHandles.clear();
    this.pointHandles = this.drawPoints(this.points);
    this.addDragListeners();
  }

  // Method to remove a point by index
  public removePoint(index: number): void {
    if (index >= 0 && index < this.points.length) {
      this.points.splice(index, 1);

      // Update the polygon and redraw points
      this.polygon.plot(this.points);
      this.pointHandles.clear();
      this.pointHandles = this.drawPoints(this.points);
      this.addDragListeners();
    }
  }

  // Method to render form
  public renderForm() {
    return null;
  }

  // Method to get features value (on saving)
  public getFeatures(): object {
    return {
      type: Destination.typeID
    }
  }

  // Method to backup values
  public backup(): void {
  }

  // Method to restore values from backup and update destination visual
  public restore(): void {
  }

  // Method to hide destination visual
  public hide(): void {
    this.destinationContainer.hide();
  }

  // Method to show destination visual
  public show(): void {
    this.destinationContainer.show();
  }

  // Method to destroy the instance
  public destroy(): void {
    // Remove all event listeners
    this.polygon.off();
    this.pointHandles.children().forEach((point) => point.off());

    // Remove all SVG elements from the canvas
    this.destinationContainer.remove();

    // Clear references to avoid memory leaks
    this.polygon = null!;
    this.points = [];
    this.pointHandles = null!;
  }
};

export const DestinationDrawer = {
  drawStartDestinationKeyEvents(this: Drawer, e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.drawing?.draw('done');
      this.drawEndDestination();
    }
    if (e.key === 'Escape') {
      this.drawing?.off('drawstop');
      this.drawing?.draw('cancel');
      this.drawCancelDestination();
    }
  },

  drawStartDestination(this: Drawer) {
    if(!this.drawing) {
      this.drawing = this.svgContainer?.['polygon']().draw({
        snapToGrid: 1,
        drawCircles: true,
      });
    
      this.drawing?.attr({
        'stroke': 'rgba(2, 143, 104, 1)',
        'stroke-width': 2,
        'stroke-dasharray': '5,5',
        'fill': 'rgba(2, 143, 104, 0.5)',
        'pointer-events': 'visiblePainted'
      });
  
      window.addEventListener('keydown', this.drawStartDestinationKeyEvents);
    }
  },

  drawEndDestination(this: Drawer) {
    window.removeEventListener('keydown', this.drawStartDestinationKeyEvents);
    this.emitter.emit('drawEnd', this.drawing);
    this.emitter.emit('drawEnd', { drawing: this.drawing, artype: Destination.type, points: this.drawing?._array });
    this.drawing?.remove();
    this.drawing = null;
  },

  drawCancelDestination(this: Drawer) {
    window.removeEventListener('keydown', this.drawStartDestinationKeyEvents);
    this.emitter.emit('drawCancel', this.drawing);
    this.drawing = null;
  }
};

// Function to get the centroid of all points
function getCentroid(points: [number, number][]): [number, number] | null {
  if (points.length === 0) return null;

  const [sumX, sumY] = points.reduce(
    ([accX, accY], [x, y]) => [accX + x, accY + y],
    [0, 0]
  );

  return [sumX / points.length, sumY / points.length];
}