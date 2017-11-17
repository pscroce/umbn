import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';

import About from '../pages/About';
import Home from '../pages/Home';
import How from '../pages/How';

function AppContents() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/how' component={How} />
          <Route render={function() {
            return <p>Not Found</p>
          }} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppContents;
