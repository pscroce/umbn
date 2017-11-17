import React from 'react';

import Header from '../layout/Header';
import Section from '../layout/Section';
import Footer from '../layout/Footer';


function How() {
  return (
    <div>
      <Header></Header>
      <Section>
        <h2>How did you make that...</h2>
        <h3>Blinking Eye</h3>
        <p>Peter found <a href="https://codepen.io/Driesketeer/pen/Wjjedv">this awesome</a> SVG animation by @<a href="https://codepen.io/Driesketeer/">Driesketeer</a> on CodePen and edited it very lightly.</p>
        <h3>Distressed Eye</h3>
        <p>Peter found <a href="https://codepen.io/carpenumidium/pen/rmPebP">this awesome</a> CSS animation by @<a href="https://codepen.io/carpenumidium">carpenumidium</a> on CodePen and edited it <a href="https://codepen.io/pscroce/pen/rYYRNY">less lightly</a>.</p>
        <h3>CSS into Radium</h3>
        <p>Peter used <a href="https://github.com/FormidableLabs/css-to-radium">this NPM module CLI utility</a> by <a href="https://github.com/alexlande">Alex Lande</a> at <a href="https://formidable.com/">Formidable Labs</a>.</p>
      </Section>
      <Footer></Footer>
    </div>
  )
}

export default How;
