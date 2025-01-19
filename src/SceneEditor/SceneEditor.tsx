import React from 'react';

import { SceneEditorProvider } from './SceneEditorProvider';
import SceneEditor_Header from './SceneEditor_Header';
import SceneEditor_Tools from './SceneEditor_Tools';
import SceneEditor_Workspace from './SceneEditor_Workspace';
import SceneEditor_Panel from './SceneEditor_Panel';
import SceneEditor_ARInfoEditor from './SceneEditor_ARInfoEditor';
import SceneEditor_SceneDebugger from './SceneEditor_SceneDebugger';

const SceneEditor: React.FC = () => {
  return (
    <SceneEditorProvider>
      <SceneEditor_Header />
      <SceneEditor_Tools />
      <SceneEditor_Workspace />
      <SceneEditor_Panel />
      <SceneEditor_ARInfoEditor />
      <SceneEditor_SceneDebugger />
    </SceneEditorProvider>
  )
};

export default SceneEditor;