import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../providers/Auth';
import { useGlobal } from '../../providers/Global/Global.provider';
import './Login.styles.css';

function LoginPage() {
  const { login, isLoading, error } = useAuth();
  const { dispatch, getStorageState } = useGlobal();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => getStorageState(), []);

  async function authenticate(event) {
    event.preventDefault();
    if(username && password){
      const user = await login(username, password);
      if (!error) {
        dispatch({ type: 'SET_USER', payload: user });
        history.push('/secret');
      }
    }
  }

  return (
    <section className="login">
      <h1>Welcome back!</h1>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input
              required
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input
              required
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">login</button>
        {isLoading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </section>
  );
}

export default LoginPage;
