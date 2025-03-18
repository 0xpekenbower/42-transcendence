"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

// 3D Card Component
const CarouselCard = ({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) => {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[3, 3.5, 0.1]} />
      <meshStandardMaterial color={"#ff9800"} roughness={0.2} metalness={0.3} />
    </mesh>
  );
};

// Rotating Carousel
const Carousel = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  const radius = 5;
  const numCards = 3;
  const cards = Array.from({ length: numCards }, (_, i) => {
    const angle = (i / numCards) * Math.PI * 2;
    return <CarouselCard key={i} position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]} rotation={[0, -angle, 0]} />;
  });

  return <group ref={groupRef}>{cards}</group>;
};

// Main Scene
const CarouselScene = () => {
  return (
    <div className="relative w-[1700px] h-[700px] flex justify-center items-center">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 2, 10], fov: 40 }}>
          <ambientLight intensity={1.2} />
          <Environment preset="sunset" />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Carousel />
          {/* <ModelRenderer /> */}
        </Canvas>
      </Suspense>
    </div>
  );
};

export default CarouselScene;
