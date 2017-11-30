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
    fontSize: '12em',
    fontFamily: 'Athletics-Bold',
    '@media (max-width: 1197px)': { // smaller laptops
      fontSize: '9em',
    },
    '@media (max-width: 992px)': { // tablet
      fontSize: '6em',
    },
    '@media (max-width: 480px)': { // mobile
      fontSize: '3em',
    },
  },
}

export default Radium(Title);
