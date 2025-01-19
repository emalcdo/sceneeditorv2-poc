import { 
  PointArray, 
  Svg, 
  // SVG,
  Polyline, 
  // Circle,
  G, 
  Polygon, 
  Line 
} from '@svgdotjs/svg.js'; 
import '@svgdotjs/svg.draggable.js';

import { Drawer } from "./Drawer";
import { ActiveRegion } from '../SceneEditor.d';
import { FormEvent } from 'react';

const TRIPLINEDEFAULTSENSITIVITY = 30;
const TRIPLINEMINSENSITIVITY = 1;
const TRIPLINEMAXSENSITIVITY = 50;
const TRIPLINEDEFAULTINVERSED = false;

// Create a custom class extending SVG.js elements
export class TripLine {
  public id: number | null;
  public sensitivity: number;
  public inversed : boolean;

  private _sensitivity: number;
  private _inversed : boolean;
  
  private draw: Svg;
  private triplineContainer: G;
  private polyline: Polyline;
  private points: number[][];
  private pointHandles: G;
  private triplineBG: Polygon;
  private triplineLeftLine: Line;
  private triplineRightLine: Line;
  private triangle: Polygon; // Triangle

  constructor(draw: Svg, initialPoints: number[][], activeRegion : ActiveRegion, features: object) {
    this.draw = draw;

    this.id = activeRegion.id;
    // TripLine Visual
    this.sensitivity = features.hasOwnProperty('sensitivity') ? features.sensitivity : TRIPLINEDEFAULTSENSITIVITY;
    this.inversed = features.hasOwnProperty('inversed') ? features.inversed : TRIPLINEDEFAULTINVERSED;
    this._sensitivity = features.hasOwnProperty('sensitivity') ? features.sensitivity : TRIPLINEDEFAULTSENSITIVITY;
    this._inversed = features.hasOwnProperty('inversed') ? features.inversed : TRIPLINEDEFAULTINVERSED;

    this.triplineBG = this.draw.polygon()
      .attr({
        'stroke': 'rgba(21, 101, 192, 1)',
        'stroke-width': 2,
        'stroke-dasharray': '5,5',
        'fill': 'rgba(21, 101, 192, 0.5)',
        'pointer-events': 'visiblePainted',
        'artype': 'tripline'
      });
    this.triplineLeftLine = this.draw.line()
      .fill('none')
      .stroke({ width: 5, color: 'rgba(21, 101, 192, 1)' });
    this.triplineRightLine = this.draw.line()
      .fill('none')
      .stroke({ width: 5, color: 'rgba(21, 101, 192, 1)' });

    // Add a triangle to the middle of the polyline
    this.triangle = this.draw
      .polygon(getEquilateralTriangleVertices(0, 0, 30))
      .fill('rgba(21, 101, 192, 1)');

    // Create the polyline
    this.polyline = this.draw
      .polyline(initialPoints)
      .fill('none')
      .stroke({ width: 5, color: 'rgba(21, 101, 192, 1)' })
      .draggable(); // Make the polyline draggable

    // Store the initial points
    this.points = initialPoints;

    // Create draggable points
    this.pointHandles = this.drawPoints(initialPoints);

    // Group elements to container
    this.triplineContainer = this.draw.group().attr({ ...activeRegion });
    this.triplineContainer.add(this.triplineBG);
    this.triplineContainer.add(this.triplineLeftLine);
    this.triplineContainer.add(this.triplineRightLine);
    this.triplineContainer.add(this.polyline);
    this.triplineContainer.add(this.triangle);
    this.triplineContainer.add(this.pointHandles);

    // Add drag listeners to update the polyline
    this.addPointDragListeners();

    // Add drag listener to move the entire polyline
    this.addPolylineDragListener();

    // Update tripLine visual
    this.updateTriplineVisualization();
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
  };

  // Add drag listeners for individual points
  private addPointDragListeners(): void {
    this.pointHandles.children().forEach((point) => {
      point.on('dragmove', (e) => {
        const index = point.data('index');
        const { x, y } = point.bbox();

        // Update the corresponding point in the array
        this.points[index] = [x + point.width() / 2, y + point.height() / 2];

        // Update the polyline's shape
        this.polyline.plot(this.points);

        // Update tripLine visual
        this.updateTriplineVisualization();
      });
    });
  }

