import React from 'react';
import Radium from 'radium';

import WelcomeHeader from '../layout/WelcomeHeader';
import WhoWeAre from '../layout/WhoWeAre';
import WhatWeDo from '../layout/WhatWeDo';
import Footer from '../layout/Footer';
import Navigation from '../layout/Navigation';

import ReactGA from 'react-ga';

function Home() {
  ReactGA.initialize('UA-131793898-1');
  ReactGA.pageview('/');
  return (
    <div style={[styles.home, styles.background]}>

      <Navigation />

      <WelcomeHeader></WelcomeHeader>

      <WhatWeDo></WhatWeDo>

      <WhoWeAre></WhoWeAre>

      <Footer></Footer>
    </div>
  )
}

// Colors
// const primary = '#65a3d6';
// const secondary = '#004787';
// const darkGray = '#1c1c1c';
// const lightGray = '#bcbcbc';
// const backgroundColor = '#eee';
//
const styles = {
  home: {
    maxWidth: 2000,
    margin: '0 auto',
    position: 'relative',
  },
  background: {
    // backgroundSize: '100%',
    // minHeight: '100vh',
  },

}

export default Radium(Home);
