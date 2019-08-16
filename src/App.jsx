import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ProjectPage, ProjectDetail, OrgDetail, AuthPage } from './containers';
import { NotFound } from './components';
import ComponentsList from './styled-components/ComponentsList';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route exact path='/' component={AuthPage} />
        <Route exact path='/projects' component={ProjectPage} />
        <Route exact path='/projects/city/:cityName' component={ProjectPage} />
        <Route exact path='/projects/:projectId' component={ProjectDetail} />
        <Route exact path='/orgs/:orgId' component={OrgDetail} />
        <Route exact path='/styled-comps' component={ComponentsList} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
