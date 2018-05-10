import React from 'react';
import Radium from 'radium';

import Section from '../layout/Section';
import SectionLeft from '../layout/SectionLeft';
import Subtitle from '../layout/Subtitle';
import Title from '../layout/Title';

import laughingImg from '../../imgs/laughing.png';

function WelcomeHeader() {
  return (
    <div style={styles.background}>
      <div style={styles.welcomeHeader}>
      <Section>
        <SectionLeft>
          <Title style={styles.title}>
            Transform Meetings
          </Title>

          <Subtitle>
            We know play is key to productive and creative business. And we know how to get there.
          </Subtitle>

        </SectionLeft>
      </Section>
      </div>
    </div>
  )
}

// Colors
const primary = '#65a3d6';
const secondary = '#004787';
const darkGray = '#1c1c1c';
const lightGray = '#bcbcbc';
const backgroundColor = '#eee';

const styles = {
  welcomeHeader: {
    backgroundImage: `url(${laughingImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    minHeight: '100vh',
    '@media (max-width: 992px)': { // mobile medium
      backgroundPosition: '0% 10%',
    },
    '@media (max-width: 480px)': { // mobile
      backgroundPosition: '0% 20%',
    },
  },
  background: {
    backgroundSize: '100%',
    minHeight: '100vh',
    background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(101,163,214,1) 100%)',
  },
}

export default Radium(WelcomeHeader);
