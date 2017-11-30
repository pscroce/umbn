import React from 'react';
import Radium from 'radium';

function Label(props) {
  return (
    <h3 style={styles.label}>{props.text}</h3>
  )
}

const styles = {
  label: {
    color: 'white',
    textAlign: 'center',
    fontSize: '2em',
    fontFamily: 'Athletics-Bold',
    margin: 0,
    '@media (max-width: 480px)': { // mobile
      fontSize: '1.25em',
    },
  },
}

export default Radium(Label);
