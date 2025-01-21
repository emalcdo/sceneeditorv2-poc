import { TripLine } from './Drawer/TripLine';
import { Zone } from './Drawer/Zone';
import { Destination } from './Drawer/Destination';
import { ServiceApplet } from './SceneEditor.d';

export function getActiveRegionTypeByID(id: number) {
  switch(id) {
    case TripLine.typeID:
      return TripLine.type;
    case Zone.typeID:
      return Zone.type;
    case Destination.typeID:
      return Destination.type;
    default:
      return '';
  }
};

export function getActiveRegionClassTypeByType(id: number) {
  switch(id) {
    case TripLine.typeID:
      return TripLine;
    case Zone.typeID:
      return Zone;
    case Destination.typeID:
      return Destination;
    default:
      return Zone;
  }
};

export function isTabbable(id: number) {
  return [
    TripLine.typeID,
    Zone.typeID,
    Destination.typeID
  ].indexOf(id) !== -1 ? true : false;
};

export function hasActiveRegionInActiveServiceApplet(typeID: number, activeServiceApplet: ServiceApplet | null) {
  if(!activeServiceApplet) return false;

  return activeServiceApplet.activeRegionsAvailable?.map(activeRegionAvailable => activeRegionAvailable.typeID).indexOf(typeID) !== -1;
};