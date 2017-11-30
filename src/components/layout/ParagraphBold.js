import React from 'react';
import Radium from 'radium';

function ParagraphBold(props) {
  return (
    <p style={styles.paragraphBold}>
      {props.children}
    </p>
  )
}

const styles = {
  paragraphBold: {
    color: 'white',
    fontSize: '2em',
    fontFamily: 'Athletics-Bold',
    margin: '2em 0 0 0',
    '@media (max-width: 480px)': { // mobile
      fontSize: '1em',
    },
  },
}

export default Radium(ParagraphBold);
