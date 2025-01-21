import React from 'react';

import { useSceneEditorContext } from './SceneEditorProvider';
import { hasActiveRegionInActiveServiceApplet } from './utils';
import { TripLine } from './Drawer/TripLine';
import { Zone } from './Drawer/Zone';
import { Destination } from './Drawer/Destination';

const SceneEditor_Tools: React.FC = () => {

  const { drawerRef, scene, activeServiceApplet, activeServiceAppletActiveRegion } = useSceneEditorContext();

  const drawZoneF = () => {
    if(drawerRef.current) {
      drawerRef.current.drawStartZone();
    }
  };
  
  const drawTripLineF = () => {
    if(drawerRef.current) {
      drawerRef?.current.drawStartTripLine();
    }
  };

  const drawDestinationF = () => {
    if(drawerRef.current) {
      drawerRef?.current.drawStartDestination();
    }
  };

  const drawTripLineTool = <>
    {(
      hasActiveRegionInActiveServiceApplet(TripLine.typeID, activeServiceApplet) && 
      activeServiceAppletActiveRegion?.typeID === TripLine.typeID) && 
      <button type='button' onClick={drawTripLineF} disabled={!scene.id}>Draw Trip Line Tool</button>
    }
  </>;

  const drawZoneTool = <>
    {(
      hasActiveRegionInActiveServiceApplet(Zone.typeID, activeServiceApplet) && 
      activeServiceAppletActiveRegion?.typeID === Zone.typeID) && 
      <button type='button' onClick={drawZoneF} disabled={!scene.id}>Draw Zone Tool</button>
    }
  </>;

  const drawDestinationTool = <>
    {(
      hasActiveRegionInActiveServiceApplet(Destination.typeID, activeServiceApplet) && 
      activeServiceAppletActiveRegion?.typeID === Destination.typeID) && 
      <button type='button' onClick={drawDestinationF} disabled={!scene.id}>Draw Destination Tool</button>
    }
  </>;

  return (
    <section>
      <h3>Tools</h3>
      <button type='button' disabled>Hand Tool</button>
      <button type='button' disabled>Select Tool</button>
      {drawTripLineTool}
      {drawZoneTool}
      {drawDestinationTool}
    </section>
  )
};

export default SceneEditor_Tools;