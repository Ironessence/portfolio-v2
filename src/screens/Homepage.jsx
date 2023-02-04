import React, { useEffect, useRef, useState } from 'react';
import '../styles/Homepage.styles.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from '../components/Header';
gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
 const ideRef = useRef(null);
 const headerRef = useRef(null);

//PIN IDE TO THE TOP WHEN SCROLLING
 useEffect(() => {
  let ctx = gsap.context(() => {
//INSIDE CONTEXT >
    gsap.timeline()
    .to(ideRef.current, {
      scrollTrigger: {
        trigger: ideRef.current,
        start: "top 190",
        end: '+=5000',
        scrub: true,
        pin:true,
        anticipatePin: 1,
        markers: true,
      }
    })
    .to(ideRef.current, {
      x: -300,
      scale: 0.5,
      skewX: -3,
      rotateZ: -3,
      rotateX: -3,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.home-wrapper',
        start: "700 300",
        end: '+=500',
        scrub: true,
        markers: true,
      }
    })
    
  }, headerRef)
//Clean-Up
  return () => ctx.revert(); 
 }, [])


 //INTRO ANIMATION FOR IDE
 useEffect(() => {
  let ctx2 = gsap.context(() => {
    //INSIDE CONTEXT >
       gsap.fromTo(ideRef.current, {y: 200}, {y: 0, duration: 1})
      }, headerRef)

      return () => ctx2.revert();
 }, [])




 
    return (
        <div className='home-wrapper'>
          <Header ideRef={ideRef} headerRef={headerRef}  />
        </div>
    )
}

export default Homepage;