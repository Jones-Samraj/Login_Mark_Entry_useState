import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import MarksEntry from './MarksEntry';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLoginSuccess = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div className="login-container">
          <Login onLoginSuccess={handleLoginSuccess} />
        </div>
      ) : (
        <div className="mark-entry-container">
          <MarksEntry userName={userName} />
        </div>
      )}
    </div>
  );
}

export default App;
