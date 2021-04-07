import React from 'react';
import { createContext, useContext, useReducer, useEffect } from 'react';

import GlobalReducer from './globalReducer';
import { storage } from '../../utils/storage';
import { INITIAL_STATE, GLOBAL_STORAGE_KEY, FAVORITES_STORAGE_KEY } from '../../utils/constants';

const GlobalContext = createContext({});

function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(`Can't use "useGlobal" without an GlobalProvider!`);
  }
  return context;
}

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(GlobalReducer, INITIAL_STATE);

  useEffect(() => {
    storage.set(GLOBAL_STORAGE_KEY, state);
  }, [state]);

  const getStorageState = () => {
    const storageState = storage.get(GLOBAL_STORAGE_KEY);
    dispatch({ type: 'SET_STATE', payload: storageState || INITIAL_STATE });
  };

  const addFavorite = (video) => {
    const { videoId } = video;
    const { favorites } = state;
    const result = favorites.filter((videoItem) => videoItem.videoId === videoId);
    if (result.length === 0) {
      dispatch({ type: 'SET_FAVORITES', payload: [...favorites, ...[video]] });
    }
  };

  const removeFavorite = (videoId) => {
    const { favorites } = state;
    const result = favorites.filter((video) => video.videoId !== videoId);
    dispatch({ type: 'SET_FAVORITES', payload: result });
  };

  const isInFavorites = (videoId) => {
    const { favorites } = state;
    if (favorites.length === 0) {
      return false;
    }
    const result = favorites.filter((video) => video.videoId === videoId);
    return result.length > 0;
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        getStorageState,
        addFavorite,
        removeFavorite,
        isInFavorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { useGlobal };
export default GlobalProvider;