  // Add drag listener for the entire polyline
  private addPolylineDragListener(): void {
    let startPoints: number[][];

    this.polyline.on('dragstart', () => {
      // Save the initial state of the points
      startPoints = [...this.points];
    });

    this.polyline.on('dragmove', (event) => {
      const dx = event.detail.box.x - this.polyline.x();
      const dy = event.detail.box.y - this.polyline.y();

      // Update all points and move the point handles
      this.points = this.points.map(([x, y]) => [x + dx, y + dy]);
      this.polyline.plot(this.points);

      this.pointHandles.children().forEach((point, index) => {
        const [newX, newY] = this.points[index];
        point.center(newX, newY);
      });

      // Update tripLine visual
      this.updateTriplineVisualization();
    });
  }

  // Method to get current polyline points
  public getPoints(): number[][] {
    return this.points;
  }

  // Method to add a new point to the polyline
  public addPoint(x: number, y: number): void {
    this.points.push([x, y]);

    // Update the polyline and redraw points
    this.polyline.plot(this.points);
    this.pointHandles.clear();
    this.pointHandles = this.drawPoints(this.points);
    this.addPointDragListeners();
  }

  // Method to remove a point by index
  public removePoint(index: number): void {
    if (index >= 0 && index < this.points.length) {
      this.points.splice(index, 1);

      // Update the polyline and redraw points
      this.polyline.plot(this.points);
      this.pointHandles.clear();
      this.pointHandles = this.drawPoints(this.points);
      this.addPointDragListeners();
    }
  }

  // Method to update tripline sensitivity and update visual
  public setSensitivity(sensitivity: number): void {
    this.sensitivity = sensitivity;
    this.updateTriplineVisualization();
  }

  // Method to update tripline inversed and update visual
  public setInversed(inversed: boolean): void {
    this.inversed = inversed;
    this.updateTriplineVisualization();
  }

  // Method to update tripline visual
  public updateTriplineVisualization(): void {
    const { bgAPoints, bgBPoints, pairedPoints } = visualizeTripLine(this.points, this.sensitivity);
    const { x: triplineMidpointX, y: triplineMidpointY, i: triplineMidpointI } = findPolylineMidpoint(this.points);
    const angle = getDiffAngle(pairedPoints, triplineMidpointI);

    this.triplineBG.plot([...bgAPoints, ...bgBPoints]);
    this.triplineLeftLine.plot([bgAPoints[0], bgBPoints[bgBPoints.length - 1]]);
    this.triplineRightLine.plot([bgAPoints[bgAPoints.length - 1], bgBPoints[0]]);
    this.triangle.center(triplineMidpointX, triplineMidpointY)
      .center(
        getCoordinates(triplineMidpointX, triplineMidpointY, angle, (this.sensitivity + 12) * (this.inversed ? -1 : 1)).x,
        getCoordinates(triplineMidpointX, triplineMidpointY, angle, (this.sensitivity + 12) * (this.inversed ? -1 : 1)).y
      )
      .transform({ rotate: radiansToDegrees(angle) + (this.inversed ? 0 : 180) });
  }

  // Method to render form
  public renderForm() {

    const setSensitivityF = (e: FormEvent) => {
      let sensitivity = parseInt(e.target.value, 10);

      if(sensitivity < TRIPLINEMINSENSITIVITY) {
        sensitivity = TRIPLINEMINSENSITIVITY;
      } else if (sensitivity > TRIPLINEMAXSENSITIVITY) {
        sensitivity = TRIPLINEMAXSENSITIVITY;
      }

      e.target.value = sensitivity;
      this.setSensitivity(sensitivity);
    };

    const setInversedF = (e: FormEvent) => {
      this.setInversed(e.target.checked);
    };

    return (
      <>
        <div>
          <label htmlFor="sensitivity">Sensitivity: </label>
          <input type='number' id='sensitivity' name='sensitivity' min={TRIPLINEMINSENSITIVITY} max={TRIPLINEMAXSENSITIVITY} defaultValue={this.sensitivity} onChange={setSensitivityF} />
        </div>
        <div>
          <label htmlFor="inversed">Inversed: </label>
          <input type='checkbox' id='inversed' name='inversed' defaultChecked={this.inversed} onChange={setInversedF} />
        </div>
      </>
    )
  }

  // Method to backup values
  public backup(): void {
    this._sensitivity = this.sensitivity;
    this._inversed = this.inversed;
  }

  // Method to restore values from backup and update tripline visual
  public restore(): void {
    this.sensitivity = this._sensitivity;
    this.inversed = this._inversed;
    this.updateTriplineVisualization();
  }

