import React from 'react';
import Radium from 'radium';
import logo from '../../imgs/logo.svg';

function Footer(props) {
  return (
    <footer style={styles.footer}>
      <div style={styles.left}>
        <img src={logo} style={styles.logo} alt="React Logo" />
        <h3 style={styles.title}>React Sandbox</h3>
      </div>
      <div style={styles.right}>
      </div>

    </footer>
  )
}

const spinKeyframes = Radium.keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
});
const styles = {
  footer: {
    backgroundColor: '#fff',
    display: 'flex',
    height: 50,
    padding: '0 2rem',
    '@media (max-width: 992px)': {
      padding: '20px',
    },
  },
  title: {
    alignSelf: 'center',
  },
  logo: {
    alignSelf: 'center',
    animation: 'x infinite 20s linear',
    animationName: spinKeyframes,
    display: 'flex',
    height: 30,
  },
  left: {
    display: 'flex',
  },
  right: {
    width: '50%',
  }
}


export default Radium(Footer);
