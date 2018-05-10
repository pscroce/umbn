import React from 'react';
import Radium from 'radium';

import Section from '../layout/elements/Section';
import SectionLeft from '../layout/elements/SectionLeft';
import Subtitle from '../layout/elements/Subtitle';
import Title from '../layout/elements/Title';


function PastClients() {
  return (
    <div style={styles.pastClients}>
      <Section>
        <SectionLeft>
          <Title>
            We've done it for them. We can do it for you.
          </Title>
        </SectionLeft>
      </Section>
      {/* <div style={styles.logoList}>
        <img src={bloominBrandsLogo} alt=""/>
        <img src={fisLogo} alt=""/>
        <img src={theDaliLogo} alt=""/>
      </div> */}
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
  pastClients: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 500,
    background: primary,
    clipPath: 'polygon(100% 0, 100% 50%, 61% 75%, 27% 80%, 0 100%, 0 0)',
  },
}

export default Radium(PastClients);
