"use client";

import { Suspense, useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function rand(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function ScatterModel({ sectionId }) {
  const { scene } = useGLTF("/assets/simple_house_-_kitchen.glb");
  const clonedScene = useMemo(() => scene.clone(true), [scene]);
  const { camera, invalidate } = useThree();
  const progressRef = useRef(0);
  const lastProgressRef = useRef(-1);
  const meshDataRef = useRef([]);
  const ready = useRef(false);

  useEffect(() => {
    if (ready.current) return;
    ready.current = true;

    // Shadows auf allen Meshes deaktivieren
    clonedScene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = false;
        obj.receiveShadow = false;
        // Material-Optimierung: keine Env-Map-Berechnung
        if (obj.material) {
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach((m) => {
            m.envMapIntensity = 0;
            m.needsUpdate = true;
          });
        }
      }
    });

    // Normalisieren: skalieren + drehen + zentrieren
    const box = new THREE.Box3().setFromObject(clonedScene);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    clonedScene.scale.setScalar(4 / maxDim);
    clonedScene.rotation.y = -Math.PI / 5 + Math.PI - Math.PI / 4;

    const box2 = new THREE.Box3().setFromObject(clonedScene);
    const center2 = box2.getCenter(new THREE.Vector3());
    clonedScene.position.set(-center2.x, -box2.min.y, -center2.z);

    // Kamera auf Modell ausrichten
    const box3 = new THREE.Box3().setFromObject(clonedScene);
    const size3 = box3.getSize(new THREE.Vector3());
    const center3 = box3.getCenter(new THREE.Vector3());
    const maxDim3 = Math.max(size3.x, size3.y, size3.z);
    const fov = (camera.fov * Math.PI) / 180;
    const dist = (maxDim3 / 2 / Math.tan(fov / 2)) * 0.75;

    camera.position.set(center3.x + dist * 0.5, center3.y + dist * 0.35, center3.z + dist);
    camera.lookAt(center3);
    camera.updateProjectionMatrix();

    // Scatter-Daten aufbauen
    const data = [];
    let idx = 0;
    const spread = 6;

    clonedScene.traverse((obj) => {
      if (!obj.isMesh) return;
      const s = idx++;

      const origPos = obj.position.clone();
      const origRot = new THREE.Euler(
        obj.rotation.x, obj.rotation.y, obj.rotation.z, obj.rotation.order
      );
      const scatterPos = new THREE.Vector3(
        origPos.x + (rand(s * 3 + 0) - 0.5) * spread,
        origPos.y + (rand(s * 3 + 1) - 0.5) * spread,
        origPos.z + (rand(s * 3 + 2) - 0.5) * spread
      );
      const scatterRot = new THREE.Euler(
        origRot.x + (rand(s * 7 + 0) - 0.5) * Math.PI * 2,
        origRot.y + (rand(s * 7 + 1) - 0.5) * Math.PI * 2,
        origRot.z + (rand(s * 7 + 2) - 0.5) * Math.PI * 2,
        origRot.order
      );

      obj.position.copy(scatterPos);
      obj.rotation.copy(scatterRot);
      data.push({ mesh: obj, origPos, origRot, scatterPos, scatterRot });
    });

    meshDataRef.current = data;
    invalidate();
  }, [clonedScene, camera, invalidate]);

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: `#${sectionId}`,
      start: "top 70%",
      end: "center 20%",
      onUpdate: (self) => {
        progressRef.current = self.progress;
        invalidate(); // Canvas nur bei Scroll-Änderung neu rendern
      },
    });
    return () => st.kill();
  }, [sectionId, invalidate]);

  useFrame(() => {
    const raw = progressRef.current;
    // Abbrechen wenn sich nichts geändert hat
    if (Math.abs(raw - lastProgressRef.current) < 0.0005) return;
    lastProgressRef.current = raw;

    const p = 1 - Math.pow(1 - raw, 3);
    for (const { mesh, origPos, origRot, scatterPos, scatterRot } of meshDataRef.current) {
      mesh.position.lerpVectors(scatterPos, origPos, p);
      mesh.rotation.x = THREE.MathUtils.lerp(scatterRot.x, origRot.x, p);
      mesh.rotation.y = THREE.MathUtils.lerp(scatterRot.y, origRot.y, p);
      mesh.rotation.z = THREE.MathUtils.lerp(scatterRot.z, origRot.z, p);
    }
  });

  return <primitive object={clonedScene} />;
}

useGLTF.preload("/assets/simple_house_-_kitchen.glb");

export default function ModelScatterCanvas({ sectionId }) {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      camera={{ position: [0, 5, 10], fov: 45 }}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
        stencil: false,
        depth: true,
      }}
      style={{ width: "100%", height: "100%", background: "transparent" }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 8, 5]} intensity={1.4} />
      <pointLight position={[-3, 4, -2]} intensity={0.5} color="#f6a878" />
      <Suspense fallback={null}>
        <ScatterModel sectionId={sectionId} />
      </Suspense>
    </Canvas>
  );
}
