import React from 'react';
import {  useSceneEditorContext } from './SceneEditorProvider';

const SceneEditor_Header: React.FC = () => {
  const { scene, activeServiceApplet } = useSceneEditorContext();

  return (
    <section>
      <h3>Header</h3>
      <div>
        {scene.id ?
          <>
            {scene.name ? scene.name : 'No Scene'} - {activeServiceApplet?.name}
          </>
          :
          'No Scene Loaded'
        }
      </div>
    </section>
  )
};

export default SceneEditor_Header;