// Navbar.js
import Image from 'next/image';
import './nav.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="menu-content">
        <button className="close-button">✕</button>
        <h1 className="logo">LA MAMOUNIA MARRAKECH</h1>
        <div className="menu-items">
          <div className="menu-column">
            <h3>HÉBERGEMENTS</h3>
            <p>Les Chambres</p>
            <p>Les Suites</p>
            <p>Les Suites d'Exception</p>
            <p>Les Riads</p>
          </div>
          <div className="menu-column">
            <h3>SPA & BIEN-ÊTRE</h3>
            <p>Les Massages</p>
            <p>Les Hammams</p>
            <p>Les Soins</p>
            <p>Le Salon de Coiffure & Beauté</p>
            <p>Les Sports</p>
          </div>
          <div className="menu-column">
            <h3>RESTAURANTS</h3>
            <p>L'Asiatique par Jean-Georges</p>
            <p>L'Italien par Jean-Georges</p>
            <p>Le Marocain</p>
            <p>Le Pavillon de la Piscine</p>
            <p>Le Brunch</p>
          </div>
          <div className="menu-column">
            <h3>BARS</h3>
            <p>Le Bar Majorelle</p>
            <p>Le Club</p>
            <p>Le Bar de la Piscine</p>
            <p>Le Churchill</p>
          </div>
          <div className="menu-column">
            <h3>SALONS DE THÉ</h3>
            <p>Le Menzeh par Pierre Hermé</p>
            <p>Le Salon de Thé par Pierre Hermé</p>
          </div>
          <div className="menu-column">
            <h3>EXCLUSIFS</h3>
            <p>L'Œnothèque</p>
            <p>La Salle de Jeux</p>
          </div>
        </div>
      </div>
      <div className="right-image">
        <Image
          src="/image.png" // Adjust the path to your image location if necessary
          alt="Right-side decor"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
