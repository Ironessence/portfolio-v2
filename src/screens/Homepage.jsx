import React, { useEffect, useRef, useState } from 'react';
import '../styles/Homepage.styles.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Header from '../components/Header';
gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
 const ideRef = useRef(null);
 const headerRef = useRef(null);

//  gsap.defaults({overwrite: 'auto'});

//  gsap.set(ideRef.current, {xPercent: -50, yPercent: -50});

 
    return (
        <div className='home-wrapper'>
          <Header ideRef={ideRef} headerRef={headerRef}  />
        </div>
    )
}

export default Homepage;