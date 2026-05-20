"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function LuxurySphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <MeshDistortMaterial
          color="#C9A84C"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}

export default function InteractiveTour() {
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true when component mounts on the client
  useState(() => {
    setIsClient(true);
  });

  return (
    <section 
      id="tour" 
      className="bg-primary py-24 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* 3D Canvas Left */}
          <div className="lg:col-span-7 h-[400px] md:h-[500px] w-full relative bg-primary-dark/50 rounded-lg border border-glass-border shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing">
            {isClient ? (
              <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} color="#E8C97A" />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#0A1628" />
                <pointLight position={[0, 0, 5]} intensity={1} color="#C9A84C" />
                
                <LuxurySphere />
                
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
              </Canvas>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-pearl/40 font-sans text-xs uppercase tracking-widest">
                Loading 3D Experience...
              </div>
            )}
            
            {/* 3D Overlay Help Badge */}
            <div className="absolute bottom-4 right-4 bg-primary-dark/80 border border-glass-border px-3 py-1.5 rounded text-[10px] uppercase tracking-widest text-gold font-sans pointer-events-none">
              Interactive 3D Art
            </div>
          </div>

          {/* Copywriting Right */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold mb-4"
            >
              Interactive Artistry
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-light text-pearl mb-6 leading-tight"
            >
              The Sculpted Key to Paradise
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pearl/80 font-sans font-light tracking-wide leading-relaxed mb-6"
            >
              Rotate and interact with our signature digital art installation. Built on modern WebGL technology, it represents the fluid, shifting interface of ocean waves and coastal sands.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pearl/60 font-sans font-light tracking-wide leading-relaxed mb-8"
            >
              Just as this sculpture moves dynamically to your touch, our guest experience adapts fluidly to your desires. Every request, every moment, custom tailored.
            </motion.p>

            <a 
              href="#booking"
              className="w-max bg-gold text-primary hover:bg-gold-light px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Request Villa Showing
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
