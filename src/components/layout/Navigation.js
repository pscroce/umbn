import React from 'react';
import Radium from 'radium';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import '../../index.css';

const NavLink = Radium(ReactRouterNavLink); // this isn't working: https://github.com/FormidableLabs/radium/issues/398

function Navigation(props) {
  return (
    <ul style={styles.navItems}>
      <li>
        <NavLink
          style={styles.navItem}
          className="nav-item"
          activeClassName="active"
          exact
          to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={styles.navItem}
          className="nav-item"
          activeClassName="active"
          to='/about'>
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          style={styles.navItem}
          className="nav-item"
          activeClassName="active"
          to='/posts/one'>
          Blog
        </NavLink>
      </li>
    </ul>
  )
}

const styles = {
  navItems: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    borderBottom: '2px dashed rgba(255,255,255,0.2)',
  },
  navItem: {
    display: 'flex',
    alignSelf: 'center',
    textDecoration: 'none',
    margin: 10,
    fontFamily: 'Athletics-Bold, sans-serif',
  },
}

export default Radium(Navigation);
