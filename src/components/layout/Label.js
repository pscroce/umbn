import React from 'react';
import Radium from 'radium';

function Label(props) {
  return (
    <h3 style={styles.label}>{props.text}</h3>
  )
}

const styles = {
  label: {
    color: '#3d3d3d',
    fontSize: '2em',
    fontFamily: 'Lato-Light',
    margin: 0,
    '@media (max-width: 480px)': { // mobile
      fontSize: '1.25em',
    },
  },
}

export default Radium(Label);
