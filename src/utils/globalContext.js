import { createContext } from 'react';

const GlobalContext = createContext({
  theme: 'main',
  videos: [],
  setVideos: () => {},
  setTheme: () => {},
});

export default GlobalContext;
