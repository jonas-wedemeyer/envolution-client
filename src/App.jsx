import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  AuthPage,
  NewProject,
  Onboarding,
  OrgDetail,
  ProjectPage,
  ProjectDetail,
  UserProfile,
} from './containers';
import { Navbar } from './components';
import { getToken } from './redux/reducers/authentication/selector';
import PrivateRoute from './hoc/PrivateRoute';
import ComponentsList from './styled-components/ComponentsList';
import './App.css';

function App() {
  const isLoggedIn = useSelector(getToken);

  return (
    <div className='App'>
      {isLoggedIn !== null ? <Navbar /> : null}
      <Switch>
        <Route exact path='/' component={AuthPage} />
        <Route exact path='/styled-comps' component={ComponentsList} />
        <PrivateRoute exact path='/onboarding' component={Onboarding} />
        <PrivateRoute exact path='/projects' component={ProjectPage} />
        <PrivateRoute
          exact
          path='/projects/city/:cityName'
          component={ProjectPage}
        />
        <PrivateRoute exact path='/projects/:id' component={ProjectDetail} />
        <PrivateRoute exact path='/orgs/:orgId' component={OrgDetail} />
        <PrivateRoute exact path='/newproject' component={NewProject} />
        <PrivateRoute exact path='/myprofile' component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;
