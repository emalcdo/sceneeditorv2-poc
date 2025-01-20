import React from 'react';
import { useSceneEditorContext } from './SceneEditorProvider';

const SceneEditor_Tools: React.FC = () => {

  const { drawerRef } = useSceneEditorContext();

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
      <button type='button' onClick={drawTripLineF}>Draw Trip Line Tool</button>
      <button type='button' onClick={drawZoneF}>Draw Zone Tool</button>
      <button type='button' onClick={drawDestinationF}>Draw Destination Tool</button>
    </section>
  )
};

export default SceneEditor_Tools;