import React, { useState, useEffect } from 'react';
import '../assets/css/Navbar.css';
import Image from 'next/image';
import defaultImage from '../assets/images/Default.jpg';
import LoagoL from '../assets/images/LoagoL.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 90;
      setIsScrolled(scrolled);
      console.log("Is scrolled:", scrolled); // Logs true if scrolled, false if not
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <nav>
        <div className="burger-menu-container">
          <div className="burger-menu">
            <div className="burger-bar"></div>
            <div className="burger-bar"></div>
            <div className="burger-bar"></div>
          </div>
          <span className="menu-label text-style">Menu</span>
        </div>
      </nav>

      <div className={`navbar-container ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="language-options" style={{ display: isScrolled ? 'none' : 'flex' }}>
          <a className="text-style" href="#">FR</a>
          <a className="text-style" href="#">/EN</a>
        </div>
        <div className="nav-logo" style={{ display: isScrolled ? 'block' : 'none' }}>
          <a href="/">
            <Image src={LoagoL} alt="Dynamic" layout="intrinsic" width={400} height={200} />
          </a>
        </div>
        <div className="nav-links">
          <a href="#Magazine" className="text-style2">LE MAGAZINE</a>
          <a href="#Reservations" className="text-style2">RÉSERVER</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
