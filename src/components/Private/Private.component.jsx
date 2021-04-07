import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';

function Private({ children, ...rest }) {
  const { authenticated } = useAuth();

  return (
    <Route data-testid="private-route" {...rest} render={() => (authenticated ? children : <Redirect to="/" />)} />
  );
}

export default Private;
