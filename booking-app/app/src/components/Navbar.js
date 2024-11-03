import React, { useState } from 'react';
import '../assets/css/Navbar.css';

const Navbar = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // Toggle burger menu
  const updateMenu = () => {
    setBurgerClass(isMenuClicked ? "burger-bar unclicked" : "burger-bar clicked");
    setMenuClass(isMenuClicked ? "menu hidden" : "menu visible");
    setIsMenuClicked(!isMenuClicked);
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
          <span className="menu-label">Menu</span>
        </div>
      </nav>

      <div className={menuClass}>
        <div className="nav-links">
          <a href="#langues">FR/EN</a>
          <a href="#Magazine">LE MAGAZINE</a>
          <a href="#Reservations">RÉSERVER</a>
        </div>
      </div>

      <div className="navbar-container">
        <div className="nav-links">
          <a href="#langues">FR/EN</a>
          <a href="#Magazine">LE MAGAZINE</a>
          <a href="#Reservations">RÉSERVER</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
