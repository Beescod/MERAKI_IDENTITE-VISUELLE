"use client"; // Mark this file as a client component

import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import '../assets/css/Home.css';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Change to false after a period
    }, 8000); // Set loading period to 8 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Logo />
      ) : (
        <div className="selection">
          <Navbar />
          <section className="spa-section">
            <div className="spa-section-in">
            <div className="spa-section-logo"></div>
            <h2>The Spa & Wellbeing</h2>
            <nav className="spa-nav">
              <a href="#massages">The Massages</a>
              <a href="#hammams">The Hammams</a>
              <a href="#treatments">The Treatments</a>
              <a href="#salon">The Hairdressing Salon</a>
              <a href="#sports">The Sports</a>
            </nav>
            </div>
          </section>
          {/* <section className="mamounia-section">
            <div className="mamounia-image">
              <img src="../images/indoor-pool.png" alt="La Mamounia Spa Pool" />
            </div>
            <div className="mamounia-content">
              <h2>Relax and unwind: beauty and wellbeing at La Mamounia Spa</h2>
              <p>
                <em>Extending over 2,500 m², La Mamounia Spa is an extraordinary experience to be relished in its lavish Arabian Nights setting.</em>
              </p>
              <p>From the beauty of the surroundings to the harmony and tranquility they exude, everything at La Mamounia is an invitation to soak up the moment.</p>
            </div>
          </section> */}
        </div>
      )}
    </>
  );
};

export default Home;
