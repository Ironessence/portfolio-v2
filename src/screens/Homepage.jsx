import React, { Suspense } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '../components/LetterA';

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  return (
    <Main>
      <Canvas>
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[-2, 5, 2]}
          intensity={1}
        />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
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

export default Homepage;
