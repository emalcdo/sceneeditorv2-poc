import { EventEmitter } from 'events';
import { Svg } from '@svgdotjs/svg.js';
import '@svgdotjs/svg.draggable.js';
import './svg.draw.js/svg.draw.js';

// Add ARs here
import { TripLineDrawer } from './TripLine';
import { ZoneDrawer } from './Zone';
import { DestinationDrawer } from './Destination';

// Add Functions for Another AR here
const ARDrawers = {
  ...TripLineDrawer,
  ...ZoneDrawer,
  ...DestinationDrawer
};

export class Drawer {
  public svgContainer: Svg | null;
  public drawing: Svg | null;
  public emitter: EventEmitter;

  constructor(svgContainer: Svg) {
    this.svgContainer = svgContainer;
    this.drawing = null;
    this.emitter = new EventEmitter();

    // Dynamically add methods from utilityFunctions
    Object.keys(ARDrawers).forEach((key) => {
      // Ensure the method is bound to the current instance
      (this as any)[key] = ARDrawers[key].bind(this);
    });
  };

  public clear() {
    this.svgContainer?.clear();
  }
};

// Declare interface functions from Another AR here
export interface Drawer {
  drawStartTripLineKeyEvents(): void;
  drawStartTripLine(): void;
  drawEndTripLine(): void;
  drawCancelTripLine(): void;
  drawStartZoneKeyEvents(): void;
  drawStartZone(): void;
  drawEndZone(): void;
  drawCancelZone(): void;
  drawStartDestinationKeyEvents(): void;
  drawStartDestination(): void;
  drawEndDestination(): void;
  drawCancelDestination(): void;
};