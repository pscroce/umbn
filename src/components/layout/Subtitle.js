import React from 'react';
import Radium from 'radium';

function Subtitle(props) {
  return (
    <h2 style={styles.subtitle}>{props.text}</h2>
  )
}

const styles = {
  subtitle: {
    color: '#eee',
    fontSize: '3em',
    fontFamily: 'Lato-Medium',
    lineHeight: 1.2,
    display: 'block',
    width: '60%',
    // '@media (max-width: 1197px)': { // smaller laptops
    //   fontSize: '9em',
    // },
    '@media (max-width: 992px)': { // tablet
      fontSize: '2em',
      width: '80%',
    },
    '@media (max-width: 649px)': { // large mobile
      fontSize: '1.5em',
      width: '100%',
    },
    // '@media (max-width: 557px)': { // medium mobile
    //   fontSize: '4em',
    // },
    // '@media (max-width: 480px)': { // mobile
    //   fontSize: '2.75em',
    // },
  },
}

export default Radium(Subtitle);
