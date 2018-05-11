import React from 'react';
import Radium from 'radium';

import Section from '../layout/elements/Section';
import Subtitle from '../layout/elements/Subtitle';

import bloominBrandsLogo from '../../imgs/logos/bloomin-brands-logo.png';
import fisLogo from '../../imgs/logos/FIS-logo.png';
import theDaliLogo from '../../imgs/logos/the-dali-logo.png';
import csdaLogo from '../../imgs/logos/csda-logo.png';



function PastClients() {
  return (
    <div style={styles.pastClients}>
      <Section>
          <Subtitle>
            We've done it for them. We can do it for you.
          </Subtitle>
      </Section>
      <Section>
        <div style={styles.logoList}>
          <img style={styles.logoList.logoListItem} src={bloominBrandsLogo} alt="Bloomin' Brands Logo"/>
          <img style={styles.logoList.logoListItem} src={fisLogo} alt="FIS Logo"/>
          <img style={styles.logoList.logoListItem} src={theDaliLogo} alt="The Dali Museum Logo"/>
          <img style={styles.logoList.logoListItem} src={csdaLogo} alt="CSDA Logo"/>

        </div>
      </Section>
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
  pastClients: {
    display: 'flex',
    minHeight: 500,
    alignItems: 'center',
    background: 'linear-gradient(180deg, rgba(101,163,214,1) 0%, rgba(0,71,135,1) 100%)',
    clipPath: 'polygon(100% 0, 100% 50%, 61% 75%, 27% 80%, 0 100%, 0 0)',
    '@media (max-width: 992px)': { // mobile medium
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  logoList: {
    width: '100%',
    minHeight: 300,
    position: 'relative',
    top: -80,
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    '@media (max-width: 992px)': { // mobile medium
      top: 0,
      justifyContent: 'flex-start',
      alignItems: 'center',
      minHeight: 150,
    },
    '@media (max-width: 480px)': { // mobile

    },
    logoListItem: {
      width: '25%',
      margin: '0 12.5%',
      '@media (max-width: 992px)': { // mobile medium
        margin: '0 12.5% 0 0',
      },
    }
  }
}

export default Radium(PastClients);
