import React, { Component } from 'react';
import Radium from 'radium';
import Intro from './Intro';
import Section from './Section';
import DistressedEye from './DistressedEye';

// Posts
import PostOne from './posts/PostOne';

class Body extends Component {
  render() {
    return (
      <div style={styles.body}>
        <Section>
          <Intro />
        </Section>

        <Section>
          <PostOne />
        </Section>
        <Section>
          <DistressedEye></DistressedEye>
        </Section>

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
