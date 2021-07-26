import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ isLogged, component: Component, ...rest }) => {
  localStorage.setItem('lastPath', rest.location.pathname);

  return (
    <Route
      {...rest}
      component={() =>
        isLogged ? <Component /> : <Redirect to="/auth/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
