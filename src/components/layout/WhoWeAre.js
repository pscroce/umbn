import React from 'react';
import Radium from 'radium';

import Section from '../layout/elements/Section';
import Subtitle from '../layout/elements/Subtitle';
import Title from '../layout/elements/Title';
import Paragraph from '../layout/elements/Paragraph';
import Label from '../layout/elements/Label';
import Card from '../layout/elements/Card';

import annemarieImg from '../../imgs/annemarie.jpg';
import peterImg from '../../imgs/peter.jpg';

function WhoWeAre() {
  return (
    <div>
      <div style={styles.titleArea}>
        <Section>
          <Title>
            Who We Are
          </Title>
        </Section>
      </div>
      <Section>
        <Card>

          <div style={styles.aboutAnnemarie}>
            <div style={styles.teamMemberName}>
              <Subtitle>
                Annemarie Boss
              </Subtitle>
              <a href="https://linkedin.com/in/annemarieboss1"
                style={styles.linkedinIcon}
                className="icon"
                target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
            <Label>
              Lead Facilitator
            </Label>
            <Paragraph>
              Working with teams and an endless supply of post-it notes is Annemarie's forte. Through a diverse set of techniques for any occasion, she designs and runs effective group sessions that result in actionable next steps using methods such as Design Sprints, Osborn-Parnes Creative Problem Solving, LEGO® Serious Play®, the FourSight® Creative Thinking System, and Improv training.
            </Paragraph>
          </div>

          <div style={styles.annemarieImg}></div>

        </Card>
      </Section>

      <Section>
        <Card>

          <div style={styles.peterImg}></div>

          <div style={styles.aboutPeter}>
            <div style={styles.teamMemberName}>
              <Subtitle>
                Peter Croce
              </Subtitle>
              <a href="https://linkedin.com/in/pscroce"
                style={styles.linkedinIcon}
                className="icon"
                target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
            <Label>
              Product Thinker
            </Label>
            <Paragraph>
              Through facilitation and follow up, Peter guides teams through painful ambiguity to the promised land of functional prototypes, agile iterations, and ultimately to products that create value consistently over time, at the right pace, and with the right side effects. He works with the good people at <a href="https://postlight.com" target="_blank" rel="noopener noreferrer">Postlight</a> in New York City.
            </Paragraph>
          </div>

        </Card>
      </Section>
    </div>
  )
}

// Colors
// const primary = '#65a3d6';
const secondary = '#004787';
// const darkGray = '#1c1c1c';
// const midGray = '#777777';
// const lightGray = '#bcbcbc';
// const backgroundColor = '#eee';

const styles = {
  titleArea: {
    backgroundColor: secondary,
    // clipPath: 'polygon(100% 0, 100% 50%, 61% 75%, 27% 80%, 0 100%, 0 0)',
    clipPath: 'polygon(100% 0, 100% 60%, 61% 85%, 27% 95%, 0 100%, 0 20%)',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: 200,
    paddingTop: 40,
    paddingLeft: 30,

    '@media (max-width: 992px)': { // tablet
      alignItems: 'flex-start',
      minHeight: 170,
      paddingTop: 0,

    },
    '@media (max-width: 649px)': { // mobile medium
      minHeight: 130,
      paddingLeft: 15,

    },
    '@media (max-width: 480px)': { // mobile
      minHeight: 100,
    },
  },
  teamMemberName: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  aboutAnnemarie: {
    width: '50%',
    backgroundColor: secondary,
    padding: 30,
    '@media (max-width: 649px)': { // large mobile
      width: '100%',
      padding: 15,
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
    backgroundColor: secondary,
    padding: 30,
    '@media (max-width: 649px)': { // large mobile
      width: '100%',
      padding: 15,
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
  linkedinIcon: {
    padding: 10,
    paddingBottom: 5,
    height: 44,
    alignItem: 'flex-end',
  }
}

export default Radium(WhoWeAre);
