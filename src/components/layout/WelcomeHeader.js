import React from 'react';
import Radium from 'radium';

import Section from '../layout/elements/Section';
import SectionLeft from '../layout/elements/SectionLeft';
import Subtitle from '../layout/elements/Subtitle';
import WebsiteTitle from '../layout/elements/WebsiteTitle';

import laughingImg from '../../imgs/laughing.png';

function WelcomeHeader() {
  return (
    <div style={styles.background}>
      <div style={styles.welcomeHeader}>
      <Section>
        <SectionLeft>
          <WebsiteTitle>
            Transform Meetings
          </WebsiteTitle>

          <Subtitle>
            We use play to accelerate creative problem-solving and bring teams together.
          </Subtitle>
          <br/>
        </SectionLeft>
      </Section>
      </div>
    </div>
  )
}

// Colors
// const primary = '#65a3d6';
// const secondary = '#004787';
// const darkGray = '#1c1c1c';
// const lightGray = '#bcbcbc';
// const backgroundColor = '#eee';

const styles = {
  welcomeHeader: {
    backgroundImage: `url(${laughingImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    minHeight: 800,
    paddingBottom: 40,
    '@media (max-width: 992px)': { // mobile medium
      backgroundPosition: '0% 10%',
      minHeight: 400,
    },
    '@media (max-width: 480px)': { // mobile
      backgroundPosition: '0% 5%',
      paddingBottom: 70,
    },
  },
  background: {
    // backgroundSize: '100%',
    // minHeight: '100vh',
    background: 'linear-gradient(180deg, rgba(238,238,238,1) 0%, rgba(101,163,214,1) 75%)',
  },
}

export default Radium(WelcomeHeader);
