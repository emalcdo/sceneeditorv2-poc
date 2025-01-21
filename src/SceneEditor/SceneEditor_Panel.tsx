import React from 'react';
import {  useSceneEditorContext } from './SceneEditorProvider';
import { ActiveRegion } from './SceneEditor.d';
import { isTabbable } from './utils';

const SceneEditor_Panel: React.FC = () => {
  const { scene, activeServiceApplet, setActiveServiceApplet, activeServiceAppletActiveRegion, setActiveServiceAppletActiveRegion, updateSceneName, removeActiveRegion, setARToEditInfo } = useSceneEditorContext();

  const serviceAppletsOptions = scene.serviceApplets;

  const handleChangeActiveServiceAppletF = (e: React.FormEvent<HTMLSelectElement>) => {
    const appID = parseInt(e.target.value, 10);
    const serviceApplet = serviceAppletsOptions.find(serviceAppletsOption => serviceAppletsOption.appID === appID);
    setActiveServiceApplet(serviceApplet);
  };

  const changeSceneNameF = (e: React.FormEvent<HTMLInputElement>) => {
    updateSceneName(e.currentTarget.value);
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

  const setActiveServiceAppletActiveRegionF = (activeRegionAvailableTabbable: any) => {
    setActiveServiceAppletActiveRegion(activeRegionAvailableTabbable);
  };

  // Filter tabbable Service Applet Active Region type
  let activeRegionsAvailableTabbable = [];
  if(activeServiceApplet) {
    activeRegionsAvailableTabbable = activeServiceApplet?.activeRegionsAvailable.filter(activeRegionAvailable => isTabbable(activeRegionAvailable.typeID));
  }

  // Filter Regions by activeServiceApplet, activeServiceAppletActiveRegion
  const filteredActiveRegions = scene.regions
    .filter(regionItem => regionItem.app === activeServiceApplet)
    .filter(regionItem => regionItem.typeID === activeServiceAppletActiveRegion?.typeID);

  return (
    <section>
      <h3>Panel</h3>

      <div>
        <label htmlFor='serviceApplets'>Active Service Applet:</label>
        <select 
          id='serviceApplets' 
          name='serviceApplets' 
          value={activeServiceApplet?.appID} 
          onChange={handleChangeActiveServiceAppletF}
          disabled={!scene.id}
        >
          {serviceAppletsOptions.map((serviceAppletsOption) => (
            <option key={`serviceApplets-${serviceAppletsOption.appID}`} value={serviceAppletsOption.appID}>
              {serviceAppletsOption.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor='sceneNameInput'>Scene Name: </label>
        <input id='sceneNameInput' type='text' value={scene.name} onChange={changeSceneNameF} disabled={!scene.id} />
      </div>

      <div>
        <label>Active Service Applet Active Region: {activeServiceAppletActiveRegion?.type}</label>
        <br/>
        {activeRegionsAvailableTabbable.length > 0 ?
          <>
            {activeRegionsAvailableTabbable.map((activeRegionAvailableTabbable : any) => (
              <button key={`activeRegionsAvailableTabbable-${activeRegionAvailableTabbable.typeID}`} type='button' onClick={() => { setActiveServiceAppletActiveRegionF(activeRegionAvailableTabbable); }}>
                {activeRegionAvailableTabbable.type}
              </button>
            ))}
          </>
          :
          <>No Available Service Applet Active Regions</>
        }
      </div>

      <h4>Active Regions</h4>
      {filteredActiveRegions.length === 0 && 'No Active Regions'}
      {filteredActiveRegions.length > 0 &&
        <>
          {filteredActiveRegions.map((activeRegion) => {
            return (
              <div key={`activeRegion-${activeRegion.tempID}`} id={`activeRegion-${activeRegion.tempID}`}>
                {activeRegion.id} - {activeRegion.name} : {activeRegion.type} - {activeRegion.app.code}
                <button type='button' onClick={() => { setARToEditInfoF(activeRegion); }}>Edit</button>
                <button type='button' onClick={() => { removeActiveRegionF(activeRegion); }}>Remove</button>
              </div>
            )
          })}
        </>
      }
    </section>
  )
};

export default SceneEditor_Panel;