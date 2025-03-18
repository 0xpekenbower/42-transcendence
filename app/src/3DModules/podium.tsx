"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import * as THREE from "three";

// Add this interface to properly type the nodes
interface GLTFResult {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
}

export function Podium(props: GroupProps) {
  const { nodes, materials } = useGLTF('/podium.glb') as unknown as GLTFResult;
  
  return (
    <group 
      {...props} 
      dispose={null} 
      position={[0, -7, 1]} // Lower position to center in view
      scale={8} // Larger scale to fill the space
      rotation={[0, 0, 1.5]}
    >
      <group >
        {/* <group scale={[1.578, 3.45, 1.018]}> */}
        <group scale={[0.5, 3, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material0-material'].geometry}
            material={materials['Material0-material']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material1-material'].geometry}
            material={materials['Material1-material']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material2-material'].geometry}
            material={materials['Material2-material']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material3-material'].geometry}
            material={materials['Material3-material']}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/podium.glb');
