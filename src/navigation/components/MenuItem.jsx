import React from "react";
import {motion} from 'framer-motion'

const MenuItem = ({animatedMenuItem, title}) => {

   

   

    return (
        <motion.div className='menu-item-container' variants={animatedMenuItem}
                whileHover={{width: '115%'}}
                
                >
                    <div className='title-and-icon-container'>
                    <motion.a className='menu-item'>{title}</motion.a>
                   
                    </div>
                </motion.div>
    )
}

export default MenuItem;