  // Method to destroy the instance
  public destroy(): void {
    // Remove all event listeners
    this.polyline.off();
    this.pointHandles.children().forEach((point) => point.off());

    // Remove all SVG elements from the canvas
    this.triplineContainer.remove();

    // Clear references to avoid memory leaks
    this.triplineContainer = null!;
    this.polyline = null!;
    this.points = [];
    this.pointHandles = null!;
    this.triplineBG = null!;
    this.triplineLeftLine = null!;
    this.triplineRightLine = null!;
    this.triangle = null!;
  }
};

export const TripLineDrawer = {
  drawStartTripLineKeyEvents(this: Drawer, e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.drawing?.draw('done');
      this.drawEndTripLine();
    }
    if (e.key === 'Escape') {
      this.drawing?.off('drawstop');
      this.drawing?.draw('cancel');
      this.drawCancelTripLine();
    }
  },

  drawStartTripLine(this: Drawer) {
    if(!this.drawing) {
      this.drawing = this.svgContainer?.['polyline']().draw({
        snapToGrid: 1,
        drawCircles: true,
      });

      this.drawing?.on('drawstart', () => {
        this.svgContainer?.polygon()
          .id('temp-tripline-bg')
          .attr({
            'stroke': 'rgba(21, 101, 192, 1)',
            'stroke-width': 2,
            'stroke-dasharray': '5,5',
            'fill': 'rgba(21, 101, 192, 0.5)',
            'pointer-events': 'visiblePainted',
            'artype': 'tripline'
          });
        this.svgContainer?.line()
          .id('temp-tripline-leftline')
          .attr({
            'stroke': 'rgba(21, 101, 192, 1)',
            'stroke-width': 5
          });
        this.svgContainer?.line()
          .id('temp-tripline-rightline')
          .attr({
            'stroke': 'rgba(21, 101, 192, 1)',
            'stroke-width': 5
          });
        this.svgContainer?.polygon()
          .id('temp-tripline-triangle')
          .attr({
            'fill': 'rgba(21, 101, 192, 1)'
          });
      });

      this.drawing?.on('drawupdate', () => {
        const { bgAPoints, bgBPoints, pairedPoints } = visualizeTripLine(this.drawing?._array, TRIPLINEDEFAULTSENSITIVITY);
        const { x: triplineMidpointX, y: triplineMidpointY, i: triplineMidpointI } = findPolylineMidpoint(this.drawing?._array);
        const angle = getDiffAngle(pairedPoints, triplineMidpointI);

        const tempTriplineBG = this.svgContainer?.findOne('#temp-tripline-bg');
        const tempTriplineLeftLine = this.svgContainer?.findOne('#temp-tripline-leftline');
        const tempTriplineRightLine = this.svgContainer?.findOne('#temp-tripline-rightline');
        const tempTriplineTriangle = this.svgContainer?.findOne('#temp-tripline-triangle');

        if (tempTriplineBG && tempTriplineBG.type === 'polygon' && tempTriplineLeftLine && tempTriplineLeftLine.type === 'line' && tempTriplineRightLine && tempTriplineRightLine.type === 'line' && tempTriplineTriangle && tempTriplineTriangle.type === 'polygon') {
          (tempTriplineBG as SVG.Polygon).plot([...bgAPoints, ...bgBPoints]);
          (tempTriplineLeftLine as SVG.Line).plot([bgAPoints[0], bgBPoints[bgBPoints.length - 1]]);
          (tempTriplineRightLine as SVG.Line).plot([bgAPoints[bgAPoints.length - 1], bgBPoints[0]]);
          (tempTriplineTriangle as SVG.Polygon).plot(getEquilateralTriangleVertices(triplineMidpointX, triplineMidpointY, 30))
            // .center(triplineMidpointX, triplineMidpointY)
            .center(
              getCoordinates(triplineMidpointX, triplineMidpointY, angle, (TRIPLINEDEFAULTSENSITIVITY + 12) * (TRIPLINEDEFAULTINVERSED ? -1 : 1)).x,
              getCoordinates(triplineMidpointX, triplineMidpointY, angle, (TRIPLINEDEFAULTSENSITIVITY + 12) * (TRIPLINEDEFAULTINVERSED ? -1 : 1)).y
            )
            .transform({ rotate: radiansToDegrees(angle) + (TRIPLINEDEFAULTINVERSED ? 0 : 180) });
        }
      });
    
      this.drawing?.attr({
        'stroke': 'rgba(21, 101, 192, 1)',
        'stroke-width': 5,
        'fill': 'transparent',
        'pointer-events': 'visiblePainted'
      });

      window.addEventListener('keydown', this.drawStartTripLineKeyEvents);
    }
  },

  drawEndTripLine(this: Drawer) {
    window.removeEventListener('keydown', this.drawStartTripLineKeyEvents);
    this.emitter.emit('drawEnd', { drawing: this.drawing, artype: 'tripline', points: this.drawing?._array });
    this.svgContainer?.findOne('#temp-tripline-bg')?.remove();
    this.svgContainer?.findOne('#temp-tripline-leftline')?.remove();
    this.svgContainer?.findOne('#temp-tripline-rightline')?.remove();
    this.svgContainer?.findOne('#temp-tripline-triangle')?.remove();
    this.drawing?.remove();
    this.drawing = null;
  },

  drawCancelTripLine(this: Drawer) {
    window.removeEventListener('keydown', this.drawStartTripLineKeyEvents);
    this.emitter.emit('drawCancel', this.drawing);
    this.svgContainer?.findOne('#temp-tripline-bg')?.remove();
    this.svgContainer?.findOne('#temp-tripline-leftline')?.remove();
    this.svgContainer?.findOne('#temp-tripline-rightline')?.remove();
    this.svgContainer?.findOne('#temp-tripline-triangle')?.remove();
    this.drawing?.remove();
    this.drawing = null;
  }
};

