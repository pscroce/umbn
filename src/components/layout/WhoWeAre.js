import React from 'react';
import Radium from 'radium';

import Section from '../layout/Section';
import Subtitle from '../layout/Subtitle';
import Paragraph from '../layout/Paragraph';

import annemarieImg from '../../imgs/annemarie.jpg';

function WhoWeAre() {
  return (
    <Section>
      <div style={styles.whoWeAre}>
        <div style={styles.whoWeAre.aboutAnnemarie}>
          <Subtitle text="Annemarie Boss"></Subtitle>
          <Paragraph text="Annemarie Boss is a blah blah blah."></Paragraph>
        </div>
        <div style={styles.whoWeAre.annemarie}>
          <img
            style={styles.whoWeAre.annemarieImg}
            src={annemarieImg}
            alt="Annemarie Boss facilitating a group of people building with LEGO."/>
        </div>
      </div>
    </Section>
  )
}

// Colors
const primary = '#65a3d6';
const secondary = '#004787';
const darkGray = '#1c1c1c';
const lightGray = '#bcbcbc';
const backgroundColor = '#eee';

const styles = {
  whoWeAre: {
    display: 'flex',
    '@media (max-width: 480px)': { // mobile
      flexDirection: 'column',
    },
    aboutAnnemarie: {
      width: '100%',
      backgroundColor: lightGray,
      padding: 30,
    },
    annemarie: {

    },
    annemarieImg: {
      width: '100%',
      height: '100%',
    },
  },
}

export default Radium(WhoWeAre);
