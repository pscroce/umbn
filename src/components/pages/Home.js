import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Eye from '../layout/Eye';
import Label from '../layout/Label';
import Section from '../layout/Section';
import Title from '../layout/Title';

function Home() {
  return (
    <Section>
      <div style={styles.titleArea}>
        <Title text='Take a break'></Title>
      </div>
      <div style={styles.eyeArea}>
        <div style={styles.leftSide} className='eye-link'>
          <Eye></Eye>
          <Label text='Request a kit' style={styles.subtitle}></Label>
        </div>
        <Link to='/about' style={styles.rightSide} className='eye-link'>
          <Eye></Eye>
          <Label text='Learn more' style={styles.subtitle}></Label>
        </Link>
      </div>
    </Section>
  )
}

const styles = {
  titleArea: {
    minHeight: '40vh',
    display: 'flex',
    alignItems: 'center',
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
  },
  rightSide: {
    width: '50%',
  },
}

export default Radium(Home);