// Method to convert Array of [x,y] coordinates e.g. [[1,1], [2,2]] to Array of {x,y} coordinates e.g. [{x: 1, y: 1}, {x: 2, y: 2}]
function arrToXYObjArr(arr : number[][]){
  return arr.map(arrItem => {
    return { x: arrItem[0], y: arrItem[1] }
  });
};

// Method to convert Array of {x,y} coordinates e.g. [{x: 1, y: 1}, {x: 2, y: 2}] to Array of [x,y] coordinates e.g. [[1,1], [2,2]]
function axYObjArrToArr(axYObjArr : Array){
  return axYObjArr.map(axYObjArrItem => {
    return [axYObjArrItem.x, axYObjArrItem.y];
  });
};

// Method to return values needed for TripLine Visual
function visualizeTripLine(arr: PointArray, thickness: number) {
  const arrObject = arrToXYObjArr(arr);
  const pairedPoints = pairElements(arrObject);
  const bgAPoints : any = [];
  const bgBPoints : any = [];

  for (let i = 0; i < pairedPoints.length; i++) {
    const xDiff = parseInt(`${pairedPoints[i][1].x - pairedPoints[i][0].x}`, 10);
    const yDiff = parseInt(`${pairedPoints[i][1].y - pairedPoints[i][0].y}`, 10);
    const angle = Math.atan2(yDiff, xDiff);
    // const distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));

    const rotatedCoordinatesBgAPointsA = getRotatedLineCoordinates(
      pairedPoints[i][0].x,
      pairedPoints[i][0].y,
      pairedPoints[i][0].x,
      pairedPoints[i][0].y - thickness,
      angle
    );
    const rotatedCoordinatesBgBPointsA = getRotatedLineCoordinates(
      pairedPoints[i][0].x,
      pairedPoints[i][0].y,
      pairedPoints[i][0].x,
      pairedPoints[i][0].y + thickness,
      angle
    );
    bgAPoints.push(rotatedCoordinatesBgAPointsA);
    bgBPoints.push(rotatedCoordinatesBgBPointsA);

    const rotatedCoordinatesBgAPointsB = getRotatedLineCoordinates(
      pairedPoints[i][1].x,
      pairedPoints[i][1].y,
      pairedPoints[i][1].x,
      pairedPoints[i][1].y - thickness,
      angle
    );
    const rotatedCoordinatesBgBPointsB = getRotatedLineCoordinates(
      pairedPoints[i][1].x,
      pairedPoints[i][1].y,
      pairedPoints[i][1].x,
      pairedPoints[i][1].y + thickness,
      angle
    );
    bgAPoints.push(rotatedCoordinatesBgAPointsB);
    bgBPoints.push(rotatedCoordinatesBgBPointsB);
  }

  bgBPoints.reverse();

  return { bgAPoints: axYObjArrToArr(bgAPoints), bgBPoints: axYObjArrToArr(bgBPoints), pairedPoints }
};

