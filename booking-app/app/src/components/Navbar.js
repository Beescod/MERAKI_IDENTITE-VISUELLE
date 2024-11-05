import React, { useState, useEffect } from 'react';
import '../assets/css/Navbar.css';
import Image from '../assets/images/LoagoL.png';
// import MyImage from '../assets/images/LoagoL.png';
import { MyImage } from '../assets/images/LoagoL.png';


const Navbar = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const updateMenu = () => {
    setBurgerClass(isMenuClicked ? "burger-bar unclicked" : "burger-bar clicked");
    setMenuClass(isMenuClicked ? "menu hidden" : "menu visible");
    setIsMenuClicked(!isMenuClicked);
  };

  const [image, setImage] = useState('default.jpg'); // Default image

  const handleMouseEnter = (img) => {
    setImage(img);
  };

  const handleMouseLeave = () => {
    setImage('default.jpg'); // Reset to default image
  };

  return (
    <div className="navbar">
      <nav>
        <div className="burger-menu-container" onClick={updateMenu}>
          <div className="burger-menu" >
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
          </div>
          <span className="menu-label text-style">Menu</span>
        </div>
      </nav>

      <div className={menuClass}>
        <nav className="flex">
          <div className="burger-menu-container" onClick={updateMenu}>
            <div className="burger-menu2">
              <div className={burgerClass}></div>
              <div className={burgerClass}></div>
              <div className={burgerClass}></div>
            </div>
            <span className="menu-label text-style">Close</span>
          </div>

          
          <div className="full-container">
            <div className="your-container">
              <div className="your">
                <span>YOUR</span>
              </div>
              <div className="line"></div>
              <div className="right">
                <span onMouseEnter={() => handleMouseEnter('stay.jpg')} onMouseLeave={handleMouseLeave}>STAY</span>
                <span onMouseEnter={() => handleMouseEnter('table.jpg')} onMouseLeave={handleMouseLeave}>TABLE</span>
                <span onMouseEnter={() => handleMouseEnter('care.jpg')} onMouseLeave={handleMouseLeave}>CARE</span>
                <span onMouseEnter={() => handleMouseEnter('event.jpg')} onMouseLeave={handleMouseLeave}>EVENT</span>
              </div>
            </div>
            <div className="image-container">
              <img src={image} alt="Dynamic" />
            </div>
          </div>



        </nav>
      </div>

      <div className="navbar-container">
        <div className="nav-links">
          <a href="#langues" className="text-style">FR/EN</a>
          <a href="#Magazine" className="text-style2">LE MAGAZINE</a>
          <a href="#Reservations" className="text-style2">RÉSERVER</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
