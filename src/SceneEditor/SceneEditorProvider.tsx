import React, { 
  createContext, 
  useState, 
  // useEffect,
  useRef, 
  useContext, 
  ReactNode, 
  useEffect
} from 'react';

import { Drawer, getActiveRegionTypeByID, getActiveRegionClassTypeByType } from './Drawer/Drawer';
import { Scene, ActiveRegion, ServiceApplet } from './SceneEditor.d';

export type SceneEditorContextType = {
  scene: Scene;
  loadScene: (isTest: boolean, testSceneObj: any, testFeeders: any) => void;
  drawerRef: React.MutableRefObject<Drawer | null>;
  activeServiceApplet: ServiceApplet | null,
  setActiveServiceApplet: (serviceApplet: ServiceApplet | null) => void;
  updateSceneName: (name: string) => void;
  addActiveRegion: (activeRegion: ActiveRegion) => void;
  updateActiveRegion: (id: number, activeRegion: ActiveRegion) => void;
  removeActiveRegion: (id: number) => void;
  removeAllActiveRegions: () => void;
  arToEditInfo: ARToEditInfo | null;
  setARToEditInfo: (arToEditInfo: ARToEditInfo | null) => void;
  clearScene: () => void;
  saveScene: () => object;
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
    regions: [],
    sceneImage: '',
    identityID: null,
    serviceApplets: [],
    _unsanitizedSceneObj: null
  });
  const [activeServiceApplet, setActiveServiceApplet] = useState<ServiceApplet | null>(null);
  const [arToEditInfo, setARToEditInfo] = useState<ARToEditInfo | null>(null);
  const drawerRef = useRef<Drawer | null>(null);

  // Load Scene Function from API or using a testSceneObj, testFeeders
  const loadScene = async(isTest: boolean = false, testSceneObj: any = {}, testFeeders: any = []) => {
    // Clear workspace
    setScene({
      id: null,
      name: '',
      regions: [],
      sceneImage: '',
      identityID: null,
      serviceApplets: [],
      _unsanitizedSceneObj: null
    });
    setActiveServiceApplet(null);
    setARToEditInfo(null)
    drawerRef.current?.clear();

    // Wait for .5s
    await timeout(500);

    // Load Scene
    let _unsanitizedSceneObj : any = {};
    if(!isTest) {
      // Get scene id from params
      // Load scene object async API by id
    } else {
      _unsanitizedSceneObj = testSceneObj;
    }

    // Set scene and map regions
    const { id, name, feeder: { id: feederID, feeder_asset, identity: { id: identityID } } } = _unsanitizedSceneObj;

    // Get Scene Image/Asset
    const sceneImage = feeder_asset?.[0]?.asset;

    // Load Feeders to get available scenable service applets for the scene's feeder
    let serviceApplets : ServiceApplet[] = [];
    if(!isTest) {
    } else {
      const sceneFeeder = testFeeders.find((feederItem: any) => feederItem.id === feederID);
      if(sceneFeeder) {
        const sceneFeederServiceApplets = sceneFeeder?.apps || sceneFeeder?.sensor_apps;
        const sceneFeederServiceAppletsScenable = sceneFeederServiceApplets.filter((app: any) => {
          return app.app?.config?.scene;
        });

        if(sceneFeederServiceAppletsScenable.length) {
          serviceApplets = sceneFeederServiceAppletsScenable.map((serviceApplet: any) => {
            const { app_id: appID, app: { code, name, description, config: { logo } }} = serviceApplet;
            return {
              appID,
              code,
              name,
              description,
              logo
            }
          })
        }
      }
    }
    
    setScene((prev) => ({
      ...prev,
      id,
      name,
      sceneImage,
      identityID,
      serviceApplets,
      _unsanitizedSceneObj
    }));
    if(serviceApplets.length) {
      setActiveServiceApplet(serviceApplets[0]);
    }
  };

  // Function to setup scene
  const setupScene = async() => {
    
    // Setup Scene Image
    if(scene.sceneImage) {
      try {
        const sceneImageObj = await loadSceneImage(scene.sceneImage);
        const resolution = getResolution(sceneImageObj.width, sceneImageObj.height);
        
        drawerRef.current?.svgContainer?.size(resolution.width, resolution.height);
        drawerRef.current?.svgContainer?.image(sceneImageObj.url).move(0, 0).size(resolution.width, resolution.height).attr({ id: 'scene-image' });
      } catch (error) {
        console.error(error.message);
      }
    }

    // Wait for .5s
    await timeout(500);

    // Setup Active Regions
    if(scene._unsanitizedSceneObj.regions.length > 0) {
      const regions = scene._unsanitizedSceneObj.regions.map((region : any) => {
        const { id, name, points: rawPoints, features, app_id: appID} = region;
        const { type : typeID } = features;
        const type = getActiveRegionTypeByID(typeID);
        const app = scene.serviceApplets.find(serviceApplet => serviceApplet.appID === appID);
        const activeRegion : ActiveRegion = {
          id,
          tempID: id,
          name,
          type,
          svg: null,
          app
        };

        const _typeClass = getActiveRegionClassTypeByType(typeID);
        const points = transformPointsByIdentityID(rawPoints, scene.identityID);
        const svg = new _typeClass(drawerRef.current?.svgContainer, points, activeRegion, features);
        activeRegion.svg = svg;

        // Show/Hide Active Region based on activeServiceApplet
        activeServiceApplet === activeRegion.app ? activeRegion.svg.show() : activeRegion.svg.hide();

        return activeRegion;
      });

      setScene((prev) => ({
        ...prev,
        regions
      }));
    }

  };

  // Run SetupScene on scene._unsanitizedSceneObj changes
  useEffect(() => {
    if(scene._unsanitizedSceneObj) {
      setupScene();
    }
  }, [scene._unsanitizedSceneObj]);

  // Run showHideActiveRegions on scene._unsanitizedSceneObj changes
  useEffect(() => {
    if(activeServiceApplet) {
      showHideActiveRegions();
    }
  }, [activeServiceApplet]);

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
      regions: [...prev.regions, activeRegion]
    }));

    // Backup current data in case of revert, and show AR Info Editor
    activeRegion.svg?.backup();
    setARToEditInfo({ activeRegion, mode: 'Add' });
  };

  // Function to update an active region by id
  const updateActiveRegion = (tempID: number, updatedActiveRegion: ActiveRegion) => {
    setScene((prev) => ({
      ...prev,
      regions: prev.regions.map((activeRegion) => 
        activeRegion.tempID === tempID ? { ...activeRegion, ...updatedActiveRegion } : activeRegion
      )
    }));
  };

  // Function to remove an active region by id
  const removeActiveRegion = (tempID: number) => {
    const activeRegion = scene.regions.find((activeRegion) => activeRegion.id === tempID);
    if(activeRegion) {
      activeRegion.svg?.destroy();
    }

    setARToEditInfo(null);
    setScene((prev) => ({
      ...prev,
      regions: prev.regions.filter((activeRegion) => activeRegion.id !== id)
    }));
  };

  // Function to remove all active regions
  const removeAllActiveRegions = () => {
    // Destroy each active region's SVG
    scene.regions.forEach((activeRegion) => {
      activeRegion.svg?.destroy();
    });

    setARToEditInfo(null);
    setScene((prev) => ({
      ...prev,
      regions: []
    }));
  };

  // Function to show hide active regions by activeServiceApplet
  const showHideActiveRegions = () => {
    scene.regions.forEach(activeRegion => {
      activeServiceApplet === activeRegion.app ? activeRegion?.svg.show() : activeRegion?.svg.hide();
    })
  };

  // Function to clear scene
  const clearScene = () => {
    removeAllActiveRegions();
    
    // Clear SVGContainer
    drawerRef.current?.clear();
    drawerRef.current?.svgContainer?.size(RESOLUTIONS["16:9"].width, RESOLUTIONS["16:9"].height);
    
    setScene({
      id: null,
      name: '',
      regions: [],
      sceneImage: '',
      identityID: null,
      serviceApplets: [],
      _unsanitizedSceneObj: null
    });
  };

  // Function to save scene
  const saveScene = () => {
    let scenePayload = {
      id: scene.id,
      name: scene.name,
      regions: [],
      usecase: activeServiceApplet?.code
    };
    scenePayload.regions = scene.regions.map(region => {
      const { id, name } = region;
      const activeRegion : any = {
        id,
        name,
        features: region?.svg?.getFeatures(),
        points: retransformPointsByIdentityID(region.svg.points, scene.identityID)
      };

      if(!id) {
        delete activeRegion.id;
      }

      return activeRegion;
    });

    return scenePayload;
  };

  // Context Value
  const contextValue: SceneEditorContextType = {
    scene,
    loadScene,
    drawerRef,
    activeServiceApplet,
    setActiveServiceApplet,
    updateSceneName,
    addActiveRegion,
    updateActiveRegion,
    removeActiveRegion,
    removeAllActiveRegions,
    arToEditInfo,
    setARToEditInfo,
    clearScene,
    saveScene
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

// Helper function to create a delay using setTimeout
function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const RESOLUTIONS : any = {
  "16:9": { width: 640, height: 360 },
  "9:16": { width: 360, height: 640 },
  "1:1": { width: 480, height: 480 }
};

function calculateRatio(width: number, height: number) {
  for(let height1 = height; height1 > 1; height1--) {
    if((width % height1) == 0 && (height % height1) == 0) {
      width = width / height1;
      height = height / height1;
    }
  }

  const ratio = width + ":" + height;
  return ratio;
};

function getResolution(width: number, height: number) {
  const ratio = calculateRatio(width, height);

  if(RESOLUTIONS[ratio]) {
    return RESOLUTIONS[ratio];
  } else if(width > height) {
    return RESOLUTIONS["16:9"]; // Landscape
  } else {
    return RESOLUTIONS["9:16"]; // Portrait
  }
};

function loadSceneImage(url: string) {
  return new Promise((resolve, reject) => {
    const img = new Image(); // Create a new Image object

    // Set up the onload handler
    img.onload = () => {
      // Ensure that the image is fully loaded (including external resources like CSS)
      if (img.complete && img.naturalWidth !== 0) {
        resolve({
          image: img,
          width: img.width,
          height: img.height,
          url
        });
      } else {
        reject(new Error(`Image failed to load completely at ${url}`));
      }
    };

    // Set up the onerror handler
    img.onerror = () => {
      reject(new Error(`Failed to load image at ${url}`));
    };

    // Set the image source
    img.src = url;
  });
};

// FINAL DON'T CHANGE THIS VALUE
const ZOOMFOREDGELESS = 1.44;
const ZOOMFORDEVICES = 1;

// Function to transform points based on feeder identity
function transformPointsByIdentityID(rawPoints: number[][] | number[], identityID:  number) {
  if(is2DArray(rawPoints)){
    if(identityID === 1) return rawPoints;
    else if(identityID === 2) {
      return rawPoints.map(rawPointsSubArray => rawPointsSubArray.map((value: number) => value * ZOOMFOREDGELESS))
    }
    else {
      return rawPoints;
    }
  } else {
    if(identityID === 1) return rawPoints;
    else if(identityID === 2) {
      return rawPoints.map(value => value * ZOOMFOREDGELESS)
    }
    else {
      return rawPoints;
    }
  }
};

// Function to retransform points based on feeder identity
function retransformPointsByIdentityID(points: number[][] | number[], identityID:  number) {
  if(is2DArray(points)){
    if(identityID === 1) return points;
    else if(identityID === 2) {
      return points.map(pointsSubArray => pointsSubArray.map((value: number) => value * (1/ZOOMFOREDGELESS)))
    }
    else {
      return points;
    }
  } else {
    if(identityID === 1) return points;
    else if(identityID === 2) {
      return points.map(value => value * (1/ZOOMFOREDGELESS))
    }
    else {
      return points;
    }
  }
};

// Function to check if an array is 2D
function is2DArray(array: any) {
  // Check if the input is an array
  if (!Array.isArray(array)) {
    return false;
  }

  // Check if every element within the array is also an array
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      return false;
    }
  }

  // If all checks pass, return true
  return true;
};
