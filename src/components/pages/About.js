import React from 'react';
import Radium from 'radium';

import Paragraph from '../layout/Paragraph';
import Section from '../layout/Section';
import Subtitle from '../layout/Subtitle';

function About() {
  return (
    <Section>
      <Subtitle text='They say absence makes the heart grow stronger'></Subtitle>
      <div style={styles.textArea}>
        <Paragraph>
          And maybe it will.
        </Paragraph>
      </div>
    </Section>
  )
}

const styles = {
  textArea: {
    marginLeft: 'auto',
    maxWidth: 600,
  }
}

export default Radium(About);
