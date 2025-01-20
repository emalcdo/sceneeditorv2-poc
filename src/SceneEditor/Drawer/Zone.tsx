import { 
  Svg, 
  // SVG, 
  Polygon, 
  // Circle, 
  G 
} from '@svgdotjs/svg.js';
import '@svgdotjs/svg.draggable.js';

import { Drawer } from "./Drawer";
import { ActiveRegion } from '../SceneEditor.d';

// Create a custom class extending SVG.js elements
export class Zone {
  public static typeID: number = 4;
  public static type: string = 'zone';
  public id: number | null;
  public points: number[][];

  private draw: Svg;
  private zoneContainer: G;
  private polygon: Polygon;
  private pointHandles: G;

  constructor(draw: Svg, initialPoints: number[][], activeRegion : ActiveRegion, features : object) {
    this.draw = draw;

    this.id = activeRegion.tempID;
    // Create the polygon
    this.polygon = this.draw
      .polygon(initialPoints)
      .attr({
        'stroke': 'rgba(21, 101, 192, 1)',
        'stroke-width': 2,
        'stroke-dasharray': '5,5',
        'fill': 'rgba(21, 101, 192, 0.5)',
        'pointer-events': 'visiblePainted'
      })
      .draggable(); // Make the entire polygon draggable

    // Store the initial points
    this.points = initialPoints;

    // Create draggable points
    this.pointHandles = this.drawPoints(initialPoints);

    // Group elements to container
    this.zoneContainer = this.draw.group().attr({ ...activeRegion });
    this.zoneContainer.add(this.polygon);
    this.zoneContainer.add(this.pointHandles);

    // Add drag listeners to update the polygon
    this.addDragListeners();

    // Add drag listener to move the entire Zone
    this.addZoneDragListener();
  }

  // Method to draw draggable points
  private drawPoints(points: number[][]): G {
    const group = this.draw.group();
    points.forEach(([x, y], index) => {
      const handle = this.draw
        .circle(15)
        .fill('rgba(21, 101, 192, 1)')
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
      });
    });
  }

  // Add drag listener to move the entire Zone
  private addZoneDragListener(): void {
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
      type: Zone.typeID
    }
  }

  // Method to backup values
  public backup(): void {
  }

  // Method to restore values from backup and update zone visual
  public restore(): void {
  }

  // Method to hide zone visual
  public hide(): void {
    this.zoneContainer.hide();
  }

  // Method to show zone visual
  public show(): void {
    this.zoneContainer.show();
  }

  // Method to destroy the instance
  public destroy(): void {
    // Remove all event listeners
    this.polygon.off();
    this.pointHandles.children().forEach((point) => point.off());

    // Remove all SVG elements from the canvas
    this.zoneContainer.remove();

    // Clear references to avoid memory leaks
    this.polygon = null!;
    this.points = [];
    this.pointHandles = null!;
  }
};

export const ZoneDrawer = {
  drawStartZoneKeyEvents(this: Drawer, e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.drawing?.draw('done');
      this.drawEndZone();
    }
    if (e.key === 'Escape') {
      this.drawing?.off('drawstop');
      this.drawing?.draw('cancel');
      this.drawCancelZone();
    }
  },

  drawStartZone(this: Drawer) {
    if(!this.drawing) {
      this.drawing = this.svgContainer?.['polygon']().draw({
        snapToGrid: 1,
        drawCircles: true,
      });
    
      this.drawing?.attr({
        'stroke': 'rgba(21, 101, 192, 1)',
        'stroke-width': 2,
        'stroke-dasharray': '5,5',
        'fill': 'rgba(21, 101, 192, 0.5)',
        'pointer-events': 'visiblePainted'
      });
  
      window.addEventListener('keydown', this.drawStartZoneKeyEvents);
    }
  },

  drawEndZone(this: Drawer) {
    window.removeEventListener('keydown', this.drawStartZoneKeyEvents);
    this.emitter.emit('drawEnd', this.drawing);
    this.emitter.emit('drawEnd', { drawing: this.drawing, artype: Zone.type, points: this.drawing?._array });
    this.drawing?.remove();
    this.drawing = null;
  },

  drawCancelZone(this: Drawer) {
    window.removeEventListener('keydown', this.drawStartZoneKeyEvents);
    this.emitter.emit('drawCancel', this.drawing);
    this.drawing = null;
  }
};