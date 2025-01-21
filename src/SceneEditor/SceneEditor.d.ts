import { TripLine } from './Drawer/TripLine';
import { Zone } from './Drawer/Zone';

export type Coordinate = {
  x: number;
  y: number;
};

export type ServiceApplet = {
  appID: number;
  code: string;
  name: string;
  description: string;
  logo: string;
  activeRegionsAvailable?: { typeID: number, type: string }
};

export type ActiveRegion = {
  id: number | null;
  tempID: number;
  name: string;
  typeID: number;
  type: string;
  svg: TripLine | Zone | null,
  app: ServiceApplet
};

export type Scene = {
  id: number | null;
  name: string;
  regions: ActiveRegion[],
  sceneImage: string,
  identityID: number | null,
  serviceApplets: ServiceApplet[],
  _unsanitizedSceneObj: object | null,
};