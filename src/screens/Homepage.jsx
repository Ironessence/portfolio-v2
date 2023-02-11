import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Hero from './Hero';
import '../styles/Homepage.styles.scss';
gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      //INSIDE CONTEXT >
      gsap.timeline().to('.hero', {
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: '+=2000',
          scrub: true,
          pin: true,
          anticipatePin: 1,
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
        <Hero />
      </div>
    </div>
  );
};

export default Homepage;
