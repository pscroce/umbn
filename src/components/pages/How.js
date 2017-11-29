import React from 'react';

import Section from '../layout/Section';


function How() {
  return (
    <div>
      <Section>
        <h2>How did you make that...</h2>
        <h3>Blinking Eye</h3>
        <p>We found <a href="https://codepen.io/Driesketeer/pen/Wjjedv">this awesome</a> SVG animation by @<a href="https://codepen.io/Driesketeer/">Driesketeer</a> on CodePen and edited it very lightly.</p>
        <h3>Distressed Eye</h3>
        <p>We found <a href="https://codepen.io/carpenumidium/pen/rmPebP">this awesome</a> CSS animation by @<a href="https://codepen.io/carpenumidium">carpenumidium</a> on CodePen and edited it <a href="https://codepen.io/pscroce/pen/rYYRNY">less lightly</a>.</p>
        <h3>CSS into Radium</h3>
        <p>We used <a href="https://github.com/FormidableLabs/css-to-radium">this npm CLI utility</a> by <a href="https://github.com/alexlande">Alex Lande</a> at <a href="https://formidable.com/">Formidable Labs</a>.</p>
        <h3>Those footnotes that pop open</h3>
        <p>We used <a href="https://www.npmjs.com/package/littlefoot">littlefoot</a>, a fork of Chris Sauve's <a href="https://github.com/lemonmade/bigfoot/">Bigfoot.js</a>.</p>
      </Section>
    </div>
  )
}

export default How;