function pairElements(arr: Array) {
  let pairedArray : any = [];

  for (let i = 0; i < arr.length - 1; i++) {
    pairedArray.push([arr[i], arr[i + 1]]);
  }

  return pairedArray;
};

function getRotatedLineCoordinates(x1: number, y1: number, x2: number, y2: number, angleRad: number) {
  // const angleRad = angleDeg * (Math.PI / 180); // Convert degrees to radians

  // Translate points so that x1, y1 becomes the origin
  const translatedX2 = x2 - x1;
  const translatedY2 = y2 - y1;

  // Rotate translated points
  const rotatedCoordinates = rotatePoint(translatedX2, translatedY2, angleRad);

  // Translate back to the original coordinates system
  rotatedCoordinates.x += x1;
  rotatedCoordinates.y += y1;

  return rotatedCoordinates;
};

// Method to rotate a point
function rotatePoint(x: number, y: number, angleRad: number) {
  const newX = x * Math.cos(angleRad) - y * Math.sin(angleRad);
  const newY = x * Math.sin(angleRad) + y * Math.cos(angleRad);
  return { x: newX, y: newY };
};

// Function to find the midpoint of a polyline within a path
function findPolylineMidpoint(coordinates: Array) {
  let totalDistance = 0;
  const distances : any = [];

  // Calculate cumulative distances along the polyline
  for (let i = 0; i < coordinates.length - 1; i++) {
    const distance = calculateDistance(coordinates[i], coordinates[i + 1]);
    totalDistance += distance;
    distances.push(totalDistance);
  }

  const halfDistance = totalDistance / 2;
  let currentDistance = 0;

  // Find the segment where the midpoint lies
  for (let i = 0; i < distances.length; i++) {
    if (distances[i] >= halfDistance) {
      const ratio =
        (halfDistance - currentDistance) / (distances[i] - currentDistance);
      const [x1, y1] = coordinates[i];
      const [x2, y2] = coordinates[i + 1];
      const x = x1 + (x2 - x1) * ratio;
      const y = y1 + (y2 - y1) * ratio;
      // return [x, y];
      return { x, y, i };
    }
    currentDistance = distances[i];
  }

  // Default case: If midpoint is not found, return the last coordinate
  return {
    x: coordinates[coordinates.length - 1][0],
    y: coordinates[coordinates.length - 1][1],
    i: coordinates.length - 1,
  };
};

// Function to calculate distance between two points
function calculateDistance(point1: Array, point2: Array) {
  const [x1, y1] = point1;
  const [x2, y2] = point2;
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

// Function to calculate vertices of an equilateral triangle
function getEquilateralTriangleVertices(x: number, y: number, sideLength: number) {
  const height = (Math.sqrt(3) / 2) * sideLength;
  const dTop = (2 / 3) * height; // Distance from centroid to the top vertex
  const dBase = (1 / 3) * height; // Distance from centroid to the base vertices

  return [
    [x, y - dTop], // Top vertex
    [x - sideLength / 2, y + dBase], // Bottom-left vertex
    [x + sideLength / 2, y + dBase], // Bottom-right vertex
  ];
};

// Calculate Length of all points
function calculateTotalLength(points: Array) {
  let totalLength = 0;

  for (let i = 0; i < points.length - 1; i++) {
      const dx = points[i + 1].x - points[i].x;
      const dy = points[i + 1].y - points[i].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      totalLength += distance;
  }

  return totalLength;
};

function getDiffAngle(pairedPoints: Array, triplineMidpointI: number) {
  const xDiff = parseInt(
    `${pairedPoints[triplineMidpointI][1].x - pairedPoints[triplineMidpointI][0].x}`,
    10
  );
  const yDiff = parseInt(
    `${pairedPoints[triplineMidpointI][1].y - pairedPoints[triplineMidpointI][0].y}`,
    10
  );

  return Math.atan2(yDiff, xDiff);
}

// Function to convert radians to degrees
function radiansToDegrees(radians: number) {
  return radians * (180 / Math.PI);
};

// Function to convert degrees to radians
function degreesToRadians(degrees: number) {
  return degrees * (Math.PI / 180);
};

// Function to get coordinates from an origin with angle and distance
function getCoordinates(x1: number, y1: number, angle: number, distance: number) {
  
  // Calculate x2 and y2
  const x = x1 + distance * Math.cos(angle + Math.PI/2);
  const y = y1 + distance * Math.sin(angle + Math.PI/2);

  return { x, y };
};