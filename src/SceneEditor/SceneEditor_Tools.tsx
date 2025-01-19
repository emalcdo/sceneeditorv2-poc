import React from 'react';
import {  useSceneEditorContext } from './SceneEditorProvider';

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

  return (
    <div>
      <p>Tools</p>
      <button type='button' onClick={drawTripLineF}>Draw Trip Line</button>
      <button type='button' onClick={drawZoneF}>Draw Zone</button>
    </div>
  )
};

export default SceneEditor_Tools;