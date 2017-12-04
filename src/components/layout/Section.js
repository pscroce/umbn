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
    margin: '0 50px',
    padding: '50px 0',
    '@media (max-width: 480px)': {
      margin: '0 15px',
      padding: '50px 0 15px 0',
    },
  },
}

export default Radium(Section);
