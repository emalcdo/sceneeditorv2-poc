import React from 'react';
import {  useSceneEditorContext } from './SceneEditorProvider';

const SceneEditor_Tools: React.FC = () => {

  const { drawerRef, removeAllActiveRegions } = useSceneEditorContext();

  function drawZoneF() {
    if(drawerRef.current) {
      drawerRef.current.drawStartZone();
    }
  };
  
  function drawTripLineF() {
    if(drawerRef.current) {
      drawerRef?.current.drawStartTripLine();
    }
  };

  function removeAllActiveRegionsF() {
    removeAllActiveRegions();
  };

  return (
    <div>
      <p>Tools</p>
      <button type='button' onClick={drawTripLineF}>Draw Trip Line</button>
      <button type='button' onClick={drawZoneF}>Draw Zone</button>
      <button type='button' onClick={removeAllActiveRegionsF}>Clear</button>
    </div>
  )
};

export default SceneEditor_Tools;