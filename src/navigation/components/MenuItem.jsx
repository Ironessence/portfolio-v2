import React, { useState } from "react";
import {AnimatePresence, motion} from 'framer-motion'

const MenuItem = ({animatedMenuItem, title, icon}) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <motion.div className='menu-item-container' variants={animatedMenuItem}
                whileHover={{width: '115%'}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                    <div className='title-and-icon-container'>
                    <motion.a className='menu-item'>{title}</motion.a>
                   <AnimatePresence>
                   {isHovered &&  <motion.img 
                    src={icon} 
                    alt='menu-item-icon' 
                    className='menu-item-icon' 
                    initial={{x: -20, opacity: 0, transition: {duration: 0.2, type: 'just'}}} 
                    animate={{x: 30, opacity: 1, transition: {duration: 0.2, type: 'just'}}} 
                    exit={{x: -20, opacity: 0, transition: {duration: 0.2, type: 'just'}}}
                    />}
                    </AnimatePresence>
                    </div>
                </motion.div>
    )
}

export default MenuItem;