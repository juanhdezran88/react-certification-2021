import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FavoritesPage from '../../pages/Favorites';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';

const Routes = () => {
  return (
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
      <Private path="/favorites">
        <FavoritesPage />
      </Private>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
