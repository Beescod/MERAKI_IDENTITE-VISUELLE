"use client"; // Mark this file as a client component

import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [bgVideo, setBgVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Change to false after a period
    }, 8000); // Set loading period to 8 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleVideoPlay = () => {
    setBgVideo(true);
  };

  return (
    <div className="home-container">
      {loading ? (
        <Logo /> // Show loading screen while loading is true
      ) : (
        <div>
          <div className={`background ${bgVideo ? 'video-bg' : 'image-bg'}`}>
            {!bgVideo ? (
              <img src="../images/LoagoL.png" alt="Background" className="background-image" />
            ) : (
              <video autoPlay muted loop className="background-video">
                <source src="../videos/sample-video.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          <Navbar />
          <div className="overlay">
            <div className="logo-container">
              <button className="play-button" onClick={handleVideoPlay}>Play Video</button>
            </div>
            <div className="services">
              <h2>Le Spa & Bien-être</h2>
              <h2>Les Massages</h2>
              <h2>Les Hammams</h2>
              <h2>Les Soins</h2>
              <h2>Le Salon de Coiffure & Beauté</h2>
              <h2>Les Sports</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
