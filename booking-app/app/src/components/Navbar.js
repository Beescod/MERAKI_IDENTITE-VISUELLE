import React, { useState, useEffect } from 'react';
import '../assets/css/Navbar.css';
import Image from '../assets/images/img 52.jpeg';

const Navbar = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchImage = async () => {
      const imgUrl = '../assets/images/img 52.jpeg'; // Replace with dynamic path if necessary
      setImageSrc(imgUrl);
    };

    fetchImage();
  }, []);

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
          <span className="menu-label text-style">Menu</span>
        </div>
      </nav>

      <div className={menuClass}>
        <nav>
          <div className="burger-menu-container" onClick={updateMenu}>
            <div className="burger-menu2">
              <div className={burgerClass}></div>
              <div className={burgerClass}></div>
              <div className={burgerClass}></div>
            </div>
            <span className="menu-label text-style">Menu</span>
          </div>

          <div className="menu-content">
            <h1 className="logo text-style">LA MAMOUNIA MARRAKECH</h1>
            <div className="menu-items">
              <div className="menu-column">
                <h3 className="text-style">HÉBERGEMENTS</h3>
                <p className="text-style">Les Chambres</p>
                <p className="text-style">Les Suites</p>
                <p className="text-style">Les Suites d'Exception</p>
                <p className="text-style">Les Riads</p>
              </div>
              <div className="menu-column">
                <h3 className="text-style">SPA & BIEN-ÊTRE</h3>
                <p className="text-style">Les Massages</p>
                <p className="text-style">Les Hammams</p>
                <p className="text-style">Les Soins</p>
                <p className="text-style">Le Salon de Coiffure & Beauté</p>
                <p className="text-style">Les Sports</p>
              </div>
              <div className="menu-column">
                <h3 className="text-style">RESTAURANTS</h3>
                <p className="text-style">L'Asiatique par Jean-Georges</p>
                <p className="text-style">L'Italien par Jean-Georges</p>
                <p className="text-style">Le Marocain</p>
                <p className="text-style">Le Pavillon de la Piscine</p>
                <p className="text-style">Le Brunch</p>
              </div>
              <div className="menu-column">
                <h3 className="text-style">BARS</h3>
                <p className="text-style">Le Bar Majorelle</p>
                <p className="text-style">Le Club</p>
                <p className="text-style">Le Bar de la Piscine</p>
                <p className="text-style">Le Churchill</p>
              </div>
              <div className="menu-column">
                <h3 className="text-style">SALONS DE THÉ</h3>
                <p className="text-style">Le Menzeh par Pierre Hermé</p>
                <p className="text-style">Le Salon de Thé par Pierre Hermé</p>
              </div>
              <div className="menu-column">
                <h3 className="text-style">EXCLUSIFS</h3>
                <p className="text-style">L'Œnothèque</p>
                <p className="text-style">La Salle de Jeux</p>
              </div>
            </div>
          </div>

          <div className="right-image">
            <div
              style={{
                backgroundImage: 'url()', // Replace with your image path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
              }}
              aria-label="Right-side decor"
            />
          </div>
        </nav>
      </div>

      <div className="navbar-container">
        <div className="nav-links">
          <a href="#langues" className="text-style">FR/EN</a>
          <a href="#Magazine" className="text-style">LE MAGAZINE</a>
          <a href="#Reservations" className="text-style">RÉSERVER</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
