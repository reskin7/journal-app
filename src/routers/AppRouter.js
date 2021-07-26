import React from 'react';
import { useEffect } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { useState } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {
  const dispatch = useDispatch();

  //Flag para revisar el estado de firebase y ver si el usuario
  //esta logeado o no... y asi saber que page mostrar (Si auth o el home)
  const [checking, setChecking] = useState(true);

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLogged(true);
        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLogged(false);
      }

      //TERMINO DE CHEQUEAR CON FIREBASE
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLogged]);

  if (checking) {
    return <h1>Wait....</h1>;
  }
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute
            isLogged={isLogged}
            exact
            path="/"
            component={JournalScreen}
          />
          <PublicRoute
            isLogged={isLogged}
            path="/auth/"
            component={AuthRouter}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
