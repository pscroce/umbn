import React, { Component } from 'react';
import Radium from 'radium';
import Demonstration from './demonstration/Demonstration';
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
          <Demonstration />
        </Section>

      </div>
    )
  }
}

const styles = {

}

export default Radium(Body);
