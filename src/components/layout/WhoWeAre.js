import React from 'react';
import Radium from 'radium';

import Section from '../layout/Section';
import Subtitle from '../layout/Subtitle';
import Paragraph from '../layout/Paragraph';
import Label from '../layout/Label';

import annemarieImg from '../../imgs/annemarie.jpg';

function WhoWeAre() {
  return (
    <Section>
      <div style={styles.whoWeAre}>
        <div style={styles.whoWeAre.aboutAnnemarie}>
          <Subtitle>
            Annemarie Boss
          </Subtitle>
          <Label>
            Lead Facilitator
          </Label>
          <Paragraph>
            Working with teams and an endless supply of post-it notes is Annemarie's forte. Through a diverse set of techniques for any occasion, she runs effective group sessions that result in actionable next steps.
          </Paragraph>
        </div>

          <div style={styles.whoWeAre.annemarieImg}></div>
          {/* <img
            style={styles.whoWeAre.annemarieImg}
            src={annemarieImg}
            alt="Annemarie Boss facilitating a group of people building with LEGO."/> */}
        <div style={styles.whoWeAre.annemarie}></div>
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
    '@media (max-width: 649px)': { // large mobile
      flexDirection: 'column',
    },
    aboutAnnemarie: {
      width: '50%',
      backgroundColor: lightGray,
      padding: 30,
      '@media (max-width: 649px)': { // large mobile
        width: '100%',
      },
    },
    annemarie: {

    },
    annemarieImg: {
      backgroundImage: `url(${annemarieImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '50%',
      '@media (max-width: 649px)': { // large mobile
        height: 200,
        width: '100%',
      },
    },
  },
}

export default Radium(WhoWeAre);
