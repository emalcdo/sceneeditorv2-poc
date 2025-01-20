import React from 'react';
import { useSceneEditorContext } from './SceneEditorProvider';

const SceneEditor_Tools: React.FC = () => {

  const { drawerRef, scene } = useSceneEditorContext();

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

  return (
    <section>
      <h3>Tools</h3>
      <button type='button' disabled>Hand Tool</button>
      <button type='button' disabled>Select Tool</button>
      <button type='button' onClick={drawTripLineF} disabled={!scene.id}>Draw Trip Line Tool</button>
      <button type='button' onClick={drawZoneF} disabled={!scene.id}>Draw Zone Tool</button>
      <button type='button' onClick={drawDestinationF} disabled={!scene.id}>Draw Destination Tool</button>
    </section>
  )
};

export default SceneEditor_Tools;