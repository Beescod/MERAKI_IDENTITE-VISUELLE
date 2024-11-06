import React, { useState, useEffect } from 'react';
import '../assets/css/Navbar.css';
import Image from 'next/image';
import hairdressing from '../assets/images/Hairdressing.jpg';
import massages from '../assets/images/Massages.jpg';
import Nailservices from '../assets/images/Nail-services.jpeg';
import Facialtreatments from '../assets/images/Facial-treatments.jpg';
import Maderotherapy from '../assets/images/Maderotherapy.jpg';
import Aesthetics from '../assets/images/Aesthetics.jpg';
import Laser from '../assets/images/Laser.jpg';
import defaultImage from '../assets/images/Default.jpg';

const Navbar = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [image, setImage] = useState(defaultImage);
  const [hoverClass, setHoverClass] = useState("");
  const [animationClass, setAnimationClass] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change 50 to the scroll threshold you want
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = (img) => {
    setAnimationClass('slide-in');
    setImage(img);
    setHoverClass('hovered');
  };

  const handleMouseLeave = () => {
    setAnimationClass('slide-out');
    setImage(defaultImage);
    setHoverClass('');
  };

  const updateMenu = () => {
    setBurgerClass(isMenuClicked ? "burger-bar unclicked" : "burger-bar clicked");
    setMenuClass(isMenuClicked ? "menu hidden" : "menu visible");
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <nav>
        <div className="burger-menu-container" onClick={updateMenu}>
          <div className="burger-menu">
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
          </div>
          <span className="menu-label text-style">Menu</span>
        </div>
      </nav>

      <div className={menuClass}>
        {/* Menu Content */}
      </div>

      <div className={`navbar-container ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="language-options" style={{ display: isScrolled ? 'none' : 'flex' }}>
          <a className="text-style" href="#">FR</a>
          <a className="text-style" href="#">/EN</a>
        </div>
        <div className="nav-logo" style={{ display: isScrolled ? 'block' : 'none' }}>
          <img src="/path-to-logo.png" alt="Logo" /> {/* Add your logo image path */}
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
