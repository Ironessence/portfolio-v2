import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Hero from '../hero/Hero';
import '../../styles/Homepage.styles.scss';
import ProjectsTitle from '../projects/components/ProjectsTitle';

import Projects from '../projects/Projects';
import Skills from '../skills/Skills';

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
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

  return (
    <div className="homepage">
      <div className="hero">
        <Hero />
        <ProjectsTitle />
        <Projects />
        <Skills />
      </div>
    </div>
  );
};

export default Homepage;