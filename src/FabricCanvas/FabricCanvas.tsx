import React, { useEffect, useRef, useState } from 'react';
import * as fabric from 'fabric';

// Custom Canvas Class
class CanvasWithDrawShapes extends fabric.Canvas {
  isDrawing: boolean;
  currentShape: fabric.Object | null;
  polygonPoints: fabric.Point[];
  zoomStep: number;

  constructor(...args: ConstructorParameters<typeof fabric.Canvas>) {
    super(...args);
    this.isDrawing = false;
    this.currentShape = null;
    this.polygonPoints = [];
    this.zoomStep = 0.1; // Default zoom step
    this._initializeDrawEvents();
  }

  private _initializeDrawEvents() {
    // Rectangle Drawing Events
    this.on('mouse:down', (event) => {
      if (this.isDrawing && this.currentShape instanceof fabric.Rect) {
        const pointer = this.getPointer((event as fabric.IEvent).e);
        this.currentShape = new fabric.Rect({
          left: pointer.x,
          top: pointer.y,
          width: 0,
          height: 0,
          fill: 'rgba(0, 0, 255, 0.3)',
          stroke: 'blue',
          strokeWidth: 2,
          selectable: false,
        });
        this.add(this.currentShape);
      } else if (this.isDrawing && this.currentShape instanceof fabric.Polygon) {
        const pointer = this.getPointer((event as fabric.IEvent).e);
        this.polygonPoints.push(new fabric.Point(pointer.x, pointer.y));
        this._updatePolygon();
      }
    });

    this.on('mouse:move', (event) => {
      if (this.isDrawing && this.currentShape instanceof fabric.Rect) {
        const pointer = this.getPointer((event as fabric.IEvent).e);
        const rect = this.currentShape as fabric.Rect;

        rect.set({
          width: Math.abs(pointer.x - rect.left!),
          height: Math.abs(pointer.y - rect.top!),
        });

        if (pointer.x < rect.left!) rect.set({ left: pointer.x });
        if (pointer.y < rect.top!) rect.set({ top: pointer.y });

        this.renderAll();
      }
    });

    this.on('mouse:up', () => {
      if (this.currentShape instanceof fabric.Rect) {
        this.currentShape.set({ selectable: true });
        this.isDrawing = false;
        this.currentShape = null;
        this.renderAll();
      }
    });
  }

  startDrawingRect() {
    this.isDrawing = true;
    this.currentShape = new fabric.Rect({});
  }

  startDrawingPolygon() {
    this.isDrawing = true;
    this.currentShape = new fabric.Polygon([], {
      fill: 'rgba(255, 0, 0, 0.3)',
      stroke: 'red',
      strokeWidth: 2,
      selectable: false,
    });
    this.polygonPoints = [];
  }

  finishPolygon() {
    if (this.currentShape instanceof fabric.Polygon) {
      this.currentShape.set({ selectable: true });
      this.isDrawing = false;
      this.currentShape = null;
      this.renderAll();
    }
  }

  private _updatePolygon() {
    if (this.currentShape instanceof fabric.Polygon) {
      this.remove(this.currentShape);
    }

    this.currentShape = new fabric.Polygon([...this.polygonPoints], {
      fill: 'rgba(255, 0, 0, 0.3)',
      stroke: 'red',
      strokeWidth: 2,
      selectable: false,
    });

    this.add(this.currentShape);
    this.renderAll();
  }

  zoomIn() {
    const zoom = this.getZoom();
    this.setZoom(zoom + this.zoomStep);
    this.renderAll();
  }

  zoomOut() {
    const zoom = this.getZoom();
    this.setZoom(zoom - this.zoomStep > 0 ? zoom - this.zoomStep : 0.1);
    this.renderAll();
  }
}

// React Component
const FabricCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<CanvasWithDrawShapes | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const newCanvas = new CanvasWithDrawShapes(canvasRef.current, {
        width: 800,
        height: 600,
      });
      setCanvas(newCanvas);

      return () => {
        newCanvas.dispose();
      };
    }
  }, []);

  const handleDrawRect = () => {
    canvas?.startDrawingRect();
  };

  const handleDrawPolygon = () => {
    canvas?.startDrawingPolygon();
  };

  const handleFinishPolygon = () => {
    canvas?.finishPolygon();
  };

  const handleZoomIn = () => {
    canvas?.zoomIn();
  };

  const handleZoomOut = () => {
    canvas?.zoomOut();
  };

  return (
    <div>
      <div>
        <button onClick={handleDrawRect}>Draw Rectangle</button>
        <button onClick={handleDrawPolygon}>Draw Polygon</button>
        <button onClick={handleFinishPolygon}>Finish Polygon</button>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default FabricCanvas;
