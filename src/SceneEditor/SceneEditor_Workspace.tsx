import React, { useEffect, useRef, useMemo } from 'react';
import { SVG } from '@svgdotjs/svg.js';

import { faker } from '@faker-js/faker';

import { Drawer } from './Drawer/Drawer';
import { TripLine } from './Drawer/TripLine';
import { Zone } from './Drawer/Zone';
import { ActiveRegion, useSceneEditorContext } from './SceneEditorProvider';

const SceneEditor_Workspace: React.FC = () => {
  const { drawerRef, addActiveRegion } = useSceneEditorContext();
  const svgContainerRef = useRef<HTMLDivElement | null>(null);
  const SVGContainer = useMemo(() => SVG().size(640, 360), []);

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
      case 'tripline':
        if(drawing.points.length > 1) {
          drawTripLineClassF(drawing.points);
        }
        break;
      case 'zone':
        drawZoneClassF(drawing.points);
        break;
      default:
        break;
    }
  };

  function handleDrawCancel(drawing: any) {
    console.log(`Cancel Draw`, drawing);
  };

  function drawTripLineClassF(points: number[][]) {
    const tripline: ActiveRegion  = {
      id: faker.number.int({ min: 1, max: 10000 }), 
      name: `${faker.word.adverb()} ${faker.word.adjective()}`, 
      type: 'tripline',
      svg: null
    };
    tripline.svg = new TripLine(SVGContainer, points, tripline);
    addActiveRegion(tripline);
  };

  function drawZoneClassF(points: number[][]) {
    const zone: ActiveRegion  = {
      id: faker.number.int({ min: 1, max: 10000 }),
      name: `${faker.word.adverb()} ${faker.word.adjective()}`,
      type: 'zone',
      svg: null
    }
    zone.svg = new Zone(SVGContainer, points, zone);
    addActiveRegion(zone);
  };

  return (
    <div>
      <p>Canvas</p>
      <div ref={svgContainerRef} style={{ border: '1px solid #ccc', width: '640px', height: '360px' }}></div>
    </div>
  );
};
export default SceneEditor_Workspace;