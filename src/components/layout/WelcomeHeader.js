import React from 'react';
import Radium from 'radium';

import Section from '../layout/elements/Section';
import SectionLeft from '../layout/elements/SectionLeft';
import Subtitle from '../layout/elements/Subtitle';
import WebsiteTitle from '../layout/elements/WebsiteTitle';

import laughingImg from '../../imgs/laughing.png';

function WelcomeHeader() {
  return (
    <div>
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
    minHeight: "100vh",
    paddingBottom: 40,
    margin: "0px 0 30px 30px",
    '@media (max-width: 992px)': { // mobile medium
      backgroundPosition: '0% 10%',
      minHeight: 400,
      margin: "0px 0 20px 20px",
    },
    '@media (max-width: 480px)': { // mobile
      backgroundPosition: '0% 5%',
      paddingBottom: 70,
      margin: "0px 0 10px 10px",
    },
  },

}

export default Radium(WelcomeHeader);
