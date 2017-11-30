import React from 'react';
import Radium from 'radium';

function Section(props) {
  return (
    <div style={styles.section}>
      {props.children}
    </div>
  )
}

const styles = {
  section: {
    minHeight: '100vh',
    margin: '0 50px',
    '@media (max-width: 480px)': {
      margin: '0 15px',
    },
  },
}

export default Radium(Section);
