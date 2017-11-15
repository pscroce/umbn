import React, { Component } from 'react';
import Radium from 'radium';
import Intro from './Intro';
import Section from './Section';

class Body extends Component {
  render() {
    return (
      <div style={styles.body}>
        <Section>
          <Intro />
        </Section>
        <Section>
        </Section>

      </div>
    )
  }
}

const styles = {

}

export default Radium(Body);
