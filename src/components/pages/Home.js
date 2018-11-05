import React from 'react';
import Radium from 'radium';

import WelcomeHeader from '../layout/WelcomeHeader';
import PastClients from '../layout/PastClients';
import WhoWeAre from '../layout/WhoWeAre';
import WhatWeDo from '../layout/WhatWeDo';
import Footer from '../layout/Footer';
import Navigation from '../layout/Navigation';


function Home() {

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
const lightGray = '#bcbcbc';
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
    background: 'linear-gradient(290deg, rgba(238,238,238,1) 0%, rgba(101,163,214,1) 75%)',
  },

}

export default Radium(Home);
