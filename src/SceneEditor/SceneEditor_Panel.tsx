import React from 'react';
import {  useSceneEditorContext } from './SceneEditorProvider';
import { ActiveRegion } from './SceneEditor.d';

const SceneEditor_Panel: React.FC = () => {
  const { scene, updateSceneName, removeActiveRegion, setARToEditInfo } = useSceneEditorContext();

  const changeSceneNameF = (e: React.FormEvent<HTMLInputElement>) => {
    updateSceneName(e.currentTarget.value)
  };

  const setARToEditInfoF = (activeRegion: ActiveRegion) => {
    const arToEditInfo = { activeRegion, mode: 'Edit' };
    setARToEditInfo(arToEditInfo);
  };

  const removeActiveRegionF = (activeRegion: ActiveRegion) => {
    const { id } = activeRegion;
    if(id) {
      removeActiveRegion(id);
    }
  };

  return (
    <div>
      <p>Panel</p>
      <label htmlFor="sceneNameInput">Scene Name: </label>
      <input id="sceneNameInput" type="text" value={scene.name} onChange={changeSceneNameF} />
      <p>Active Regions</p>
      {scene.activeRegions.length === 0 && "No Active Regions"}
      {scene.activeRegions.length > 0 &&
        <>
          {scene.activeRegions.map((activeRegion) => {
            return (
              <div key={`activeRegion-${activeRegion.id}`} id={`activeRegion-${activeRegion.id}`}>
                {activeRegion.id} - {activeRegion.name} : {activeRegion.type}
                <button type="button" onClick={() => { setARToEditInfoF(activeRegion); }}>Edit</button>
                <button type="button" onClick={() => { removeActiveRegionF(activeRegion); }}>Remove</button>
              </div>
            )
          })}
        </>
      }
    </div>
  )
};

export default SceneEditor_Panel;