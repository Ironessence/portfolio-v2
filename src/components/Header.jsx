import React from "react";
import '../styles/Header.styles.scss';
import bigIDE from '../assets/IDE filled.png';
import {motion} from 'framer-motion';

const Header = ({titleRef, headerRef, ideRef}) => {

    return (
        <div className='home-header' ref={headerRef}>
           
            <h1 className="header-title" ref={titleRef}>Hi there! <br />I'm Alex, <br /> a <span className='header-title-special'>Creative </span>Front-End Developer</h1>
            <motion.img 
            src={bigIDE} 
            alt="IDE" 
            className='IDE' 
            ref={ideRef}
            initial={{scale: 0.1, rotateZ: 20, opacity: 0, y: 200, transition: {duration: 1, type: 'just'}}}
            animate={{scale: 1, rotateZ: 0, opacity: 1, y: 0, transition: {duration: 1, delay: 1, type: 'spring'}}}
            />
            
            
        </div>
    )
}

export default Header;