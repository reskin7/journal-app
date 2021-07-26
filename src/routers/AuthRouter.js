import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { TestScreen } from '../components/auth/TestScreen';

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Switch>
          <Route exact path="/auth/login" component={LoginScreen} />
          <Route exact path="/auth/register" component={RegisterScreen} />
          <Route exact path="/auth/test" component={TestScreen} />
          <Redirect to="/auth/register" />
        </Switch>
      </div>
    </div>
  );
};
