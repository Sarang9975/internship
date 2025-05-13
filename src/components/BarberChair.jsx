// src/components/BarberChair.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const ChairModel = () => {
  const gltf = useGLTF("/models/barber_chair.glb");
  return <primitive object={gltf.scene} scale={1.5} />;
};

const BarberChair = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <ChairModel />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
};

export default BarberChair;
