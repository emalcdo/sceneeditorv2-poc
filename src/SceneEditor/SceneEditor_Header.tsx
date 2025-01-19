import React from 'react';
import {  useSceneEditorContext } from './SceneEditorProvider';

const SceneEditor_Header: React.FC = () => {
  const { scene } = useSceneEditorContext();

  return (
    <div>
      <p>Header</p>
      <div>
        {scene.id ?
          <>
            {scene.name ? scene.name : 'No Scene'}
          </>
          :
          'No Scene Loaded'
        }
      </div>
    </div>
  )
};

export default SceneEditor_Header;