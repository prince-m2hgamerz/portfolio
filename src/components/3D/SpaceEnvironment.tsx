import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SpaceEnvironment: React.FC = () => {
  const starsRef = useRef<THREE.Points>(null);
  const nebulaeRef = useRef<THREE.Group>(null);

  // Generate star field
  const starGeometry = useMemo(() => {
    const starCount = 5000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    
    for (let i = 0; i < starCount; i++) {
      // Random spherical distribution
      const radius = 100 + Math.random() * 400;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Star colors (white, blue, red, yellow)
      const starType = Math.random();
      if (starType < 0.7) {
        // White stars
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 1;
      } else if (starType < 0.85) {
        // Blue stars
        colors[i * 3] = 0.7;
        colors[i * 3 + 1] = 0.8;
        colors[i * 3 + 2] = 1;
      } else if (starType < 0.95) {
        // Red stars
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 0.6;
        colors[i * 3 + 2] = 0.4;
      } else {
        // Yellow stars
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 0.7;
      }
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    return geometry;
  }, []);

  // Generate nebulae
  const nebulae = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
      ] as [number, number, number],
      scale: 20 + Math.random() * 40,
      color: new THREE.Color().setHSL(
        0.7 + Math.random() * 0.3, // Purple to blue hues
        0.6 + Math.random() * 0.4,
        0.3 + Math.random() * 0.4
      ),
      rotation: Math.random() * Math.PI * 2
    }));
  }, []);

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0002;
      starsRef.current.rotation.x += 0.0001;
    }
    
    if (nebulaeRef.current) {
      nebulaeRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <>
      {/* Star field */}
      <points ref={starsRef}>
        <bufferGeometry attach="geometry" {...starGeometry} />
        <pointsMaterial
          size={0.5}
          vertexColors
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Nebulae */}
      <group ref={nebulaeRef}>
        {nebulae.map((nebula, i) => (
          <mesh
            key={i}
            position={nebula.position}
            scale={nebula.scale}
            rotation={[0, 0, nebula.rotation]}
          >
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial
              color={nebula.color}
              transparent
              opacity={0.1}
              blending={THREE.AdditiveBlending}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}
      </group>

      {/* Cosmic dust */}
      <mesh position={[0, 0, -50]}>
        <sphereGeometry args={[200, 32, 32]} />
        <meshBasicMaterial
          color="#1a0033"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
};

export default SpaceEnvironment;