import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function FloatingCore() {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.x = Math.sin(t * 0.22) * 0.18;
    groupRef.current.rotation.y += 0.0018;
    groupRef.current.position.y = Math.sin(t * 0.3) * 0.22;
  });

  return (
    <group ref={groupRef}>
      <mesh position={[-2.8, 1.1, -2.3]}>
        <icosahedronGeometry args={[0.95, 0]} />
        <meshStandardMaterial color="#d9ff62" emissive="#5f7f00" emissiveIntensity={0.45} roughness={0.18} metalness={0.65} wireframe />
      </mesh>

      <mesh position={[2.7, -1.3, -2.8]} rotation={[0.4, 0.6, 0.2]}>
        <torusKnotGeometry args={[0.72, 0.22, 140, 24]} />
        <meshStandardMaterial color="#67ffd7" emissive="#004b3f" emissiveIntensity={0.4} roughness={0.22} metalness={0.72} />
      </mesh>

      <mesh position={[0.4, 2.05, -3.8]}>
        <octahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial color="#b8f84f" emissive="#3d5d00" emissiveIntensity={0.5} roughness={0.2} metalness={0.7} />
      </mesh>
    </group>
  );
}

function ParticleField({ count = 1200 }) {
  const pointsRef = useRef(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      arr[i * 3] = THREE.MathUtils.randFloatSpread(30);
      arr[i * 3 + 1] = THREE.MathUtils.randFloatSpread(18);
      arr[i * 3 + 2] = THREE.MathUtils.randFloat(-20, 2);
    }

    return arr;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.028;
    pointsRef.current.rotation.x = Math.sin(t * 0.18) * 0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.045} color="#c8ff00" transparent opacity={0.7} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 6, 2]} intensity={1.25} color="#dcff79" />
      <pointLight position={[-5, -2, 3]} intensity={1.1} color="#47ffd0" />
      <pointLight position={[0, 4, -6]} intensity={0.8} color="#7eff5e" />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="webgl-bg" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 7.6], fov: 58 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <fog attach="fog" args={["#060607", 8, 18]} />
        <SceneLights />
        <FloatingCore />
        <ParticleField count={1500} />
      </Canvas>
      <div className="webgl-vignette" />
    </div>
  );
}