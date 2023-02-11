import React, { Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '../components/LetterA';
gsap.registerPlugin(ScrollTrigger);

const Rig = () => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  //Animation for camera to enter through the letter
  useEffect(() => {
    let ctx = gsap.context(() => {
      //INSIDE CONTEXT >
      gsap.timeline().to(camera.position, {
        z: 4.2,
        y: 0,
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: '+=2000',
          scrub: true,
          markers: true,
        },
      });
    }, '.hero');
    //Clean-Up
    return () => ctx.revert();
  }, []);

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 1, mouse.y * 1, camera.position.z), 0.005);
  });
};

const Hero = () => {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
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

        <ambientLight intensity={0.5} />
        <directionalLight
          position={[-2, 5, 2]}
          intensity={1}
        />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Rig />
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
