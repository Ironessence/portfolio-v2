import React, { Suspense } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, ScrollControls } from '@react-three/drei';
import { Model } from '../components/LetterA';

gsap.registerPlugin(ScrollTrigger);

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() =>
    camera.position.lerp(vec.set(mouse.x * 1, mouse.y * 1, camera.position.z), 0.01),
  );
}

const Hero = () => {
  return (
    <Main>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <ScrollControls>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[-2, 5, 2]}
            intensity={1}
          />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <Rig />
        </ScrollControls>
      </Canvas>
    </Main>
  );
};

const Main = styled.div`
  background: rgb(57, 57, 62);
  background: radial-gradient(
    circle,
    rgba(57, 57, 62, 1) 0%,
    rgba(46, 44, 44, 1) 51%,
    rgba(0, 0, 0, 1) 100%
  );
  height: 100vh;
  overflow: hidden;
`;

export default Hero;
