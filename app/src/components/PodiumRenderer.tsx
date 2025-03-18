"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import {Podium} from "@/3DModules/podium";
import Image from "next/image";

type Player = {
  id: number;
  username: string;
  rank: number;
  score: number;
  wins: number;
  losses: number;
  avatar?: string;
};

interface PodiumRendererProps {
  topPlayers: Player[];
}

export default function PodiumRenderer({ topPlayers }: PodiumRendererProps) {
  return (
    <>
      {/* 3D Podium */}
      <div className="w-[1050px] h-[700px] absolute">
        <Suspense fallback={<div className="text-white text-center">Loading podium...</div>}>
          <Canvas
            camera={{ position: [0, 9, -2], fov: 50 }}
            className="w-full h-full"
          >
            <ambientLight intensity={1.0} />
            <directionalLight intensity={1.5} position={[0, 0, 0]} />
            <Environment preset="sunset" />
            <Podium />
            {/* <OrbitControls 
              enableZoom={false}
              enablePan={false}
            /> */}
          </Canvas>
        </Suspense>
      </div>
    </>
  );
} 