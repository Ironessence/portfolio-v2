import React from "react";
import '../styles/Header.styles.scss';
import bigIDE from '../assets/IDE filled.png';
import {motion} from 'framer-motion';

const Header = ({ideRef, headerRef}) => {

    return (
        <div className='home-header' ref={headerRef} >
           
            {/* <h1 className="header-title" >Hi there! <br />I'm Alex, <br /> a <span className='header-title-special'>Creative<br/> </span>Front-End Developer</h1> */}
            <img 
            src={bigIDE} 
            alt="IDE" 
            className='IDE' 
            ref={ideRef}
           
            />
            
            
        </div>
    )
}

export default Header;