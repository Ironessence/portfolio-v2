import React, { useState } from 'react';
import '../styles/Homepage.styles.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);




const Homepage = () => {
  // const headerTitleRef = useRef(null);
  // const headerRef = useRef(null);
  // const [tl, setTl] = useState(gsap.timeline({paused: true}))

  // useEffect(() => {

  //   tl.to(headerTitleRef.current, {
  //     x: '-120%',
  //     ease: 'ease',
  //     opacity: 0.01,
  //     scrollTrigger: {
  //       trigger: headerRef.current,
  //       id: 'scroll-in',
  //       start: "50px 5%",
  //       end: "1000px 5%",
  //       scrub: 1.5,
  //       markers: true,
  //       toggleActions: 'play none none reverse'
  //     }
  //   })
  // }, [tl])

    return (
        <div className='home-wrapper'>
        <div className='home-header'>
          <h1 className='header-title' >
            <span className='header-title-creative'>
              Creative
            </span>
            Front-End Developer
          </h1>
        </div>
        </div>
    )
}

export default Homepage;