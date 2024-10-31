// SplashScreen.js
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './SplashScreen.css';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000); // Duration for the splash screen, adjust as needed
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <div className="splash-background"></div>
      <img src={logo} className="splash-logo" alt="logo" />
    </div>
  );
};

export default SplashScreen;
