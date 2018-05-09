import React from 'react';
import Radium from 'radium';

function Title(props) {
  return (
    <h1 style={styles.title}>{props.text}</h1>
  )
}

const styles = {
  title: {
    color: 'white',
    fontSize: '6em',
    fontFamily: 'Lato-Medium',
    textAlign: 'right',
    paddingRight: 30,
    width: '100%',
    display: 'block',
    // '@media (max-width: 1197px)': { // smaller laptops
    //   fontSize: '9em',
    // },
    // '@media (max-width: 992px)': { // tablet
    //   fontSize: '6em',
    // },
    // '@media (max-width: 649px)': { // large mobile
    //   fontSize: '5em',
    // },
    // '@media (max-width: 557px)': { // medium mobile
    //   fontSize: '4em',
    // },
    // '@media (max-width: 480px)': { // mobile
    //   fontSize: '2.75em',
    // },
  },
}

export default Radium(Title);
