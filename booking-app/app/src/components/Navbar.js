import React, { useState } from 'react';
import '../assets/css/Navbar.css'; // Link to the CSS styles

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo or App Name */}
        <div className="logo">Meraki Booking</div>

        {/* Hamburger menu for mobile view */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Main navigation */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#acceuil">Acceuil</a></li>
            <li>
              <a href="#a-propos">A propos</a>
              <ul className="dropdown">
                <li><a href="#notre-philosophie">Notre philosophie</a></li>
                <li><a href="#a-propos-de-meraki">A propos de Meraki</a></li>
                <li><a href="#meraki-team">Meraki Team</a></li>
              </ul>
            </li>
            <li>
              <a href="#our-services">Our Services</a>
              <ul className="dropdown">
                <li><a href="#spa-massage">Spa: Massage et Maderotherapie</a></li>
                <li><a href="#cheveux">Cheveux</a></li>
                <li><a href="#onglerie">Onglerie</a></li>
                <li><a href="#soins-du-visage">Soins du visage</a></li>
                <li><a href="#esthetique">Esthetique: Epilations et Epilations Laser</a></li>
                <li><a href="#nos-packs">Nos packs</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
