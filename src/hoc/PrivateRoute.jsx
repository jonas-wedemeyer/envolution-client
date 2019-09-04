import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getToken } from '../redux/reducers/authentication/selector';

export default function PrivateRoute({ component: Component, ...rest }) {
  const isLoggedIn = useSelector(getToken);
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(props) =>
        // eslint-disable-next-line react/jsx-props-no-spreading
        isLoggedIn !== null ? <Component {...props} /> : <Redirect to='/' />
      } // eslint-disable-line
    />
  );
}
