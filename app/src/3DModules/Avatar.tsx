// src/3DModules/Avatar.tsx

"use client";

import React, { FC, useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import * as THREE from "three"; // Import Three.js types

const Avatar: FC<GroupProps> = (props) => {
  const { nodes, materials } = useGLTF("/avatar.glb");

  // adding ref for group to add animation
  const groupRef = useRef<THREE.Group>(null!);

  // loading your animation
  // const { animations: avatarAnimation } = useFBX("/Hi.fbx");
  // // updating your animation name (optional)
  // avatarAnimation[0].name = "HI";

  // creating actions based on the animation
  // const { actions } = useAnimations(avatarAnimation, groupRef);

  // playing the animation
  // useEffect(() => {
  //   if (actions?.["HI"])
  //     actions["HI"].reset().play();
  // }, [actions]);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.03; // Adjust speed if needed
    }
  });

  return (
    <group {...props} ref={groupRef as any} dispose={null} position={[0, -0.75, 0.55]}>
      <group >
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name="EyeLeft"
          geometry={(nodes.EyeLeft as any).geometry}
          material={materials.Wolf3D_Eye}
          skeleton={(nodes.EyeLeft as any).skeleton}
          morphTargetDictionary={(nodes.EyeLeft as any).morphTargetDictionary}
          morphTargetInfluences={(nodes.EyeLeft as any).morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={(nodes.EyeRight as any).geometry}
          material={materials.Wolf3D_Eye}
          skeleton={(nodes.EyeRight as any).skeleton}
          morphTargetDictionary={(nodes.EyeRight as any).morphTargetDictionary}
          morphTargetInfluences={(nodes.EyeRight as any).morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={(nodes.Wolf3D_Head as any).geometry}
          material={materials.Wolf3D_Skin}
          skeleton={(nodes.Wolf3D_Head as any).skeleton}
          morphTargetDictionary={
            (nodes.Wolf3D_Head as any).morphTargetDictionary
          }
          morphTargetInfluences={
            (nodes.Wolf3D_Head as any).morphTargetInfluences
          }
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={(nodes.Wolf3D_Teeth as any).geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={(nodes.Wolf3D_Teeth as any).skeleton}
          morphTargetDictionary={
            (nodes.Wolf3D_Teeth as any).morphTargetDictionary
          }
          morphTargetInfluences={
            (nodes.Wolf3D_Teeth as any).morphTargetInfluences
          }
        />
        <skinnedMesh
          geometry={(nodes.Wolf3D_Hair as any).geometry}
          material={materials.Wolf3D_Hair}
          skeleton={(nodes.Wolf3D_Hair as any).skeleton}
        />
        <skinnedMesh
          geometry={(nodes.Wolf3D_Body as any).geometry}
          material={materials.Wolf3D_Body}
          skeleton={(nodes.Wolf3D_Body as any).skeleton}
        />
        <skinnedMesh
          geometry={(nodes.Wolf3D_Outfit_Bottom as any).geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={(nodes.Wolf3D_Outfit_Bottom as any).skeleton}
        />
        <skinnedMesh
          geometry={(nodes.Wolf3D_Outfit_Footwear as any).geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={(nodes.Wolf3D_Outfit_Footwear as any).skeleton}
        />
        <skinnedMesh
          geometry={(nodes.Wolf3D_Outfit_Top as any).geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={(nodes.Wolf3D_Outfit_Top as any).skeleton}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/avatar.glb");

export default Avatar;