import React from 'react';
import Radium from 'radium';

function Title(props) {
  return (
    <h1 style={styles.title}>{props.text}</h1>
  )
}

const styles = {
  title: {
    color: '#eee',
    fontSize: '6em',
    fontFamily: 'Lato-Medium',
    width: '100%',
    display: 'block',
    // '@media (max-width: 1197px)': { // smaller laptops
    //   fontSize: '9em',
    // },
    '@media (max-width: 992px)': { // tablet
      fontSize: '4em',
      width: '80%',
    },
    '@media (max-width: 649px)': { // large mobile
      fontSize: '2em',
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

export default Radium(Title);
