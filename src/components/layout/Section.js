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
    margin: 30,
    '@media (max-width: 480px)': {
      margin: '30px 10px',
    },
  },
}

export default Radium(Section);
