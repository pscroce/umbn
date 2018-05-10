import React from 'react';
import Radium from 'radium';

import Section from '../layout/elements/Section';
import Subtitle from '../layout/elements/Subtitle';
import Paragraph from '../layout/elements/Paragraph';
import Label from '../layout/elements/Label';

import annemarieImg from '../../imgs/annemarie.jpg';
import peterImg from '../../imgs/peter.jpg';

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
            Working with teams and an endless supply of post-it notes is Annemarie's forte. Through a diverse set of techniques for any occasion, she designs and runs effective group sessions that result in actionable next steps using methods such as Human Centered Design sprints, Osborn-Parnes Creative Problem Solving, LEGO® Serious Play®, the FourSight® Creative Thinking System, and Improv training.
          </Paragraph>
        </div>

        <div style={styles.whoWeAre.annemarieImg}></div>

      </div>

      <div style={styles.whoWeAre}>

        <div style={styles.whoWeAre.peterImg}></div>

        <div style={styles.whoWeAre.aboutPeter}>
          <Subtitle>
            Peter Croce
          </Subtitle>
          <Label>
            Product Consultant & Facilitator
          </Label>
          <Paragraph>
            A people-oriented product manager and former front-end developer (React, node, others), Peter is driven to use the internet to get people off the internet. Through facilitation and follow up, he guides teams through painful ambiguity to the promised land of functional prototypes, agile iterations, and ultimately to products that create value consistently over time, at the right pace, and with the right side effects.
          </Paragraph>
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
    aboutPeter: {
      width: '50%',
      backgroundColor: lightGray,
      padding: 30,
      '@media (max-width: 649px)': { // large mobile
        width: '100%',
      },
    },
    peterImg: {
      backgroundImage: `url(${peterImg})`,
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
