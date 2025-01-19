import React, { FormEvent, useState } from 'react';
import {  useSceneEditorContext } from './SceneEditorProvider';

const sampleScene = {
  "id": 2655,
  "name": "Meraki PC Fisheye",
  "description": null,
  "network_id": 9,
  "feeder_id": 3862,
  "date_created": "2024-12-18T06:49:29.322Z",
  "assigned_to": null,
  "created_by": 1764,
  "is_active": true,
  "points": null,
  "site_id": 441,
  "feeder": {
      "id": 3862,
      "name": "Meraki PC Fisheye",
      "camera": {
          "Name": null
      },
      "device": {
          "id": null,
          "name": null,
          "status": "inactive",
          "is_active": null,
          "is_paired": null,
          "description": null,
          "identity_id": null,
          "iothub_device_id": null,
          "last_active_timestamp": null
      },
      "status": "online",
      "usecase": "pc",
      "identity": {
          "id": 2,
          "name": "edgeless"
      },
      "is_active": true,
      "description": "",
      "feeder_apps": [
          {
              "id": 3214,
              "app_id": 7,
              "app_code": "pc",
              "feeder_id": 3862
          }
      ],
      "feeder_asset": [
          {
              "id": 5836,
              "asset": "https://viana2.blob.core.windows.net/production/flatten-images/flatten/flatten-1736404791831-meraki_image_1734504569338-fb.jpeg?sv=2024-05-04&st=2025-01-19T13%3A43%3A37Z&se=2025-01-19T21%3A43%3A37Z&sr=b&sp=rw&sig=2PBChwESCa0ujqIlXKHl5lSVLr%2Buguz9EPkZ1mrf9LU%3D",
              "config": {
                  "k1": 0.004,
                  "k2": -0.005,
                  "k3": 0.001,
                  "k4": 0.001,
                  "vendor": "meraki"
              },
              "feeder_id": 3862
          }
      ]
  },
  "regions": [
      {
          "id": 4159,
          "name": "New Trip Line - 1",
          "description": null,
          "network_id": 9,
          "scene_id": 2655,
          "features": {
              "type": 0,
              "inversed": false,
              "thickness": 20
          },
          "points": [
              [
                  106.28857542635053,
                  85.1658891424858
              ],
              [
                  128.4012293214934,
                  119.33486998520007
              ],
              [
                  198.81017869531055,
                  123.19289460842295
              ],
              [
                  233.60338799270482,
                  92.88193838893152
              ]
          ],
          "color_hm": null,
          "contact_threshold": "0",
          "cleanuptime_threshold": "0",
          "cleanuptime_unit_threshold": null,
          "proximity_threshold": "0",
          "date_created": "2024-12-20T06:18:10.442",
          "assigned_to": null,
          "created_by": 1764,
          "is_active": true,
          "preset_id": null,
          "sla_time": "0",
          "sla_time_unit": "0",
          "doorway_id": null,
          "location_id": null,
          "app": "pc",
          "usecase": "pc",
          "app_id": 7,
          "usecase_id": 5,
          "is_global": false,
          "region_group_id": null,
          "region_global_id": null,
          "visibility_status": null,
          "planogram_id": null,
          "facing_id": null,
          "main_scene_id": null,
          "tags": [],
          "global_scenes": [],
          "products": [],
          "destination_id": null
      }
  ],
  "status": "active",
  "status_id": 1
};

const SceneEditor_SceneDebugger: React.FC = () => {

  const { loadScene, clearScene, saveScene } = useSceneEditorContext();

  const handleLoadSceneSubmit = (e: FormEvent) => {
    e.preventDefault();

    const inputSceneObj = JSON.parse(e.target?.inputScene?.value)
    loadScene(true, inputSceneObj);
  };

  const clearSceneF = () => {
    clearScene();
  };

  const [outputScene, setOutputScene] = useState<string>('');
  const generateOutputSceneF = () => {
    setOutputScene(JSON.stringify(saveScene(true), '' , 2))
  };

  return (
    <div>
      <p>Debugger</p>
      
      <form onSubmit={handleLoadSceneSubmit} autoComplete='off'>
        <textarea id='inputScene' name='inputScene' rows={20} style={{ width: '500px', display: 'block' }} defaultValue={JSON.stringify(sampleScene, '' , 2)} />
        <button type='submit'>Load Scene</button>
        <button type='button' onClick={clearSceneF}>Clear Scene</button>
      </form>

      <div>
        <textarea id='outputScene' name='outputScene' rows={20} style={{ width: '500px', display: 'block' }} value={outputScene} readOnly />
        <button type='button' onClick={generateOutputSceneF}>Save Scene</button>
      </div>
    </div>
  )
};

export default SceneEditor_SceneDebugger;