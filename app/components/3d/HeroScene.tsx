"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import ParticleField from "./ParticleField";
import FloatingShapes from "./FloatingShapes";

/** Camera rig that smoothly follows the mouse for a parallax effect. */
function CameraRig() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    // Smooth lerp towards target mouse position
    state.camera.position.x +=
      (mouse.current.x * 2.5 - state.camera.position.x) * 0.025;
    state.camera.position.y +=
      (mouse.current.y * 1.5 - state.camera.position.y) * 0.025;
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 10], fov: 60, near: 0.1, far: 100 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.35} />
        <pointLight position={[10, 10, 8]} color="#06b6d4" intensity={4} />
        <pointLight position={[-10, -5, -5]} color="#8b5cf6" intensity={2.5} />
        <pointLight position={[0, -8, 5]} color="#ec4899" intensity={1.0} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={0.5}
          color="#ffffff"
        />

        {/* Scene Objects */}
        <ParticleField />
        <FloatingShapes />

        {/* Mouse-driven Camera */}
        <CameraRig />
      </Suspense>
    </Canvas>
  );
}
