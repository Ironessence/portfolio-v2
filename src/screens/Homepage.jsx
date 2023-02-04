import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import '../styles/Homepage.styles.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from '../components/Header';
gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const ideRef = useRef(null);
  const textRef = useRef(null);
  const specialRef = useRef(null);
  const scrollDownText = useRef(null);

  //PIN IDE TO THE TOP WHEN SCROLLING
  useEffect(() => {
    let ctx = gsap.context(() => {
      //INSIDE CONTEXT >
      gsap.timeline().to(ideRef.current, {
        x: -200,
        scale: 3,
        duration: 10,
        scrollTrigger: {
          trigger: ideRef.current,
          start: 'top 190',
          end: '+=2000',
          scrub: true,
          pin: true,
          anticipatePin: 1,
          markers: true,
        },
      });
    }, '.home-wrapper');
    //Clean-Up
    return () => ctx.revert();
  }, []);

  //INTRO ANIMATION FOR IDE
  useEffect(() => {
    let ctx = gsap.context(() => {
      //INSIDE CONTEXT >
      gsap.fromTo(ideRef.current, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    }, '.home-wrapper');

    return () => ctx.revert();
  }, []);

  //Text animation for appearing
  useEffect(() => {
    let ctx = gsap.context(() => {
      //INSIDE CONTEXT >
      gsap.fromTo(
        textRef.current,
        { height: '0%', opacity: 0 },
        { height: '100%', opacity: 1, duration: 0.5, delay: 1 },
      );
    }, '.home-wrapper');

    return () => ctx.revert();
  }, []);

  // Text controll on scroll
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      //INSIDE CONTEXT >
      gsap.timeline().to(textRef.current, {
        scale: 2,
        y: 300,
        duration: 2,
        scrollTrigger: {
          trigger: textRef.current,
          start: '-190 190',
          end: '+=400',
          scrub: true,
          markers: true,
        },
      });
    }, '.home-wrapper');
    //Clean-Up
    return () => ctx.revert();
  }, []);

  //Scroll Down Text animation for appearing
  useEffect(() => {
    let ctx = gsap.context(() => {
      //INSIDE CONTEXT >
      gsap.fromTo(
        scrollDownText.current,
        { y: -200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1.25 },
      );
    }, '.home-wrapper');

    return () => ctx.revert();
  }, []);

  return (
    <div className="home-wrapper">
      <Header
        ideRef={ideRef}
        textRef={textRef}
        specialRef={specialRef}
        scrollDownText={scrollDownText}
      />
    </div>
  );
};

export default Homepage;
