import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import styled from 'styled-components';
import headerBG from '../assets/header-bg.jpg';
import Projects from '../components/Projects';
gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const bgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      //INSIDE CONTEXT >
      gsap.timeline().to(bgRef.current, {
        x: -900,
        y: 600,
        rotateZ: -10,
        scale: 5,
        duration: 10,
        scrollTrigger: {
          trigger: bgRef.current,
          start: '1 top',
          end: '+=5000',
          scrub: true,
          pin: true,
        },
      });
    }, containerRef);
    //Clean-Up
    return () => ctx.revert();
  }, []);

  return (
    <Main ref={containerRef}>
      <ImageBG
        ref={bgRef}
        src={headerBG}
        alt="bg-header"
      />
      <Header />
      <Projects />
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
  height: 700vh;
  position: relative;
  overscroll-behavior: none;
`;

const ImageBG = styled.img`
  height: 100vh;
  transform: scale(3);
  right: 50vw;
  position: absolute;
  opacity: 0.7;
`;

export default Homepage;
