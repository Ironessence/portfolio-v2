import React, { useEffect, useState } from "react";
import '../styles/Navigation.styles.scss';
import menuClosedIcon from '../assets/menu-closed.png';
import menuOpenIcon from '../assets/menu-open.png';





const Navigation = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
 
  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) {
        setShowNav(false); 
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
        <div className='nav-wrapper'>
           <div className={showNav ? 'visible-nav' : 'not-visible-nav'}>
                <img src={menuOpen ? menuOpenIcon : menuClosedIcon} id='menu-icon' alt='menu-icon' onClick={() => setMenuOpen(!menuOpen)}  />
            </div>
        </div>
    )
}

export default Navigation;