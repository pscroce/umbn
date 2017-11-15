import React from 'react';
import Radium from 'radium';

function OnlineMessage() {
  return (
    <div style={styles.offline}>
      <h2 style={styles.offlineTitle}>You must be offline to view this page.</h2>
      <br/>
      <p style={styles.mobile}>Enable airplane mode to continue.</p>
      <p style={styles.desktop}>Disconnect to continue.</p>
    </div>
  )
}

const styles = {
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

export default Radium(OnlineMessage);
