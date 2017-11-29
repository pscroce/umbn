import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Intro from './Intro';
import Section from './Section';
import DistressedEye from './DistressedEye';
import VeryDistressedEye from './VeryDistressedEye';


class Body extends Component {
  render() {
    return (
      <div style={styles.body}>
        {/* <Section>
          <Intro />
        </Section> */}

        <Section>
          <DistressedEye></DistressedEye>
          <VeryDistressedEye />
        </Section>
        {/* <Section>
          <Link to='/how'>But how did you make it?</Link>
        </Section> */}

      </div>
    )
  }
}

const styles = {
  body: {
    paddingBottom: '2rem',
  }
}

export default Radium(Body);
