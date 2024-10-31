import React, { useEffect, useState } from 'react';
import './App.css';
import LogoImage from './assets/images/LoagoL.png';
import LogoImage2 from './assets/images/LoagoL2.png';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
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


export default App;
