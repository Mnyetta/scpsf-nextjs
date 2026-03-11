"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function WaterText({ text }: { text: string }) {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.05;
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
      <Text3D
        ref={mesh}
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.15}
        curveSegments={32}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.01}
      >
        {text}

        <meshPhysicalMaterial
          color="#38bdf8"
          transmission={1}
          roughness={0}
          thickness={2}
          ior={1.5}
          transparent
          opacity={0.85}
        />
      </Text3D>
    </Float>
  );
}

export default function CinematicWaterTitle({ title }: { title: string }) {
  return (
    <div style={{ width: 600, height: 80 }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 5]} />

        <WaterText text={title} />
      </Canvas>
    </div>
  );
}