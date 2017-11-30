import React from 'react';
import Radium from 'radium';

function Subtitle(props) {
  return (
    <h2 style={styles.subtitle}>{props.text}</h2>
  )
}

const styles = {
  subtitle: {
    color: 'white',
    fontSize: '7em',
    fontFamily: 'Athletics-Bold',
    lineHeight: 1.2,
    margin: 0,
    '@media (max-width: 1197px)': { // smaller laptops
      fontSize: '6em',
    },
    '@media (max-width: 992px)': { // tablet
      fontSize: '4em',
    },
    '@media (max-width: 480px)': { // mobile
      fontSize: '3em',
    },
  },
}

export default Radium(Subtitle);
