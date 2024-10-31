// App.js
import React, { useState } from 'react';
import logo from './';
import SplashScreen from './components/SplashScreen';
// import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Learn React
        </header>
      )}
    </div>
  );
}

export default App;
