import React from 'react';
import Radium from 'radium';

const CardGithubUser = (props) => {
  return (
    <div style={styles.card}>
      <h2>{props.name}</h2>
      <p>{props.company}</p>
      <div style={styles.person}>
        <a href={props.html_url} target="_blank" title={`${props.name}'s Github`}>
          <img style={styles.img} src={props.avatar_url} alt={`${props.name}'s avatar`}/>
        </a>
        <div style={styles.bio}>{props.bio}</div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '5px solid #222',
    borderRadius: 3,
    padding: '1rem',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  img: {
    display: 'inline',
    width: 75,
  },
  person: {
    display: 'flex',
    flexDirection: 'row',
  },
  bio: {
    marginLeft: 10,
  }
}

export default Radium(CardGithubUser);
