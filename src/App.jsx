import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
import PrivateRoute from './hoc/PrivateRoute';
import ComponentsList from './styled-components/ComponentsList';
import './App.css';

function App() {
  const DefaultContainer = () => (
    <div>
      <Navbar />
      <PrivateRoute exact path='/projects' component={ProjectPage} />
      <PrivateRoute
        exact
        path='/projects/city/:cityName'
        component={ProjectPage}
      />
      <PrivateRoute exact path='/projects/:id' component={ProjectDetail} />
      <PrivateRoute exact path='/orgs/:orgId' component={OrgDetail} />
      <PrivateRoute exact path='/styled-comps' component={ComponentsList} />
      <PrivateRoute exact path='/myprofile' component={UserProfile} />
      <PrivateRoute exact path='/newproject' component={NewProject} />
    </div>
  );

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={AuthPage} />
        <PrivateRoute exact path='/onboarding' component={Onboarding} />
        <Route component={DefaultContainer} />
      </Switch>
    </div>
  );
}

export default App;
