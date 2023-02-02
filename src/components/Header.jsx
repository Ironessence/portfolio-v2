import { AnimatePresence } from "framer-motion";
import {motion} from 'framer-motion';
import React, { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";
import '../styles/Header.styles.scss';

const Header = ({scrollPosition}) => {

    const [attribute, setAttribute] = useState('a creative Front-End Developer');

    const attributesList = useMemo(() => [
        'a creative Front-End Developer',
        'a tech enthusiast',
        'a test 2',
        'a test 3',
        'a test 4',
    ], []);

    const animatedText = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            duration: 0.7
          }
        },
        exit: {
          opacity: 0,
        }
      }

    

    useEffect(() => {
        if (scrollPosition > 0 && scrollPosition < 100) {
            setAttribute(attributesList[1]);
        } else if (scrollPosition > 100 && scrollPosition < 200) {
            setAttribute(attributesList[2]);
        } else if (scrollPosition > 200 && scrollPosition < 300) {
            setAttribute(attributesList[3]);
        } else if (scrollPosition > 300 && scrollPosition < 400) {
            setAttribute(attributesList[4]);
        } else if (scrollPosition === 0) {
            setAttribute(attributesList[0]);
        }
    }, [attributesList, scrollPosition])

    return (
        <div className='home-header'>
            <h1 className='header-text'>
                Hello! <br />
                I'm Alex,
            </h1>
            <AnimatePresence>
            <motion.h1 
            className='header-changing-text'
            key={attribute}
            variants={animatedText}
            animate={'show'}
            initial={'hidden'}
            exit={'exit'}
            >{attribute}
            </motion.h1>
            </AnimatePresence>
        </div>
    )
}

export default Header;