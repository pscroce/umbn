import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import Offline from 'react-offline';

import AppContents from './components/layout/AppContents';
import OnlineMessage from './components/layout/OnlineMessage';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div style={styles.app}>
          <AppContents />
        </div>
      </StyleRoot>
    );
  }
}

const styles = {
  app: {
    backgroundColor: '#e2e1e0',
    color: '#3d3d3d',
    minHeight: '100vh',
  }
}

export default Radium(App);
