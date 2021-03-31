import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { useHistory } from 'react-router';

import { useAuth } from '../../providers/Auth';
import { useGlobal } from '../../providers/Global/Global.provider';
import { Overlay, Login } from './styled';

function LoginPage({ showLogin, onClose }) {
  const { login, isLoading, error } = useAuth();
  const { dispatch, getStorageState } = useGlobal();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => getStorageState(), []);

  if (!showLogin) return null;

  async function authenticate(event) {
    event.preventDefault();
    if(username && password){
      const user = await login(username, password);
      if (user.status) {
        dispatch({ type: 'SET_USER', payload: user });
        history.push('/secret');
      }
    }
  }

  return ReactDom.createPortal(
    <Overlay>
      <Login>
        <h1>Login</h1>
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
          <div className="actions">
            <button type="button" className="ui red button" onClick={onClose}>Cancel</button>
            <button type="submit" className="ui blue button" >Login</button>
          </div>
          {isLoading && <p>Loading...</p>}
          {error && <p className="error-message">{error}</p>}
        </form>
      </Login>
    </Overlay>,
    document.getElementById('login-modal')
  );
}

export default LoginPage;
