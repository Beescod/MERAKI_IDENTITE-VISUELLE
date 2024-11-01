import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../assets/css/Logo.css';
import LogoImage from '../assets/images/LoagoL.png';
import LogoImage2 from '../assets/images/LoagoL2.png';
import { BackgroundBeamsWithCollision } from "@/app/src/components/ui/background-beams-with-collision";

function Logo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    (<BackgroundBeamsWithCollision>
    <div className={`app-container ${isLoaded ? 'open' : ''}`}>

      <div className="logo-container">
        <Image src={LogoImage} className="logo" alt="Logo" priority />
        <Image
          src={LogoImage2}
          className={`animated-logo ${isLoaded ? 'fade-in' : ''}`}
          alt="Animated Logo"
          priority
        />
      </div>
      <div className="background" />

    </div>
    </BackgroundBeamsWithCollision>)
  );
}

export default Logo;
