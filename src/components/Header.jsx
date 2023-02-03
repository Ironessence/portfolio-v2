import React from "react";
import '../styles/Header.styles.scss';
import bigIDE from '../assets/IDE filled.png';
import {motion} from 'framer-motion';

const Header = ({ideRef, headerRef}) => {

    return (
        <div className='home-header' ref={headerRef} >
           
            <h1 className="header-title" >Hi there! <br />I'm Alex, <br /> a <span className='header-title-special'>Creative<br/> </span>Front-End Developer</h1>
            <img 
            src={bigIDE} 
            alt="IDE" 
            className='IDE' 
            ref={ideRef}
            // initial={{scale: 0.1, rotateZ: 20, opacity: 0, y: 200, transition: {duration: 1, type: 'just'}}}
            // animate={{scale: 1, rotateZ: 2, opacity: 1, y: 0, skewX: 3, rotateX: -5,  transition: {duration: 1, delay: 1, type: 'spring'}}}
            />
            
            
        </div>
    )
}

export default Header;