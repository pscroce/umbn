import React from 'react';
import Radium from 'radium';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import '../../index.css';
import wordmark from '../../imgs/umbn-wordmark.png';

const NavLink = Radium(ReactRouterNavLink); // this isn't working: https://github.com/FormidableLabs/radium/issues/398

function Navigation() {
  return (
    <div>
      <img src={wordmark} style={styles.wordmark} alt="UMBN Wordmark"/>
    </div>
  )
}

const styles = {
  wordmark: {
    height: '50px',
    position: 'absolute',
    top: '20px',
    right: '30px',
  },
  hamburgerMenu: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: 30,
    marginRight: 40,
  },
  navItems: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    // borderBottom: '2px dashed rgba(0,0,0,0.2)',
  },
  navItem: {
    display: 'flex',
    alignSelf: 'center',
    textDecoration: 'none',
    margin: 10,
    fontFamily: 'Lato-Medium, sans-serif',
  },
}

export default Radium(Navigation);
