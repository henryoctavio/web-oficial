import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from "three";

interface ComputersProps {
  isMobile: boolean;
}

const Computers: React.FC<ComputersProps> = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const ref = useRef<THREE.Group>(null);
  const { invalidate } = useThree();

  // Opacidad inicial (fade-in)
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Espera un instante antes de iniciar el fade (opcional)
    const timeout = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  // Fade-in suave
  useFrame(() => {
    if (!ref.current) return;

    let stillFading = false;

    ref.current.traverse((child) => {
      if ((child as THREE.Mesh).material) {
        const material = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
        material.transparent = true;
        const target = visible ? 1 : 0;
        material.opacity = THREE.MathUtils.lerp(material.opacity, target, 0.03);

        if (Math.abs(material.opacity - target) > 0.01) stillFading = true;
      }
    });

    // Renderiza solo si aún no ha terminado el fade
    if (stillFading) invalidate();
  });

  return (
    <mesh>
      {/* Luces ajustadas (ni muy intensas ni pesadas) */}
      <ambientLight intensity={0.4} />
      <hemisphereLight args={["white", "gray", 0.5]} />
      <directionalLight
        position={[-20, 50, 10]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
      />
      <spotLight position={[0, -1, -1.5]} angle={0.2} penumbra={2} intensity={6} castShadow />
      <pointLight position={[0, -10, 0]} intensity={2.5} />

      <group ref={ref}>
        <group position={[1, 0, 0]}>
          <primitive
            object={computer.scene}
            scale={isMobile ? 0.5 : 0.75}
            position={isMobile ? [-2.3, -2, -2.2] : [0, -3.1, -1.5]}
            rotation={[-0.01, 0.0, -0.1]}
          />
        </group>
      </group>
    </mesh>
  );
};

const ComputersCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Canvas
        frameloop="demand" // 👈 se renderiza solo cuando hay cambios
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
