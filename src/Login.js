import React, { useState } from 'react';

function Login({ onLoginSuccess }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const correctUserId = 'jones';
    const correctPassword = '1234';

    if (userId === correctUserId && password === correctPassword) {
      onLoginSuccess(userId); // Pass the userId to the parent component
    } else {
      setError('Invalid user ID or password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>User ID:</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;
