import React from 'react';
import { motion } from 'framer-motion';

const MenuItem = ({ animatedMenuItem, title, scrollRef, diff }) => {
  const handleScroll = (value) => {
    window.scrollTo({
      top: diff ? value.current.offsetTop + 2200 - diff : value.current.offsetTop + 2200,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      className="menu-item-container"
      variants={animatedMenuItem}
      whileHover={{ width: '115%' }}
      onClick={() => handleScroll(scrollRef)}
    >
      <div className="title-and-icon-container">
        <motion.a className="menu-item">{title}</motion.a>
      </div>
    </motion.div>
  );
};

export default MenuItem;
