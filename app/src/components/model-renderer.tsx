"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Avatar from "@/3DModules/Avatar";
import { TableScene, PanelScene } from "@/icons/CardIcons";
export default function ModelRenderer() {
  return (
    <div className="relative w-[400px] h-[700px]">
      {/* Panel at the back - positioned absolutely */}
      <div className="absolute w-full h-full z-0 flex left-1">
        <PanelScene />
      </div>
      
      {/* 3D Canvas with Avatar */}
      <Canvas
        camera={{ position: [0.25, 2, 10], fov: 20, zoom: 1 }}
        className="w-[372px] h-[450px] relative z-10"
      >
        <ambientLight intensity={1.0} />
        <directionalLight intensity={1.0} position={[5, 10, 5]} />
        <Environment preset="sunset" />
        <Suspense fallback={null}>
          <Avatar position={[0, -0.75, -1.5]} />
        </Suspense>
      </Canvas>
      
      {/* Table at the bottom - positioned absolutely */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center">
        <TableScene  />
      </div>
    </div>
  );
}