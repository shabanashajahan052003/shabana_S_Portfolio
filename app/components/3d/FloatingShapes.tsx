"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ShapeProps {
  position: [number, number, number];
  type: "sphere" | "icosahedron" | "torus" | "octahedron" | "box";
  color: string;
  emissiveIntensity?: number;
  scale?: number;
  floatSpeed?: number;
  rotationSpeed?: number;
  wireframe?: boolean;
}

function FloatingShape({
  position,
  type,
  color,
  emissiveIntensity = 0.4,
  scale = 1,
  floatSpeed = 0.8,
  rotationSpeed = 0.4,
  wireframe = false,
}: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const baseY = position[1];
  const phaseOffset = position[0] * 0.5;

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.position.y =
      baseY + Math.sin(t * floatSpeed + phaseOffset) * 0.5;
    meshRef.current.rotation.x += 0.004 * rotationSpeed;
    meshRef.current.rotation.y += 0.006 * rotationSpeed;
    meshRef.current.rotation.z += 0.003 * rotationSpeed;
  });

  const renderGeometry = () => {
    switch (type) {
      case "sphere":
        return <sphereGeometry args={[1, 32, 32]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />;
      case "torus":
        return <torusGeometry args={[1, 0.35, 16, 60]} />;
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "box":
        return <boxGeometry args={[1, 1, 1]} />;
      default:
        return <sphereGeometry args={[1, 32, 32]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {renderGeometry()}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={emissiveIntensity}
        transparent
        opacity={wireframe ? 0.9 : 0.75}
        roughness={0.15}
        metalness={0.85}
        wireframe={wireframe}
      />
    </mesh>
  );
}

const SHAPES: ShapeProps[] = [
  {
    position: [-8, 3, -6],
    type: "icosahedron",
    color: "#06b6d4",
    scale: 1.2,
    floatSpeed: 0.5,
    wireframe: true,
    emissiveIntensity: 0.2, // Subtle glow
  },
  {
    position: [8, -2, -8],
    type: "sphere",
    color: "#8b5cf6",
    scale: 0.8,
    floatSpeed: 0.7,
    emissiveIntensity: 0.15, // Subtle glow
  },
];


export default function FloatingShapes() {
  return (
    <>
      {SHAPES.map((shape, i) => (
        <FloatingShape key={i} {...shape} />
      ))}
    </>
  );
}
