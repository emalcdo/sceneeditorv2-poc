import React, { useState, FormEvent } from 'react';
import {  useSceneEditorContext } from './SceneEditorProvider';

const SceneEditor_ARInfoEditor: React.FC = () => {
  const { arToEditInfo, setARToEditInfo, updateActiveRegion, removeActiveRegion } = useSceneEditorContext();
  const [rerenderingForm, setReRenderingForm] = useState<boolean>(false);

  if(!arToEditInfo) return;

  let mode: string | null = null
  if(arToEditInfo) {
    mode = arToEditInfo.mode;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { activeRegion: { tempID, ...otherInfo } } = arToEditInfo;

    // console.log(e);
    // Handle here the validation
    if(tempID) {
      updateActiveRegion(tempID, {
        ...otherInfo,
        name: e.target?.name?.value,
        tempID
      })
      setARToEditInfo(null);
    }
  };

  const removeActiveRegionF = () => {
    const { activeRegion: { id } } = arToEditInfo;
    if(id) {
      removeActiveRegion(id);
    }
  };
  const revertARToEditInfoF = () => {
    const { activeRegion: { svg } } = arToEditInfo;
    if(svg) {
      svg.restore();

      // Use setTimeout to rerender renderForm()
      setReRenderingForm(true);
      setTimeout( () => {
        setReRenderingForm(false);
      }, 1);
    }
  };

  const cancelARToEditInfoF = () => {
    const { activeRegion: { svg } } = arToEditInfo;
    if(svg) {
      svg.restore();
    }
    setARToEditInfo(null);
  };

  return (
    <section>
      <h3>{mode} AR</h3>
      {!rerenderingForm &&
        <form onSubmit={handleSubmit} autoComplete='off'>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" defaultValue={arToEditInfo.activeRegion.name} />
          </div>
          
          {/* Call AR renderForm function */}
          {arToEditInfo.activeRegion.svg?.renderForm()}

          <button type='submit'>Submit</button>
        </form>
        }
      <div>
        <button type="button" onClick={revertARToEditInfoF}>Revert</button>
        <button type="button" onClick={cancelARToEditInfoF}>Cancel</button>
        <button type="button" onClick={removeActiveRegionF}>Remove</button>
      </div>
    </section>
  )
};

export default SceneEditor_ARInfoEditor;