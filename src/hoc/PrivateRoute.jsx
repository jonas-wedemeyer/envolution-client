import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { fetchState } from '../redux/persistState';

const authToken = fetchState();

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(props) =>
        // eslint-disable-next-line react/jsx-props-no-spreading
        authToken ? <Component {...props} /> : <Redirect to='/' />
      } // eslint-disable-line
    />
  );
}
