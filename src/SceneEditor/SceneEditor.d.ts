import { TripLine } from './Drawer/TripLine';
import { Zone } from './Drawer/Zone';

export type Coordinate = {
  x: number;
  y: number;
};

export type ActiveRegion = {
  id: number | null;
  name: string;
  type: string;
  svg: TripLine | Zone | null
};

export type Scene = {
  id: number | null;
  name: string;
  activeRegions: ActiveRegion[]
};