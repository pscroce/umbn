import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Section from '../layout/Section';
import Title from '../layout/Title';
import Subtitle from '../layout/Subtitle';
import Footer from '../layout/Footer';
import laughingImg from '../../imgs/laughing.png';
import legoImg from '../../imgs/lego.jpg';
import bloominBrandsLogo from '../../imgs/bloomin-brands-logo.jpg';
import fisLogo from '../../imgs/FIS-logo.jpg';
import theDaliLogo from '../../imgs/the-dali-logo.gif';




function Home() {

  return (
    <div>
      <div style={styles.background}>
        <div style={styles.heroArea}>
        <Section>
          <Title text='Transform Meetings' style={styles.title} />

          <Subtitle text='We know play is key to productive and creative business. And we know how to get there.'></Subtitle>

        </Section>
        </div>
      </div>

      <div style={styles.divider}>
        {/* <div style={styles.logoList}>
          <img src={bloominBrandsLogo} alt=""/>
          <img src={fisLogo} alt=""/>
          <img src={theDaliLogo} alt=""/>
        </div> */}
        <br/>
        <br/>
        <br/>
        <Section>
          <Title text="We've done it for these brands and we can do it for you."></Title>
        </Section>

        <br/>
        <br/>
      </div>
      <div style={styles.heroArea2}>
        <img
          style={styles.legoImg}
          src={legoImg}
          alt="LEGO Serious Play complete"/>
      </div>
      <Section>
        <Footer></Footer>
      </Section>
    </div>
  )
}

const styles = {
  heroArea: {
    backgroundImage: `url(${laughingImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    // clipPath: 'polygon(100% 0, 100% 80%, 0 100%, 0 20%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    minHeight: '100vh',
    '@media (max-width: 992px)': { // mobile medium
      backgroundPosition: '0% 20%',
    },
  },
  background: {
    backgroundSize: '100%',
    minHeight: '100vh',
    '@media (max-width: 992px)': { // mobile
      background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(101,163,214,1) 100%)',
    },
  },
  heroArea2: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 480px)': { // mobile

    },
  },
  legoImg: {
    width: '100%',
  },
  divider: {
    minHeight: 600,
    background: 'rgb(101, 163, 214)',
    clipPath: 'polygon(100% 0%, 100% 54%, 71% 75%, 30% 79%, 0 100%, 0 0)',
    // position: 'relative',
    // top: -50,
    '@media (max-width: 992)': { // tablet
      clipPath: 'polygon(100% 0%, 100% 54%, 71% 75%, 30% 79%, 0 100%, 0 0)',
      top: 0,
    },
  },

}

export default Radium(Home);
