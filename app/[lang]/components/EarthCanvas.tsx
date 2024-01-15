'use client'
import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./CanvasLoader";
import InteractionHint from "./InteractionHint";

const Earth = () => {
  const earth = useGLTF("./images/planet/scene.gltf");

  useFrame(({ clock }) => {
    earth.scene.rotation.y += 0.001 * clock.getDelta();
  });

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <div className="relative h-full">
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 35,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
      
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
      <InteractionHint/>
    </div>
  );
};

export default EarthCanvas;