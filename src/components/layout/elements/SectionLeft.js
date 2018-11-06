import React from 'react';
import Radium from 'radium';

function SectionLeft(props) {
  return (
    <div style={styles.section}>
      {props.children}
    </div>
  )
}

const styles = {
  section: {
    width: '50%',
    '@media (max-width: 1200px)': { // tablet
      width: '70%',
    },
    '@media (max-width: 992px)': { // tablet
      width: '75%',
    },
    '@media (max-width: 649px)': { // large mobile
      width: '100%',
    },
    '@media (max-width: 480px)': {
      margin: '0 10px 0 10px',
    },
  },
}

export default Radium(SectionLeft);
