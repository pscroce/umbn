import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Eye from '../layout/Eye';
import Label from '../layout/Label';
import Section from '../layout/Section';
import Title from '../layout/Title';
import Form from '../layout/Form';

function Home() {

  return (
    <Section>
      <div style={styles.heroArea}>
        <Title text='Human-Centered Design Collaborative' style={styles.title} />
      </div>
      <div style={styles.eyeArea}>
        <button style={[styles.leftSide, styles.buttonResets]} className='eye-link' id='open-popup'>
          <Eye />
          <Label text='Request a kit' />
        </button>
        <Link to='/about' style={styles.rightSide} className='eye-link'>
          <Eye />
          <Label text='Learn more' />
        </Link>
      </div>
      <Form></Form>
    </Section>
  )
}

const styles = {
  heroArea: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 480px)': { // mobile

    },
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
