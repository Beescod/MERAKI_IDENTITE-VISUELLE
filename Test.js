"use client"; // Mark this file as a client component

import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import '../assets/css/Home.css';
import MobileBooking from '../components/MobileBooking';
import Laser from '../assets/images/Laser.jpg';
import LoagoL from '../assets/images/LoagoL.png';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Set loading timer and cleanup scroll event listener
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 8000);
    const handleScroll = () => setIsScrolled(window.scrollY > 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Logo />
      ) : (
        <div className="selection">
          <Navbar className={isScrolled ? 'scrolled' : ''} />

          <section className={isScrolled ? 'scrolled' : ''}>
            <div className="spa-section-in">
              <div className="spa-section-logo">
                <a href="/">
                  <Image
                    src={LoagoL}
                    alt="Dynamic"
                    layout="intrinsic"
                    width={400}
                    height={200}
                    className={isScrolled ? 'logo-pop-out' : ''}
                  />
                </a>
              </div>
              <h2>The Spa & Wellbeing</h2>
              <div className="divider"></div>
              <nav className="spa-nav">
                <a href="#massages">The Massages</a>
                <a href="#hammams">The Hammams</a>
                <a href="#treatments">The Treatments</a>
                <a href="#salon">The Hairdressing Salon</a>
                <a href="#sports">The Sports</a>
              </nav>
            </div>
          </section>

          <section className="mamounia-section">
            <div className="mamounia-image">
              <Image src={Laser} alt="Dynamic" layout="responsive" width={400} />
            </div>
            <div className="mamounia-content">
              <h2>Relax and unwind: beauty and wellbeing at La Mamounia Spa</h2>
              <p>
                <em>Extending over 2,500 m², La Mamounia Spa is an extraordinary experience to be relished in its lavish Arabian Nights setting.</em>
              </p>
              <p>From the beauty of the surroundings to the harmony and tranquility they exude, everything at La Mamounia is an invitation to soak up the moment.</p>
            </div>
          </section>

          <MobileBooking />
        </div>
      )}
    </>
  );
};

export default Home;
























import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import '../assets/css/Home.css';
import MobileBooking from '../components/MobileBooking';
import Laser from '../assets/images/Laser.jpg';
import LoagoL from '../assets/images/LoagoL.png';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [scrolling, setScrolling] = useState(false); // State to track scroll position

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000);

    // Handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 50) { // When user scrolls more than 50px
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {loading ? (
        <Logo />
      ) : (
        <div className="selection">
          {/* Add scrolling class to Navbar based on state */}
          <Navbar scrolling={scrolling} />
          <section className="spa-section">
            <div className="spa-section-in">
              <div className="spa-section-logo">
                <a href="/">
                  <Image src={LoagoL} alt="Dynamic" layout="intrinsic" width={400} height={200} />
                </a>
              </div>

              <h2>The Spa & Wellbeing</h2>
              <div className="divider"></div>
              <nav className="spa-nav">
                <a href="#massages">The Massages</a>
                <a href="#hammams">The Hammams</a>
                <a href="#treatments">The Treatments</a>
                <a href="#salon">The Hairdressing Salon</a>
                <a href="#sports">The Sports</a>
              </nav>
            </div>
          </section>
          <section className="mamounia-section">
            <div className="mamounia-image">
              <Image src={Laser} alt="Dynamic" layout="responsive" width={400} />
            </div>
            <div className="mamounia-content">
              <h2>Relax and unwind: beauty and wellbeing at La Mamounia Spa</h2>
              <p>
                <em>Extending over 2,500 m², La Mamounia Spa is an extraordinary experience to be relished in its lavish Arabian Nights setting.</em>
              </p>
              <p>From the beauty of the surroundings to the harmony and tranquility they exude, everything at La Mamounia is an invitation to soak up the moment.</p>
            </div>
          </section>
          <MobileBooking />
        </div>
      )}
    </>
  );
};

export default Home;
