// Home.js
"use client"; // Mark this file as a client component

import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar'
import '../assets/css/Home.css';



const Home = () => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Change to false after a period
    }, 8000); // Set loading period to 3 seconds

    return () => clearTimeout(timer);
  }, []);



  return (
    <>
      {loading ? (
        <Logo />
      ) : (
        <div className="selection">
          <Navbar />

        </div>
      )}
    </>
  );
};

export default Home;
