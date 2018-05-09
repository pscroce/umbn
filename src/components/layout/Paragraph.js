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
    color: '#3d3d3d',
    fontSize: '1.25em',
    fontFamily: 'Lato-Light',
    margin: '2em 0 0 0',
    '@media (max-width: 480px)': { // mobile
      fontSize: '1.125em',
    },
  },
}

export default Radium(Paragraph);
