import React, { useEffect, useRef, useMemo } from 'react';
import { SVG } from '@svgdotjs/svg.js';

import { faker } from '@faker-js/faker';

import { Drawer } from './Drawer/Drawer';
import { TripLine } from './Drawer/TripLine';
import { Zone } from './Drawer/Zone';
import { Destination } from './Drawer/Destination';
import { useSceneEditorContext, RESOLUTIONS } from './SceneEditorProvider';
import { ActiveRegion } from './SceneEditor.d';

const SceneEditor_Workspace: React.FC = () => {
  const { drawerRef, scene, addActiveRegion, activeServiceApplet, activeServiceAppletActiveRegion } = useSceneEditorContext();
  const svgContainerRef = useRef<HTMLDivElement | null>(null);
  const SVGContainer = useMemo(() => SVG().size(RESOLUTIONS["16:9"].width, RESOLUTIONS["16:9"].height).attr({ style: `display: block`}), []);

  useEffect(() => {
    return () => {
      SVGContainer.clear();
    };
  }, []);

  useEffect(() => {
    if (
      svgContainerRef &&
      svgContainerRef?.current &&
      svgContainerRef?.current?.children.length < 1
    ) {
      drawerRef.current = new Drawer(SVGContainer);
      SVGContainer.addTo(svgContainerRef?.current);
    }

    return () => {
    };
  }, [svgContainerRef, SVGContainer]);

  useEffect(() => {
    if(drawerRef.current) {
      drawerRef.current.emitter.on('drawEnd', handleDrawEnd);
      drawerRef.current.emitter.on('drawCancel', handleDrawCancel);
    }

    return () => {
      if(drawerRef.current) {
        drawerRef.current.emitter.off('drawEnd', handleDrawEnd);
        drawerRef.current.emitter.off('drawCancel', handleDrawCancel);
      }
    }
  }, [addActiveRegion]); // Removes event emitter listeners on context update

  function handleDrawEnd(drawing: any) {
    switch(drawing.artype) {
      case TripLine.type:
        if(drawing.points.length > 1) {
          drawTripLineClassF(drawing.points);
        }
        break;
      case Zone.type:
        drawZoneClassF(drawing.points);
        break;
      case Destination.type:
        drawDestinationClassF(drawing.points);
        break;
      default:
        break;
    }
  };

  const handleDrawCancel = (drawing: any) => {
    console.log(`Cancel Draw`, drawing);
  };

  const drawTripLineClassF = (points: number[][]) => {
    const tripline: ActiveRegion  = {
      id: null,
      tempID: faker.number.int({ min: 1, max: 10000 }), 
      name: `${faker.word.adverb()} ${faker.word.adjective()}`, 
      typeID: TripLine.typeID,
      type: TripLine.type,
      svg: null,
      app: activeServiceApplet
    };
    tripline.svg = new TripLine(SVGContainer, points, tripline, {});
    addActiveRegion(tripline);
  };

  const drawZoneClassF = (points: number[][]) => {
    const zone: ActiveRegion  = {
      id: null,
      tempID: faker.number.int({ min: 1, max: 10000 }),
      name: `${faker.word.adverb()} ${faker.word.adjective()}`,
      typeID: Zone.typeID,
      type: Zone.type,
      svg: null,
      app: activeServiceApplet
    }
    zone.svg = new Zone(SVGContainer, points, zone, {});
    addActiveRegion(zone);
  };

  const drawDestinationClassF = (points: number[][]) => {
    const destination: ActiveRegion  = {
      id: null,
      tempID: faker.number.int({ min: 1, max: 10000 }),
      name: `${faker.word.adverb()} ${faker.word.adjective()}`,
      typeID: Destination.typeID,
      type: Destination.type,
      svg: null,
      app: activeServiceApplet
    }
    destination.svg = new Destination(SVGContainer, points, destination, {});
    addActiveRegion(destination);
  };

  // Run showHideActiveRegions on scene._unsanitizedSceneObj changes
  useEffect(() => {
    if(activeServiceApplet || activeServiceAppletActiveRegion) {
      showHideActiveRegions();
    }
  }, [scene, activeServiceApplet, activeServiceAppletActiveRegion]);

  // Function to show hide active regions by activeServiceApplet
  const showHideActiveRegions = () => {
    scene.regions.forEach(activeRegion => {
      if(activeServiceApplet === activeRegion.app) {
        if(activeServiceAppletActiveRegion?.typeID === activeRegion.typeID) {
          activeRegion?.svg.show();
        } else {
          activeRegion?.svg.hide();
        }
      } else {
        activeRegion?.svg.hide();
      }
    })
  };

  return (
    <section>
      <h3>Workspace/Canvas</h3>
      <div style={{ minHeight: '500px' }}>
        <div ref={svgContainerRef} style={{ border: '1px solid #ccc', display: 'inline-block' }}></div>
      </div>
    </section>
  );
};
export default SceneEditor_Workspace;