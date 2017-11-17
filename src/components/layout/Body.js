import React, { Component } from 'react';
import Radium from 'radium';
import Intro from './Intro';
import Section from './Section';
import DistressedEye from './DistressedEye';
import { Link } from 'react-router-dom';

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
        <Section>
          <Link to='/how' >But how did you make it?</Link>
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
