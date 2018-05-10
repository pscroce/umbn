import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';

import Navigation from './components/layout/Navigation';

import About from './components/pages/About';
import Home from './components/pages/Home';

import './index.css';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div style={styles.app}>
          <Router>
            <div>
              <Navigation />

              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route component={Home} />
              </Switch>
            </div>
          </Router>
        </div>
      </StyleRoot>
    );
  }
}

const styles = {
  app: {
    backgroundColor: '#eee',
    minHeight: '100vh',
    width: '100%',
    overflow: 'hidden',
  }
}

export default Radium(App);
