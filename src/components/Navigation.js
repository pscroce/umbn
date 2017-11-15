import React from 'react';
import Radium from 'radium';

function Navigation(props) {
  //'Platform', 'Services', 'Customer Love', 'Who Uses Us', 'About'
  const nav = [];
  return (
    <ul style={styles.list}>
      {nav.map( (item) => {
        return (
          <li
            key={item}
            style={styles.navItem}
            >
              {item}
            </li>
        )
      })}
    </ul>
  )
}

const styles = {
  list: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navItem: {
    listStyle: 'none',
    fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',
  }
}

export default Radium(Navigation);
