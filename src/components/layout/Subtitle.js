import React from 'react';
import Radium from 'radium';

function Subtitle(props) {
  return (
    <h2 style={styles.subtitle}>{props.text}</h2>
  )
}

const styles = {
  subtitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: '2em',
    fontFamily: 'Athletics-Bold',
    '@media (max-width: 480px)': { // mobile
      fontSize: '1.25em',
    },
  },
}

export default Radium(Subtitle);
