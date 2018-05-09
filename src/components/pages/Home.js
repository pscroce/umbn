import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Section from '../layout/Section';
import Title from '../layout/Title';
import Subtitle from '../layout/Subtitle';
import Footer from '../layout/Footer';
import laughingImg from '../../imgs/laughing.jpg';
import legoImg from '../../imgs/lego.jpg';


function Home() {

  return (
    <div>
      <div style={styles.heroArea}>
        {/* <img
          style={styles.laughingImg}
          src={laughingImg}
          alt="People laughing with LEGO"/> */}
        <Title text='Transform Meetings' style={styles.title} />
        <Subtitle text='We help teams develop creative solutions to diverse challenges using methods such as LEGO® Serious Play.'></Subtitle>

      </div>
      <div style={styles.divider}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Title text="We've done it for these brands and we can do it for you."></Title>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
      <div style={styles.heroArea2}>
        {/* <img
          style={styles.laughingImg}
          src={laughingImg}
          alt="People laughing with LEGO"/> */}
        {/* <Title text='Human-Centered Design Collaborative' style={styles.title} /> */}
      </div>
      <Footer></Footer>
    </div>
  )
}

const styles = {
  heroArea: {
    backgroundImage: `url(${laughingImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100vh',
    '@media (max-width: 480px)': { // mobile

    },
  },
  heroArea2: {
    backgroundImage: `url(${legoImg})`,
    backgroundSize: '100%',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 480px)': { // mobile

    },
  },
  divider: {
    background: '#65a3d6',
  },
  eyeArea: {
    display: 'flex',
    minHeight: '40vh',
    '@media (max-width: 480px)': { // mobile
      minHeight: '30vh',
    },
  },
  leftSide: {
    width: '50%',
    textAlign: 'center',
  },
  rightSide: {
    width: '50%',
    textAlign: 'center',
  },

  // Begin button resets to make eye buttons work.
  buttonResets: {
    backgroundColor: 'transparent',
    display: 'inline-block',
    border: 'none',
    borderRadius: 0,
    height: 'auto',
    minHeight: '100%',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    ':focus': {
      outline: 0,
      margin: 0
    },
    ':active': {
      outline: 0,
      margin: 0
    },
  },
}

export default Radium(Home);
