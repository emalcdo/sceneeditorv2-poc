import React, { 
  createContext, 
  useState, 
  useRef, 
  useContext, 
  ReactNode 
} from 'react';

import { Drawer } from './Drawer/Drawer';
import { Scene, ActiveRegion } from './SceneEditor.d';

export type SceneEditorContextType = {
  scene: Scene;
  drawerRef: React.MutableRefObject<Drawer | null>;
  updateSceneName: (name: string) => void;
  addActiveRegion: (activeRegion: ActiveRegion) => void;
  updateActiveRegion: (id: number, activeRegion: ActiveRegion) => void;
  removeActiveRegion: (id: number) => void;
  removeAllActiveRegions: () => void;
  arToEditInfo: ARToEditInfo | null;
  setARToEditInfo: (arToEditInfo: ARToEditInfo | null) => void;
};

type ARToEditInfo = {
  activeRegion: ActiveRegion;
  mode: string;
};

// Create Context with Default Value
const SceneEditorContext = createContext<SceneEditorContextType | undefined>(undefined);

type SceneEditorProviderProps = {
  children: ReactNode;
};

export const SceneEditorProvider: React.FC<SceneEditorProviderProps> = ({ children }) => {

  const [scene, setScene] = useState<Scene>({
    id: null,
    name: '',
    activeRegions: []
  });

  const [arToEditInfo, setARToEditInfo] = useState<ARToEditInfo | null>(null);

  const drawerRef = useRef<Drawer | null>(null);

  // Function to update scene name
  const updateSceneName = (name: string) => {
    setScene((prev) => ({
      ...prev,
      name
    }));
  };

  // Function to add an active region
  const addActiveRegion = (activeRegion: ActiveRegion) => {
    setScene((prev) => ({
      ...prev,
      activeRegions: [...prev.activeRegions, activeRegion]
    }));

    setARToEditInfo({ activeRegion, mode: 'Add' });
  };

  // Function to update an active region by id
  const updateActiveRegion = (id: number) => {
    setScene((prev) => ({
      ...prev,
      activeRegions: prev.activeRegions.filter((activeRegion) => activeRegion.id !== id)
    }));
  };

  // Function to remove an active region by id
  const removeActiveRegion = (id: number) => {
    const activeRegion = scene.activeRegions.find((activeRegion) => activeRegion.id === id);
    if(activeRegion) {
      activeRegion.svg?.destroy();
    }

    setARToEditInfo(null);
    setScene((prev) => ({
      ...prev,
      activeRegions: prev.activeRegions.filter((activeRegion) => activeRegion.id !== id)
    }));
  };

  // Function to remove all active regions
  const removeAllActiveRegions = () => {
    // Destroy each active region's SVG
    scene.activeRegions.forEach((activeRegion) => {
      activeRegion.svg?.destroy();
    });

    setARToEditInfo(null);
    setScene((prev) => ({
      ...prev,
      activeRegions: []
    }));
  };

  // Side effect example
  // useEffect(() => {
  //   console.log("Scene data changed:", scene);
  // }, [scene]);

  // Context Value
  const contextValue: SceneEditorContextType = {
    scene,
    drawerRef,
    updateSceneName,
    addActiveRegion,
    updateActiveRegion,
    removeActiveRegion,
    removeAllActiveRegions,
    arToEditInfo,
    setARToEditInfo
  };

  return <SceneEditorContext.Provider value={contextValue}>{children}</SceneEditorContext.Provider>;
};

export const useSceneEditorContext = (): SceneEditorContextType => {
  const context = useContext(SceneEditorContext);
  if (!context) {
    throw new Error("useSceneEditorContext must be used within an SceneEditorProvider");
  }
  return context;
};