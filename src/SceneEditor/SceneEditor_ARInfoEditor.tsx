import React, { FormEvent } from 'react';
import {  useSceneEditorContext } from './SceneEditorProvider';

const SceneEditor_ARInfoEditor: React.FC = () => {
  const { arToEditInfo, setARToEditInfo, removeActiveRegion } = useSceneEditorContext();

  if(!arToEditInfo) return;

  let mode: string | null = null
  if(arToEditInfo) {
    mode = arToEditInfo.mode;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

  const removeActiveRegionF = () => {
    const { activeRegion: { id } } = arToEditInfo;
    if(id) {
      removeActiveRegion(id);
    }
  };

  return (
    <div>
      <p>{mode} AR</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" defaultValue={arToEditInfo.activeRegion.name} />
        </div>
        {arToEditInfo.activeRegion.svg?.renderForm()}
        <button type='submit'>Submit</button>
      </form>
      <div>
        <button type="button" onClick={() => { setARToEditInfo(null); }}>Update</button>
        <button type="button" onClick={() => { setARToEditInfo(null); }}>Revert</button>
        <button type="button" onClick={() => { setARToEditInfo(null); }}>Cancel</button>
        <button type="button" onClick={removeActiveRegionF}>Remove</button>
      </div>
    </div>
  )
};

export default SceneEditor_ARInfoEditor;