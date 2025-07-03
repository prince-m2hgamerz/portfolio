import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

// Black Hole Shader Material
const BlackHoleShader = {
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    
    void main() {
      vUv = uv;
      vPosition = position;
      vNormal = normal;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform float uScrollProgress;
    uniform vec3 uBlackHolePos;
    uniform float uEventHorizonRadius;
    uniform float opacity;
    
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    
    // Noise function for turbulence
    float noise(vec3 p) {
      return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
    }
    
    // Gravitational lensing effect
    vec2 gravitationalLensing(vec2 uv, vec3 blackHolePos, float mass) {
      vec2 toBlackHole = uv - blackHolePos.xy;
      float distance = length(toBlackHole);
      float lensStrength = mass / (distance * distance + 0.1);
      return uv + normalize(toBlackHole) * lensStrength * 0.1;
    }
    
    void main() {
      vec2 centeredUv = vUv - 0.5;
      float distanceFromCenter = length(centeredUv);
      
      // Event horizon effect
      float eventHorizon = smoothstep(uEventHorizonRadius - 0.05, uEventHorizonRadius, distanceFromCenter);
      
      // Accretion disk
      float diskRadius = 0.3;
      float diskThickness = 0.05;
      float diskDistance = abs(distanceFromCenter - diskRadius);
      float diskMask = 1.0 - smoothstep(0.0, diskThickness, diskDistance);
      
      // Rotating disk pattern
      float angle = atan(centeredUv.y, centeredUv.x) + uTime * 2.0;
      float spiral = sin(angle * 8.0 + distanceFromCenter * 20.0 - uTime * 5.0) * 0.5 + 0.5;
      
      // Disk color with temperature gradient
      vec3 diskColor = mix(
        vec3(1.0, 0.3, 0.1), // Hot inner (orange-red)
        vec3(0.8, 0.4, 1.0), // Cooler outer (purple)
        distanceFromCenter / diskRadius
      );
      
      // Add turbulence to disk
      float turbulence = noise(vec3(vUv * 10.0, uTime * 0.5)) * 0.3;
      diskColor *= (spiral + turbulence);
      
      // Doppler effect (blue/red shift)
      float dopplerShift = sin(angle + uTime * 3.0) * 0.2;
      diskColor.r += dopplerShift;
      diskColor.b -= dopplerShift;
      
      // Event horizon (pure black)
      vec3 eventHorizonColor = vec3(0.0);
      
      // Gravitational redshift near event horizon
      float redshift = smoothstep(uEventHorizonRadius, uEventHorizonRadius + 0.1, distanceFromCenter);
      diskColor *= redshift;
      
      // Combine effects
      vec3 finalColor = mix(eventHorizonColor, diskColor * diskMask, eventHorizon);
      
      // Add glow effect
      float glow = 1.0 - smoothstep(0.0, 0.5, distanceFromCenter);
      finalColor += vec3(0.4, 0.2, 0.8) * glow * 0.3;
      
      // Scroll-based intensity
      finalColor *= (0.7 + uScrollProgress * 0.3);
      
      gl_FragColor = vec4(finalColor, opacity);
    }
  `
};

// Accretion Disk Component
const AccretionDisk: React.FC<{ scrollProgress: number }> = ({ scrollProgress }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uScrollProgress: { value: 0 },
    uBlackHolePos: { value: new THREE.Vector3(0, 0, 0) },
    uEventHorizonRadius: { value: 0.15 },
    opacity: { value: 1.0 }
  }), []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.uScrollProgress.value = scrollProgress;
    }
    
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.005 + scrollProgress * 0.01;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.2, 1.5, 64, 32]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={BlackHoleShader.vertexShader}
        fragmentShader={BlackHoleShader.fragmentShader}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// Event Horizon Component
const EventHorizon: React.FC<{ scrollProgress: number }> = ({ scrollProgress }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05 + scrollProgress * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.15, 32, 32]} />
      <meshBasicMaterial color="#000000" />
    </mesh>
  );
};

// Gravitational Lensing Effect
const GravitationalLensing: React.FC<{ scrollProgress: number }> = ({ scrollProgress }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  const lensShader = useMemo(() => ({
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uScrollProgress;
      uniform float opacity;
      varying vec2 vUv;
      
      void main() {
        vec2 centeredUv = vUv - 0.5;
        float distance = length(centeredUv);
        
        // Lensing rings
        float rings = sin(distance * 20.0 - uTime * 2.0) * 0.5 + 0.5;
        float ringMask = smoothstep(0.3, 0.8, distance) * (1.0 - smoothstep(0.8, 1.0, distance));
        
        vec3 lensColor = vec3(0.4, 0.2, 0.8) * rings * ringMask * 0.3;
        lensColor *= uScrollProgress;
        
        gl_FragColor = vec4(lensColor, rings * ringMask * 0.5 * opacity);
      }
    `
  }), []);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uScrollProgress: { value: 0 },
    opacity: { value: 1.0 }
  }), []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.uScrollProgress.value = scrollProgress;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -0.1]}>
      <planeGeometry args={[4, 4]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={lensShader.vertexShader}
        fragmentShader={lensShader.fragmentShader}
        transparent
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

// Photon Sphere (orbiting light)
const PhotonSphere: React.FC<{ scrollProgress: number }> = ({ scrollProgress }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.02 + scrollProgress * 0.03;
    }
  });

  const photons = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => {
      const angle = (i / 20) * Math.PI * 2;
      const radius = 0.25;
      return {
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          (Math.random() - 0.5) * 0.1
        ] as [number, number, number],
        delay: i * 0.1
      };
    });
  }, []);

  return (
    <group ref={groupRef}>
      {photons.map((photon, i) => (
        <mesh key={i} position={photon.position}>
          <sphereGeometry args={[0.005, 8, 8]} />
          <meshBasicMaterial 
            color="#ffffff" 
            emissive="#ffffff"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};

// Hawking Radiation Effect
const HawkingRadiation: React.FC<{ scrollProgress: number }> = ({ scrollProgress }) => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 0.16 + Math.random() * 0.1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const radius = Math.sqrt(positions[i3] ** 2 + positions[i3 + 1] ** 2 + positions[i3 + 2] ** 2);
        
        // Simulate Hawking radiation escaping
        if (radius > 0.16) {
          const escapeSpeed = 0.001 + scrollProgress * 0.002;
          positions[i3] *= (1 + escapeSpeed);
          positions[i3 + 1] *= (1 + escapeSpeed);
          positions[i3 + 2] *= (1 + escapeSpeed);
          
          // Reset particles that escape too far
          if (radius > 2) {
            const newRadius = 0.16 + Math.random() * 0.02;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            
            positions[i3] = newRadius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = newRadius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = newRadius * Math.cos(phi);
          }
        }
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.002}
        color="#8B5CF6"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Main Black Hole Scene
const BlackHoleScene: React.FC<{ scrollProgress: number }> = ({ scrollProgress }) => {
  const { camera } = useThree();
  
  useFrame((state) => {
    // Camera movement based on scroll
    const radius = 3 + scrollProgress * 2;
    const angle = state.clock.elapsedTime * 0.1 + scrollProgress * Math.PI;
    
    camera.position.x = Math.cos(angle) * radius;
    camera.position.z = Math.sin(angle) * radius;
    camera.position.y = Math.sin(scrollProgress * Math.PI) * 0.5;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.1} />
      
      {/* Main black hole components */}
      <EventHorizon scrollProgress={scrollProgress} />
      <AccretionDisk scrollProgress={scrollProgress} />
      <PhotonSphere scrollProgress={scrollProgress} />
      <HawkingRadiation scrollProgress={scrollProgress} />
      <GravitationalLensing scrollProgress={scrollProgress} />
      
      {/* Background stars */}
      <mesh position={[0, 0, -10]}>
        <sphereGeometry args={[50, 32, 32]} />
        <meshBasicMaterial 
          color="#000011" 
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
};

// Main Component
const Real3DBlackHole: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = React.useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setScrollProgress(latest);
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      <Canvas
        camera={{ 
          position: [3, 0, 0], 
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <BlackHoleScene scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};

export default Real3DBlackHole;