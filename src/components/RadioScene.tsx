"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Float, Lightformer, OrbitControls, RoundedBox } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const BODY = "#17191f";
const BODY_SOFT = "#22252d";
const BRAND = "#2440ff";
const SKY = "#5ab4f8";

function useLabelTexture(text: string, opts: { w?: number; h?: number; size?: number; italic?: boolean; bg?: string } = {}) {
  return useMemo(() => {
    const { w = 512, h = 128, size = 76, italic = true, bg } = opts;
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const ctx = c.getContext("2d")!;
    if (bg) {
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);
    }
    ctx.fillStyle = "#f4f6ff";
    ctx.font = `${italic ? "italic " : ""}900 ${size}px "Sora Variable", Arial, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, w / 2, h / 2 + 4);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    return tex;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);
}

function Knob({ position, radius = 0.13, height = 0.22 }: { position: [number, number, number]; radius?: number; height?: number }) {
  const ridges = 18;
  return (
    <group position={position}>
      <mesh castShadow>
        <cylinderGeometry args={[radius, radius, height, 32]} />
        <meshStandardMaterial color={BODY} roughness={0.6} />
      </mesh>
      {Array.from({ length: ridges }).map((_, i) => {
        const a = (i / ridges) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(a) * radius, 0, Math.sin(a) * radius]} rotation={[0, -a, 0]}>
            <boxGeometry args={[0.025, height * 0.92, 0.03]} />
            <meshStandardMaterial color={BODY_SOFT} roughness={0.5} />
          </mesh>
        );
      })}
      <mesh position={[0, height / 2 + 0.005, 0]}>
        <cylinderGeometry args={[radius * 0.82, radius * 0.82, 0.01, 32]} />
        <meshStandardMaterial color="#2b2f38" roughness={0.3} metalness={0.4} />
      </mesh>
    </group>
  );
}

function Radio() {
  const logo = useLabelTexture("AXIONTEL");
  const model = useLabelTexture("R-26", { w: 256, h: 96, size: 54 });
  const led = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(({ clock }) => {
    if (led.current) led.current.emissiveIntensity = 1.5 + Math.sin(clock.elapsedTime * 4) * 1.4;
  });

  const bodyMat = <meshPhysicalMaterial color={BODY} roughness={0.55} clearcoat={0.35} clearcoatRoughness={0.4} />;

  return (
    <group>
      {/* main body */}
      <RoundedBox args={[1.1, 2.8, 0.86]} radius={0.16} smoothness={6} castShadow receiveShadow>
        {bodyMat}
      </RoundedBox>
      {/* side grips */}
      {[-0.57, 0.57].map((x) => (
        <RoundedBox key={x} args={[0.06, 2.2, 0.6]} radius={0.03} position={[x, -0.2, 0]}>
          <meshStandardMaterial color="#101217" roughness={0.9} />
        </RoundedBox>
      ))}
      {/* PTT */}
      <RoundedBox args={[0.08, 0.5, 0.28]} radius={0.03} position={[-0.6, 0.5, 0]}>
        <meshStandardMaterial color="#0d0f13" roughness={0.7} />
      </RoundedBox>
      {/* label plate */}
      <RoundedBox args={[0.92, 0.26, 0.04]} radius={0.05} position={[0, 1.05, 0.43]}>
        <meshStandardMaterial color="#0e1015" roughness={0.4} />
      </RoundedBox>
      <mesh position={[0, 1.05, 0.452]}>
        <planeGeometry args={[0.8, 0.2]} />
        <meshBasicMaterial map={logo} transparent toneMapped={false} />
      </mesh>
      {/* speaker grille slots */}
      {[0.66, 0.42, 0.18, -0.06].map((y) => (
        <group key={y} position={[0, y, 0.43]}>
          <RoundedBox args={[0.86, 0.13, 0.03]} radius={0.06}>
            <meshStandardMaterial color="#0a0b0f" roughness={0.95} />
          </RoundedBox>
          <RoundedBox args={[0.8, 0.05, 0.035]} radius={0.02} position={[0, 0.02, 0.005]}>
            <meshStandardMaterial color={BODY_SOFT} roughness={0.5} />
          </RoundedBox>
        </group>
      ))}
      {/* model text */}
      <mesh position={[0.24, -0.32, 0.432]}>
        <planeGeometry args={[0.3, 0.11]} />
        <meshBasicMaterial map={model} transparent toneMapped={false} opacity={0.85} />
      </mesh>
      {/* battery seam */}
      <mesh position={[0, -0.55, 0.431]}>
        <planeGeometry args={[1.0, 0.012]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      {/* top cap */}
      <RoundedBox args={[1.0, 0.16, 0.76]} radius={0.06} position={[0, 1.44, 0]}>
        <meshStandardMaterial color="#121419" roughness={0.6} />
      </RoundedBox>
      <Knob position={[0.05, 1.62, 0]} />
      <Knob position={[0.33, 1.6, 0.02]} radius={0.12} height={0.18} />
      {/* LED */}
      <mesh position={[0.26, 1.53, 0.3]}>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshStandardMaterial ref={led} color="#ff4d4d" emissive="#ff2222" emissiveIntensity={2} />
      </mesh>
      {/* antenna */}
      <group position={[-0.3, 1.5, 0]}>
        <mesh position={[0, 0.12, 0]}>
          <cylinderGeometry args={[0.11, 0.12, 0.24, 24]} />
          <meshStandardMaterial color="#0f1115" roughness={0.6} />
        </mesh>
        <mesh position={[0, 1.15, 0]} castShadow>
          <cylinderGeometry args={[0.045, 0.085, 1.9, 24]} />
          <meshStandardMaterial color="#111318" roughness={0.75} />
        </mesh>
        <mesh position={[0, 2.12, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#111318" roughness={0.7} />
        </mesh>
      </group>
    </group>
  );
}

function SignalRings({ origin }: { origin: [number, number, number] }) {
  const refs = useRef<THREE.Mesh[]>([]);
  const count = 4;
  useFrame(({ clock }) => {
    refs.current.forEach((m, i) => {
      if (!m) return;
      const t = ((clock.elapsedTime * 0.45 + i / count) % 1) as number;
      const s = 0.2 + t * 2.6;
      m.scale.setScalar(s);
      (m.material as THREE.MeshBasicMaterial).opacity = (1 - t) * 0.55;
    });
  });
  return (
    <group position={origin}>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i} ref={(el) => { if (el) refs.current[i] = el; }} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1, 0.012, 8, 96]} />
          <meshBasicMaterial color={i % 2 ? SKY : BRAND} transparent depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

// Deterministic PRNG so the particle field is pure and identical on every render.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function Particles({ count = 420 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const a = new THREE.Color(BRAND);
    const b = new THREE.Color(SKY);
    const rand = mulberry32(26);
    for (let i = 0; i < count; i++) {
      const r = 3.2 + rand() * 2.8;
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      positions.set([r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi) * 0.7, r * Math.sin(phi) * Math.sin(theta)], i * 3);
      const c = a.clone().lerp(b, rand());
      colors.set([c.r, c.g, c.b], i * 3);
    }
    return { positions, colors };
  }, [count]);
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * 0.05;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.045} vertexColors transparent opacity={0.85} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function OrbitRing({ radius, speed, tilt }: { radius: number; speed: number; tilt: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.z += d * speed;
  });
  return (
    <group rotation={[tilt, 0, 0]}>
      <group ref={ref}>
        <mesh>
          <torusGeometry args={[radius, 0.006, 8, 160]} />
          <meshBasicMaterial color={BRAND} transparent opacity={0.25} />
        </mesh>
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color={BRAND} emissive={BRAND} emissiveIntensity={1.2} />
        </mesh>
      </group>
    </group>
  );
}

function PointerRig({ children, interactive }: { children: React.ReactNode; interactive: boolean }) {
  const ref = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  useFrame((state, d) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const targetY = interactive ? pointer.x * 0.6 + Math.sin(t * 0.4) * 0.35 - 0.35 : -0.35 + Math.sin(t * 0.4) * 0.5;
    const targetX = interactive ? -pointer.y * 0.25 + 0.05 : 0.05;
    ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, targetY, 3, d);
    ref.current.rotation.x = THREE.MathUtils.damp(ref.current.rotation.x, targetX, 3, d);
  });
  return <group ref={ref}>{children}</group>;
}

function Intro({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  const [go, setGo] = useState(false);
  useEffect(() => {
    const done = () => setGo(true);
    if ((window as Window & { __axLoaded?: boolean }).__axLoaded) {
      const t = setTimeout(done, 50);
      return () => clearTimeout(t);
    }
    const id = setTimeout(done, 2600);
    window.addEventListener("axiontel:loaded", done);
    return () => {
      clearTimeout(id);
      window.removeEventListener("axiontel:loaded", done);
    };
  }, []);
  useFrame((_, d) => {
    if (!ref.current) return;
    const target = go ? 1 : 0.001;
    const s = THREE.MathUtils.damp(ref.current.scale.x, target, 4, d);
    ref.current.scale.setScalar(s);
    ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, go ? 0 : -Math.PI, 3, d);
  });
  return (
    <group ref={ref} scale={0.001}>
      {children}
    </group>
  );
}

export default function RadioScene({ variant = "hero", active = true }: { variant?: "hero" | "product"; active?: boolean }) {
  const hero = variant === "hero";
  // Lighter settings on phones and small screens.
  const [small] = useState(() => typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches);
  return (
    <Canvas
      shadows={!small}
      frameloop={active ? "always" : "never"}
      dpr={small ? [1, 1.25] : [1, 1.6]}
      camera={{ position: [0, 0.6, hero ? 7.6 : 7], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="!touch-pan-y"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 5]} intensity={2.2} castShadow shadow-mapSize={[1024, 1024]} />
      <pointLight position={[-4, 2, 3]} intensity={30} color={SKY} />
      <pointLight position={[3, -2, 2]} intensity={18} color={BRAND} />
      <Environment resolution={small ? 64 : 256}>
        <Lightformer intensity={2} position={[0, 5, -6]} scale={[10, 4, 1]} />
        <Lightformer intensity={3} color={SKY} position={[-6, 1, 2]} rotation-y={Math.PI / 2} scale={[8, 2, 1]} />
        <Lightformer intensity={2} color="#ffffff" position={[6, 1, 2]} rotation-y={-Math.PI / 2} scale={[8, 2, 1]} />
      </Environment>

      <Intro>
        {hero && <Particles count={small ? 160 : 420} />}
        {hero && <OrbitRing radius={2.6} speed={0.35} tilt={1.25} />}
        {hero && <OrbitRing radius={3.1} speed={-0.22} tilt={1.1} />}
        <Float speed={hero ? 1.6 : 1} rotationIntensity={hero ? 0.25 : 0.1} floatIntensity={hero ? 0.8 : 0.3}>
          <PointerRig interactive={hero}>
            <group position={[0, -0.55, 0]} rotation={[0, 0, hero ? -0.08 : 0]}>
              <Radio />
              <SignalRings origin={[-0.3, 3.65, 0]} />
            </group>
          </PointerRig>
        </Float>
      </Intro>

      <ContactShadows position={[0, -2.6, 0]} opacity={0.35} scale={9} blur={2.6} far={4} color="#0a1a6b" />
      {!hero && <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.8} />}
    </Canvas>
  );
}
