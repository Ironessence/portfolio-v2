import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Hero from '../hero/Hero';
import '../../styles/Homepage.styles.scss';
import ProjectsTitle from '../projects/components/ProjectsTitle';

import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import styled from 'styled-components';
import AboutMe from '../about/AboutMe';
import Contact from '../contact/Contact';

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
        rotateZ: 5,
        duration: 1.5,
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top top',
          scrub: true,
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
        <AboutMe />
        <Contact />
      </div>
    </div>
  );
};

const Img = styled.img`
  position: absolute;
  top: 0;
  width: 150%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 66%);
  filter: brightness(80%);
  @media only screen and (max-width: 1000px) {
    width: 300%;
  }
  @media only screen and (max-width: 700px) {
    width: 250%;
  }
  @media only screen and (max-width: 500px) {
    width: 350%;
  }
`;

export default Homepage;
