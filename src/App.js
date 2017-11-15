import React, { Component } from 'react';
import Radium from 'radium';
import Offline from 'react-offline';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import { StyleRoot } from 'radium';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div style={styles.app}>
          <Header />
          <Offline
            onChange={({ isOffline, isOnline }) =>
                console.log({ isOffline, isOnline })}
            render={({ isOffline, isOnline }) => {
                return isOffline ? <div><Body /><Footer /></div> : <div style={styles.offline}><h2 style={styles.offlineTitle}>You must be offline to view this page.</h2><br/><p style={styles.desktop}>Disconnect to continue.</p></div>;
            }}
          />

        </div>
      </StyleRoot>
    );
  }
}
// <p style={styles.mobile}>Enable airplane mode to continue.</p>
const styles = {
  app: {
    backgroundColor: '#e2e1e0',
    minHeight: '100vh',
  },
  offline: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 20px',
    width: '100%',
  },
  offlineTitle: {
    alignSelf: 'center',
    display: 'flex',
    flex: '1',
    marginTop: '30vh',
    textAlign: 'center',
  },
  mobile: {
    '@media (min-width: 993px)': {
      display: 'none',
    },
  },
  desktop: {
    '@media (max-width: 993px)': {
      display: 'none',
    },
  }
}

export default Radium(App);
