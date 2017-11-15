import React, { Component } from 'react';
import Radium from 'radium';
import Intro from './Intro';
import Section from './Section';

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
