import React, { Suspense, useEffect, useLayoutEffect, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Model } from '../components/LetterA';
import '../styles/Homepage.styles.scss';
import { Sparkles } from '@react-three/drei';
gsap.registerPlugin(ScrollTrigger);

const Rig = () => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //Animation for camera to enter through the letter
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      //INSIDE CONTEXT >
      gsap.timeline().to(camera.position, {
        z: 4,
        y: 0,
        x: 0.15,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: '+=2000',
          scrub: true,
        },
      });
    }, '.hero');

    //Clean-Up
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useFrame(() => {
    if (scrollPosition < 915) {
      camera.position.lerp(vec.set(mouse.x * 1, mouse.y * 1, camera.position.z), 0.002);
      camera.lookAt(0, 0, 0);
    } else {
      camera.lookAt(0, 0, 0);
    }
  });
};

const Hero = () => {
  return (
    <Main>
      <Canvas
        shadows
        camera={{ position: [0, 0, 5] }}
      >
        <Sparkles
          speed={0.2}
          opacity={0.3}
          color={'rgb(65, 65, 65)'}
          size={5}
          scale={5}
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
  background: rgb(84, 84, 84);
  background: linear-gradient(
    141deg,
    rgba(40, 40, 40, 0.92) 0%,
    rgba(10, 10, 10, 0.92) 49%,
    rgba(5, 5, 5, 1) 100%
  );
  height: 100vh;
`;

export default Hero;
