import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ProjectPage, ProjectDetail, OrgDetail, AuthPage } from './containers';
// import { NotFound } from './components';
import ComponentsList from './styled-components/ComponentsList';
import Navbar from './components/Navbar';
import PrivateRoute from './hoc/PrivateRoute';
import './App.css';

function App() {
  const DefaultContainer = () => (
    <div>
      <Navbar />
      <PrivateRoute exact path='' component={ProjectPage} />
      <PrivateRoute exact path='/projects' component={ProjectPage} />
      <PrivateRoute
        exact
        path='/projects/city/:cityName'
        component={ProjectPage}
      />
      <PrivateRoute
        exact
        path='/projects/:projectId'
        component={ProjectDetail}
      />
      <PrivateRoute exact path='/orgs/:orgId' component={OrgDetail} />
      <PrivateRoute exact path='/styled-comps' component={ComponentsList} />
      {/* <Route component={NotFound} /> */}
    </div>
  );

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={AuthPage} />
        <Route component={DefaultContainer} />
      </Switch>
    </div>
  );
}

export default App;
