import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from '../Routes';
import { Themes } from '../../utils/theme';
import AuthProvider from '../../providers/Auth';
import { useGlobal } from '../../providers/Global/Global.provider';

function App() {
  const { state } = useGlobal();
  return (
    <ThemeProvider theme={Themes[state.theme]}>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
