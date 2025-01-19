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
  regions: ActiveRegion[],
  sceneImage: string,
  identityID: number | null,
  _unsanitizedSceneObj: object | null,
};