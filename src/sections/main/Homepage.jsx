import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Hero from '../hero/Hero';
import '../../styles/Homepage.styles.scss';
import ProjectsTitle from '../projects/components/ProjectsTitle';

import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const imgRef = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      //INSIDE CONTEXT >
      gsap.timeline().to('.hero', {
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: '+=2200',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, '.homepage');
    //Clean-Up
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      //INSIDE CONTEXT >
      gsap.timeline().to(imgRef.current, {
        scale: 3,
        x: 500,
        duration: 1.5,

        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top top',
          scrub: true,
          // pin: true,
          // anticipatePin: 1,
          markers: true,
        },
      });
    }, '.homepage');
    //Clean-Up
    return () => ctx.revert();
  }, []);

  return (
    <div className="homepage">
      <div className="hero">
        <Img
          src={require('../../assets/bg-test.jpg')}
          ref={imgRef}
        />
        <Hero />
        <ProjectsTitle />
        <Projects />
        <Skills />
      </div>
    </div>
  );
};

const Img = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 66%);
`;

export default Homepage;
