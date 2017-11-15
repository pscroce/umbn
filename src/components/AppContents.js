import React, { Component } from 'react';
import ReactRouter, {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';

function AppContents() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route render={function() {
            return <p>Not Found</p>
          }} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppContents;
