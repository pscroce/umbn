import React from 'react';
import Radium from 'radium';

import WelcomeHeader from '../layout/WelcomeHeader';
import PastClients from '../layout/PastClients';
import WhoWeAre from '../layout/WhoWeAre';
import WhatWeDo from '../layout/WhatWeDo';
import Footer from '../layout/Footer';

function Home() {

  return (
    <div>
      <WelcomeHeader></WelcomeHeader>

      <PastClients></PastClients>

      <WhoWeAre></WhoWeAre>

      <WhatWeDo></WhatWeDo>

      <Footer></Footer>
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


}

export default Radium(Home);
