import React from 'react';
import Radium from 'radium';

import Section from '../layout/elements/Section';
import Subtitle from '../layout/elements/Subtitle';
import Paragraph from '../layout/elements/Paragraph';

import bloominBrandsLogo from '../../imgs/logos/bloomin-brands-logo.png';
import fisLogo from '../../imgs/logos/fis-logo.png';
import theDaliLogo from '../../imgs/logos/the-dali-logo.png';
import csdaLogo from '../../imgs/logos/csda-logo.png';
import jccLogo from '../../imgs/logos/jcc-logo.png';
import stPeteInnovationDistrictLogo from '../../imgs/logos/st-pete-innovation-district-logo.png';
import collaborativeLabsLogo from '../../imgs/logos/collaborative-labs-logo.png';
import rfmaLogo from '../../imgs/logos/rfma-logo.png';
import dressForSuccessLogo from '../../imgs/logos/dress-for-success-logo.png';
import casaLogo from '../../imgs/logos/casa-logo.png';
import iadrLogo from '../../imgs/logos/iadr-logo.png';
import theSpringLogo from '../../imgs/logos/spring-logo.png';
import bomgarLogo from '../../imgs/logos/bomgar-logo.png';


function PastClients() {
  return (
    <div style={styles.pastClients}>
      <Section>
        <Subtitle>
          We've done it for them. We can do it for you.
        </Subtitle>
        {/* <Paragraph>
          We design meetings that result in clarity, creativity, and action. We
          help teams develop solutions to challenges by involving the human
          perspective in all steps of the problem solving process. The need for
          better meetings and process is universal, as is the creative human
          ability to rise to any challenge.
        </Paragraph> */}
      </Section>
      <Section>
        <div style={styles.logoList}>
          <div style={styles.logoList.logoListItem} >
            <img style={styles.logoList.logoListImg} src={bloominBrandsLogo} alt="Bloomin' Brands Logo"/>
          </div>
          <div style={styles.logoList.logoListItem} >
            <img style={styles.logoList.logoListImg} src={fisLogo} alt="FIS Logo"/>
          </div>
          <div style={styles.logoList.logoListItem} >
            <img style={styles.logoList.logoListImg} src={theDaliLogo} alt="The Dali Museum Logo"/>
          </div>
          <div style={styles.logoList.logoListItem} >
            <img style={styles.logoList.logoListImg} src={csdaLogo} alt="CSDA Logo"/>
          </div>
          <div style={styles.logoList.logoListItem} >
            <img style={styles.logoList.logoListImg} src={jccLogo} alt="JCC Logo"/>
          </div>
          <div style={styles.logoList.logoListItem} >
            <img style={styles.logoList.logoListImg} src={stPeteInnovationDistrictLogo} alt="St Pete Innovation District Logo"/>
          </div>
          <div style={styles.logoList.logoListItem} >
            <img style={styles.logoList.logoListImg} src={collaborativeLabsLogo} alt="Collaborative Labs Logo"/>
          </div>
          <div style={styles.logoList.logoListItem} >
            <img style={styles.logoList.logoListImg} src={theSpringLogo} alt="The Spring of Tampa Bay Logo"/>
          </div>
          <div style={styles.logoList.logoListItem} >
            <img style={styles.logoList.logoListImg} src={rfmaLogo} alt="RFMA Logo"/>
          </div>
          <div style={styles.logoList.logoListItem} >
            <img style={styles.logoList.logoListImg} src={casaLogo} alt="CASA Community Action Stops Abuse Logo"/>
          </div>
          <div style={styles.logoList.logoListItem} >
            <img style={styles.logoList.logoListImg} src={iadrLogo} alt="International Association for Dental Research Logo"/>
          </div>
          <div style={styles.logoList.logoListItem} >
            <img style={styles.logoList.logoListImg} src={dressForSuccessLogo} alt="Dress For Success Logo"/>
          </div>
          <div style={styles.logoList.logoListItem} >
            <img style={styles.logoList.logoListImg} src={bomgarLogo} alt="Bomgar Logo"/>
          </div>

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
    background: 'linear-gradient(180deg, rgba(101,163,214,1) 0%, rgba(0,71,135,1) 100%)',
    // clipPath: 'polygon(100% 0, 100% 50%, 61% 75%, 27% 80%, 0 100%, 0 0)',
    clipPath: 'polygon(100% 0, 100% 60%, 61% 85%, 27% 95%, 0 100%, 0 0)',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 800,
    paddingTop: 40,
    marginBottom: 50,
    '@media (max-width: 992px)': { // tablet
      alignItems: 'flex-start',
      minHeight: 1200,
      paddingTop: 0,

    },
    '@media (max-width: 649px)': { // mobile medium
      minHeight: 1000,
    },
    '@media (max-width: 480px)': { // mobile
      minHeight: 800,
    },
  },
  logoList: {
    width: '100%',
    minHeight: 300,
    position: 'relative',
    // top: -60,
    display: 'flex',
    // justifyContent: 'space-around',
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
      width: '15%',
      height: 90,
      margin: '2.5% 5% 2.5% 0',
      display: 'flex',
      alignItems: 'center',
      '@media (max-width: 992px)': { // mobile medium
        margin: '2.5% 12.5% 2.5% 0',
        width: '35%',
      },
      '@media (max-width: 480px)': { // mobile
        height: 70,
      },
    },
    logoListImg: {
      width: '75%',
    },
  }
}

export default Radium(PastClients);
