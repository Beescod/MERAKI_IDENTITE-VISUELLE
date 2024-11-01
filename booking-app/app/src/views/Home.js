// Home.js
"use client"; // Mark this file as a client component

import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo'; // Adjust the import path as necessary

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Change to false after a period
    }, 8000); // Set loading period to 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Logo /> // Show loading screen while loading is true
      ) : (
        <div>
          <h1>hi</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
