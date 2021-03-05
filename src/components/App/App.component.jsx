import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Themes } from '../../utils/theme';
import GlobalContext from '../../utils/globalContext';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';

function App() {
  const [theme, setTheme] = useState("main");
  const [videos, setVideos] = useState([]);

  return (
    <GlobalContext.Provider value={{ theme, setTheme, videos, setVideos }}>
      <ThemeProvider theme={Themes[theme]}>
        <BrowserRouter>
          <AuthProvider>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Private exact path="/secret">
                  <SecretPage />
                </Private>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
              <Fortune />
            </Layout>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
