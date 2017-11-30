import React from 'react';
import Radium from 'radium';

function Paragraph(props) {
  return (
    <p style={styles.paragraph}>
      {props.children}
    </p>
  )
}

const styles = {
  paragraph: {
    color: 'white',
    fontSize: '2em',
    fontFamily: 'Athletics-Regular',
    fontWeight: 100,
    margin: '20px 0 0 0',
    '@media (max-width: 480px)': { // mobile
      fontSize: '1em',
    },
  },
}

export default Radium(Paragraph);
