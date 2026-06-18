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
    position: [-7, 2, -4],
    type: "icosahedron",
    color: "#06b6d4",
    scale: 1.3,
    floatSpeed: 0.7,
    wireframe: true,
    emissiveIntensity: 0.6,
  },
  {
    position: [7, -1.5, -5],
    type: "sphere",
    color: "#8b5cf6",
    scale: 0.9,
    floatSpeed: 1.1,
    emissiveIntensity: 0.4,
  },
  {
    position: [-5, -3.5, -3],
    type: "torus",
    color: "#06b6d4",
    scale: 0.65,
    floatSpeed: 0.6,
    rotationSpeed: 1.0,
    emissiveIntensity: 0.5,
  },
  {
    position: [5.5, 3.5, -6],
    type: "octahedron",
    color: "#ec4899",
    scale: 1.0,
    floatSpeed: 0.9,
    emissiveIntensity: 0.5,
  },
  {
    position: [0.5, 5.5, -7],
    type: "box",
    color: "#8b5cf6",
    scale: 0.75,
    floatSpeed: 0.65,
    rotationSpeed: 0.5,
    emissiveIntensity: 0.35,
  },
  {
    position: [-8, -1, -6],
    type: "icosahedron",
    color: "#06b6d4",
    scale: 0.55,
    floatSpeed: 1.2,
    wireframe: true,
    emissiveIntensity: 0.7,
  },
  {
    position: [9, 1, -8],
    type: "sphere",
    color: "#a78bfa",
    scale: 0.7,
    floatSpeed: 0.85,
    emissiveIntensity: 0.3,
  },
  {
    position: [-2, -6, -5],
    type: "octahedron",
    color: "#22d3ee",
    scale: 0.6,
    floatSpeed: 1.0,
    emissiveIntensity: 0.55,
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
