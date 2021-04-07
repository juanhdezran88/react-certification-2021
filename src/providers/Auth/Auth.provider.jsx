import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
import loginApi from './loginApi';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const storageAuthState = storage.get(AUTH_STORAGE_KEY);
  const [authenticated, setAuthenticated] = useState(Boolean(storageAuthState) || false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);
    setAuthenticated(isAuthenticated);
  }, []);

  const login = useCallback((username, password) => {
    setIsLoading(true);
    return loginApi(username, password)
      .then((data) => {
        setError('');
        setIsLoading(false);
        setAuthenticated(true);
        storage.set(AUTH_STORAGE_KEY, true);
        return { status: true, data };
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
        return { status: false, message: error.message };
      });
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
