import React, { useEffect, useState } from 'react';
import '../assets/css/Logo.css';
import LogoImage from '../assets/images/LoagoL.png';
import LogoImage2 from '../assets/images/LoagoL2.png';


function Logo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500); // Duration of the logo transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app-container ${isLoaded ? 'open' : ''}`}>
      <div className="logo-container">
        <img src={LogoImage} className="logo" alt="Logo" />
        <img src={LogoImage2} className={`animated-logo ${isLoaded ? 'fade-in' : ''}`} alt="Animated Logo" />
      </div>
      <div className="background" />
    </div>
  );
}

export default Logo;
