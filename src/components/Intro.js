import React from 'react';
import Radium from 'radium';

function Intro() {
  return (
    <div style={styles.container}>
      <div style={styles.titleArea}>
        <h1 style={styles.title}>About the build</h1>
      </div>
      <ul style={styles.list}>
        <li>Bundled with Webpack and Babel</li>
        <li>Optimized for performance with a service worker *</li>
        <li>Styled with <a href="https://github.com/FormidableLabs/radium" target="_blank" rel="noopener noreferrer">Radium</a>, an excellent open source tool for styling React components</li>
        <li>Responsive design. Open on your phone to see: <a href="http://bit.ly/cbidemo" target="_blank" rel="noopener noreferrer">bit.ly/cbidemo</a></li>
      </ul>
      <p>* In production, we register a service worker to serve assets from a local cache. This lets the app load faster on subsequent visits and gives it offline capabilities that look and feel like a native app. For example, if someone is on the metro and loses connectivity while using this web app, the page would not disconnect and they could even still interact with it.</p>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  titleArea: {
    display: 'flex',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
}

export default Radium(Intro);
