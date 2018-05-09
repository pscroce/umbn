import React from 'react';
import Radium from 'radium';
import Hamburger from 'react-hamburger-menu';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import '../../index.css';
import wordmark from '../../imgs/umbn-wordmark.png';

const NavLink = Radium(ReactRouterNavLink);

class HamburgerMenu extends React.Component {
  constructor() {
    super();
  }
  handleClick() {
      this.setState({
          open: !this.state.open
      });
  }
  render() {
    return (
      <div>
        <img src={wordmark} style={styles.wordmark} alt="UMBN Wordmark"/>
        <div style={styles.hamburgerMenu}>
          <Hamburger
            isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            width={45}
            height={30}
            strokeWidth={3.5}
            rotate={0}
            color='black'
            borderRadius={20}
            animationDuration={0.5}
          />
        </div>


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
              Why
            </NavLink>
          </li>
          <li>
            <NavLink
              style={styles.navItem}
              className="nav-item"
              activeClassName="active"
              to='/posts/one'>
              Story
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

const styles = {
  wordmark: {
    height: '50px',
    position: 'absolute',
    top: '30px',
    left: '40px',
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
    fontFamily: 'Athletics-Bold, sans-serif',
  },
}

export default Radium(HamburgerMenu);
