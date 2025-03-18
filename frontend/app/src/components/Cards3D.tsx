"use client";

import React from "react";

interface Card3DProps {
  position: [number, number, number];
}

export default function Card3D({ position }: Card3DProps) {
  return (
    <mesh position={position}>
      <planeGeometry args={[3, 3.5]} />
      {/* Use a basic material with a placeholder color */}
      <meshStandardMaterial color="#cccccc" />
      <meshStandardMaterial color="#cccccc" />
      <meshStandardMaterial color="#cccccc" />
    </mesh>
  );
}
