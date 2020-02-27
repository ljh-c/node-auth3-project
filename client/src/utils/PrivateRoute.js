import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// if user is authenticated - render component prop; if not, redirect to "/"

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return localStorage.getItem('token') ? <Component {...props} {...rest} /> : 
          <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;