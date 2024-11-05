import React, { useState } from 'react';
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

  const handleMouseEnter = (img) => {
    setAnimationClass('slide-in'); // Add slide-in class
    setImage(img);
  };

  const handleMouseLeave = () => {
    setAnimationClass('slide-out');
    setImage(defaultImage);
  };

  const updateMenu = () => {
    setBurgerClass(isMenuClicked ? "burger-bar unclicked" : "burger-bar clicked");
    setMenuClass(isMenuClicked ? "menu hidden" : "menu visible");
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="navbar">
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
        <nav className="flex">
          <div className="burger-menu-container" onClick={updateMenu}>
            <div className="burger-menu2">
              <div className={burgerClass}></div>
              <div className={burgerClass}></div>
              <div className={burgerClass}></div>
            </div>
            <span className="menu-label text-style2">Close</span>
          </div>

          <div className="full-container">
            <div className="your-container">
              <div className="your-container2">
                <div className="your2">
                  <div className="your">
                    <span className="text-style31" >SERVICES</span>
                  </div>
                  <div className="line"></div>
                  <div className="right">
                    <span onMouseEnter={() => handleMouseEnter(Facialtreatments)} onMouseLeave={handleMouseLeave} className={`text-style3 ${hoverClass}`}>MASSAGES</span>
                    <span onMouseEnter={() => handleMouseEnter(hairdressing)} onMouseLeave={handleMouseLeave} className={`text-style3 ${hoverClass}`}>HAIRDRESSING</span>
                    <span onMouseEnter={() => handleMouseEnter(Facialtreatments)} onMouseLeave={handleMouseLeave} className={`text-style3 ${hoverClass}`}>NAIL SERVICES</span>
                    <span onMouseEnter={() => handleMouseEnter(Facialtreatments)} onMouseLeave={handleMouseLeave} className={`text-style3 ${hoverClass}`}>Facial treatments</span>
                    <span onMouseEnter={() => handleMouseEnter(Facialtreatments)} onMouseLeave={handleMouseLeave} className={`text-style3 ${hoverClass}`}>Maderotherapy</span>
                    <span onMouseEnter={() => handleMouseEnter(Aesthetics)} onMouseLeave={handleMouseLeave} className={`text-style3 ${hoverClass}`}>Aesthetics</span>
                    <span onMouseEnter={() => handleMouseEnter(Laser)} onMouseLeave={handleMouseLeave} className={`text-style3 ${hoverClass}`}>Laser</span>
                  </div>
                </div>
                <div className="menu-options">
                  <div className="menu-item">
                    <span className="line-divider">|</span>
                    <span className="text-style31">SPECIAL OFFERS</span>
                  </div>
                  <div className="menu-item">
                    <span className="line-divider">|</span>
                    <span className="text-style31">BOUTIQUES</span>
                  </div>
                </div>
              </div>

              <div className="image-container">
                <div className={`image-wrapper ${animationClass}`}>
                  <Image src={image} alt="Dynamic" layout="responsive" width={400} />
                </div>
              </div>
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
