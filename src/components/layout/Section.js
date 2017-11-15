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
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    backgroundColor: '#fff',
    borderRadius: 3,
    padding: '2rem 5rem 2rem 5rem',
    maxWidth: 800,
    margin: '2rem 0',
    '@media (max-width: 992px)': {
      padding: '20px',
    },
  },
}

export default Radium(Section);
