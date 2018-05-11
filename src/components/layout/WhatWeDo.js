import React from 'react';
import Radium from 'radium';

import Section from '../layout/elements/Section';

import legoImg from '../../imgs/lego.jpg';

function WhatWeDo() {
  return (
    <Section>
      <div style={styles.whatWeDo}>
        <div style={styles.showOffLego}>
          <img
            style={styles.legoImg}
            src={legoImg}
            alt="A man's hand holding a completed LEGO Serious Play artifact."/>
        </div>
      </div>
    </Section>
  )
}

// Colors
// const primary = '#65a3d6';
// const secondary = '#004787';
// const darkGray = '#1c1c1c';
// const lightGray = '#bcbcbc';
// const backgroundColor = '#eee';

const styles = {
  showOffLego: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 480px)': { // mobile

    },
  },
  legoImg: {
    width: '100%',
  },
}

export default Radium(WhatWeDo);
