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
    margin: '30px 30px 0 30px',
    '@media (max-width: 992px)': {
      margin: '20px 20px 0 20px',
    },
    '@media (max-width: 480px)': {
      margin: '10px 10px 0 10px',
    },
  },
}

export default Radium(Section);
