import React, { useEffect, useState } from 'react';
import './Navigation.styles.scss';
import menuClosedIcon from '../assets/menu-closed.png';
import menuOpenIcon from '../assets/menu-open.png';
import { AnimatePresence, motion } from 'framer-motion';
import MenuItem from './components/MenuItem';
import { useRefContext } from '../utils/context';

const Navigation = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const { projectsRef, skillsRef, aboutRef, contactRef } = useRefContext();

  const menuItems = [
    { title: '01 _PROJECTS', scrollRef: projectsRef },
    { title: '02 _SKILLS', scrollRef: skillsRef, diff: 400 },
    { title: '03 _ABOUT_ME', scrollRef: aboutRef },
    { title: '04 _CONTACT', scrollRef: contactRef },
  ];

  const animatedMenu = {
    hidden: { opacity: 0, x: 300 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      x: 300,
    },
  };

  const animatedMenuItem = {
    hidden: { opacity: 0, x: 300 },
    show: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 300 },
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 0 && window.scrollY > lastScrollY) {
        setShowNav(false);
        setMenuOpen(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <div>
      <AnimatePresence>
        {showNav && (
          // WRAPPER

          <motion.div
            className="nav-wrapper"
            initial={{
              opacity: 0,
              y: -70,
              transition: { duration: 0.5, delay: 0.2, type: 'just' },
            }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2, type: 'just' } }}
            exit={{ opacity: 0, y: -70, transition: { duration: 0.5, delay: 0.2, type: 'just' } }}
          >
            {/* LOGO CONTAINER */}

            <div className="logo-container">
              <h1 className="logo">ALEXANDRU DINCĂ</h1>
            </div>

            {/* ICON CONTAINER */}

            <motion.div
              className="icon-container"
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={menuOpen ? { rotateZ: 20 } : { scale: 1.05 }}
            >
              <img
                src={menuOpen ? menuOpenIcon : menuClosedIcon}
                className="menu-icon"
                alt="menu-icon"
              />
            </motion.div>

            {/* OPEN MENU */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  className="open-menu"
                  variants={animatedMenu}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, x: 600, transition: { duration: 0.4 } }}
                >
                  {menuItems.map((item) => (
                    <MenuItem
                      animatedMenuItem={animatedMenuItem}
                      title={item.title}
                      scrollRef={item.scrollRef}
                      diff={item.diff}
                      setMenuOpen={setMenuOpen}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
