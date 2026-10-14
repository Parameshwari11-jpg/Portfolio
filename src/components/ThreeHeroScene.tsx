import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeHeroSceneProps {
  isGlobal?: boolean;
}

export const ThreeHeroScene: React.FC<ThreeHeroSceneProps> = ({ isGlobal = true }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 14);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Dynamic accent color helper
    const getThemeColor = () => {
      const theme = document.documentElement.getAttribute('data-theme') || 'teal';
      if (theme === 'amber') return new THREE.Color(0xf59e0b);
      if (theme === 'titanium') return new THREE.Color(0xe2e8f0);
      return new THREE.Color(0x2dd4bf); // mint teal
    };

    let currentAccent = getThemeColor();

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.4);
    dirLight1.position.set(8, 12, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 1.5);
    dirLight2.position.set(-10, -6, 5);
    scene.add(dirLight2);

    const mouseLight = new THREE.PointLight(currentAccent, 5.0, 28);
    mouseLight.position.set(0, 0, 6);
    scene.add(mouseLight);

    // Root 3D Object Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Metallic Futuristic Tech Core (Polyhedron + Wireframe cage)
    const coreGeo = new THREE.IcosahedronGeometry(2.4, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x0e1722,
      metalness: 0.92,
      roughness: 0.12,
      reflectivity: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Wireframe glowing cage over core
    const wireGeo = new THREE.IcosahedronGeometry(2.46, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: currentAccent,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    mainGroup.add(wireMesh);

    // Inner glowing energy orb
    const innerGeo = new THREE.SphereGeometry(1.2, 32, 32);
    const innerMat = new THREE.MeshStandardMaterial({
      color: currentAccent,
      emissive: currentAccent,
      emissiveIntensity: 0.85,
      roughness: 0.2
    });
    const innerOrb = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerOrb);

    // 2. Metallic Torus Orbital Rings
    const ringGeo = new THREE.TorusGeometry(3.6, 0.08, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.95,
      roughness: 0.2
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    mainGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(4.4, 0.06, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: currentAccent,
      transparent: true,
      opacity: 0.6
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 3;
    mainGroup.add(ring2);

    // 3. Orbiting Developer Elements (3D brackets & Tech Cubes)
    const orbitingGroup = new THREE.Group();
    mainGroup.add(orbitingGroup);

    // Helper to create 3D Bracket geometry
    const createBracketShape = (isLeft: boolean) => {
      const shape = new THREE.Shape();
      const s = isLeft ? 1 : -1;
      shape.moveTo(0, 0);
      shape.lineTo(0.5 * s, 0);
      shape.lineTo(0.5 * s, 0.2);
      shape.lineTo(0.2 * s, 0.2);
      shape.lineTo(0.2 * s, 0.9);
      shape.lineTo(0.5 * s, 1.1);
      shape.lineTo(0.2 * s, 1.3);
      shape.lineTo(0.2 * s, 2.0);
      shape.lineTo(0.5 * s, 2.0);
      shape.lineTo(0.5 * s, 2.2);
      shape.lineTo(0, 2.2);
      shape.lineTo(0, 1.2);
      shape.lineTo(-0.2 * s, 1.1);
      shape.lineTo(0, 1.0);
      shape.closePath();

      const extrudeSettings = {
        depth: 0.25,
        bevelEnabled: true,
        bevelSegments: 3,
        steps: 1,
        bevelSize: 0.04,
        bevelThickness: 0.04
      };
      return new THREE.ExtrudeGeometry(shape, extrudeSettings);
    };

    const bracketMat = new THREE.MeshPhysicalMaterial({
      color: 0xe2e8f0,
      metalness: 0.9,
      roughness: 0.15,
      clearcoat: 0.8
    });

    const leftBracketGeo = createBracketShape(true);
    leftBracketGeo.center();
    const leftBracket = new THREE.Mesh(leftBracketGeo, bracketMat);
    leftBracket.position.set(-4.6, 0.5, 0);
    leftBracket.scale.set(1.15, 1.15, 1.15);
    orbitingGroup.add(leftBracket);

    const rightBracketGeo = createBracketShape(false);
    rightBracketGeo.center();
    const rightBracket = new THREE.Mesh(rightBracketGeo, bracketMat);
    rightBracket.position.set(4.6, -0.5, 0);
    rightBracket.scale.set(1.15, 1.15, 1.15);
    orbitingGroup.add(rightBracket);

    // 4. Floating Tech Cubes / Data Nodes
    const cubeCount = 16;
    const cubes: THREE.Mesh[] = [];
    const cubeGeo = new THREE.BoxGeometry(0.55, 0.55, 0.55);

    for (let i = 0; i < cubeCount; i++) {
      const isAccent = i % 3 === 0;
      const cMat = new THREE.MeshStandardMaterial({
        color: isAccent ? currentAccent : 0x1e293b,
        metalness: 0.85,
        roughness: 0.2,
        emissive: isAccent ? currentAccent : 0x0f172a,
        emissiveIntensity: isAccent ? 0.45 : 0.05
      });
      const cube = new THREE.Mesh(cubeGeo, cMat);
      
      const phi = Math.acos(-1 + (2 * i) / cubeCount);
      const theta = Math.sqrt(cubeCount * Math.PI) * phi;
      const radius = 5.2 + (i % 4) * 0.8;

      cube.position.set(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      );

      cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      orbitingGroup.add(cube);
      cubes.push(cube);
    }

    // 5. Starfield / Floating Data Particles
    const particleCount = 320;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 45;
      positions[i + 1] = (Math.random() - 0.5) * 45;
      positions[i + 2] = (Math.random() - 0.5) * 25;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: currentAccent,
      size: 0.09,
      transparent: true,
      opacity: 0.65
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Interaction
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -((e.clientY / window.innerHeight) * 2 - 1);
      targetX = x * 1.5;
      targetY = y * 1.2;

      // Update point light position
      mouseLight.position.x = x * 7;
      mouseLight.position.y = y * 5;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Scroll tracking for global parallax across entire page
    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;

    const onScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Theme observer
    const observer = new MutationObserver(() => {
      const newColor = getThemeColor();
      currentAccent = newColor;
      wireMat.color = newColor;
      innerMat.color = newColor;
      innerMat.emissive = newColor;
      ring2Mat.color = newColor;
      mouseLight.color = newColor;
      particleMat.color = newColor;
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // Resize Handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Smooth scroll damping
      scrollY += (targetScrollY - scrollY) * 0.06;
      const scrollRotation = scrollY * 0.0012;

      // Rotate core
      coreMesh.rotation.y = elapsedTime * 0.25 + scrollRotation * 0.5;
      coreMesh.rotation.x = elapsedTime * 0.15;
      wireMesh.rotation.y = -elapsedTime * 0.3 - scrollRotation * 0.8;
      wireMesh.rotation.z = elapsedTime * 0.2;

      // Orbit rings
      ring1.rotation.z = elapsedTime * 0.35 + scrollRotation * 0.6;
      ring2.rotation.z = -elapsedTime * 0.25 - scrollRotation * 0.4;

      // Orbiting elements
      orbitingGroup.rotation.y = elapsedTime * 0.18 + mouseX * 0.4 + scrollRotation;
      orbitingGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.15 + mouseY * 0.3;

      // Rotate individual cubes
      for (let i = 0; i < cubes.length; i++) {
        cubes[i].rotation.x += 0.015;
        cubes[i].rotation.y += 0.02;
      }

      // Parallax whole scene with mouse & smooth floating
      mainGroup.rotation.y = mouseX * 0.45;
      mainGroup.rotation.x = -mouseY * 0.35;

      // Subtle dynamic float + scroll drift
      mainGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.25 - (scrollY * 0.002 % 5 - 2.5);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      // Clean up geometries and materials
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      leftBracketGeo.dispose();
      rightBracketGeo.dispose();
      bracketMat.dispose();
      cubeGeo.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: isGlobal ? 'fixed' : 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.82
      }}
      aria-hidden="true"
    />
  );
};
