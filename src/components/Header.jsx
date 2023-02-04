import React from 'react';
import '../styles/Header.styles.scss';
import bigIDE from '../assets/IDE filled.png';
import { motion } from 'framer-motion';

const Header = ({ ideRef, textRef, specialRef, scrollDownText }) => {
  return (
    <div className="home-header">
      <h1
        className="header-title"
        ref={textRef}
      >
        Hi there! <br />
        I'm <span className="header-title-special">Alex</span>, <br /> a{' '}
        <span
          className="header-title-special"
          ref={specialRef}
        >
          Creative{' '}
        </span>
        Front-End Developer
      </h1>

      <img
        src={bigIDE}
        alt="IDE"
        className="IDE"
        ref={ideRef}
      />

      <h1
        className="header-title-scroll"
        ref={scrollDownText}
      >
        Scroll down to enter my small world
      </h1>
    </div>
  );
};

export default Header;
