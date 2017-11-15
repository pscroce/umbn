import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import ReactRouter, {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';
import Offline from 'react-offline';

import AppContents from './components/AppContents';
import OnlineMessage from './components/OnlineMessage';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div style={styles.app}>
          <Offline
            onChange={({ isOffline, isOnline }) => console.log({ isOffline, isOnline })}
            render={({ isOffline, isOnline }) => {
                return isOffline ? <AppContents /> : <OnlineMessage />;
            }}
          />
        </div>

      </StyleRoot>
    );
  }
}

const styles = {
  app: {
    backgroundColor: '#e2e1e0',
    minHeight: '100vh',
  }
}

export default Radium(App);
