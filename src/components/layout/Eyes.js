import React from 'react';
import Radium from 'radium';

import Eye from '../layout/Eye';

function Eyes() {
  return (
    <div style={styles.container}>
      <Eye style={styles.leftEye}></Eye>
      <Eye style={styles.rightEye}></Eye>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  },
}

export default Radium(Eyes);
