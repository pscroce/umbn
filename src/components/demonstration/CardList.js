import React from 'react';
import Radium from 'radium';
import CardGithubUser from './CardGithubUser';

const CardList = (props) => {
  const renderGithubUsers = () => {
    if (props.githubUsers) {
      return props.githubUsers.map( githubUser => <CardGithubUser key={githubUser.id} {...githubUser}/>)
    }
  }
  return (
    <div className="container">
      <h1>{props.headline}</h1>
      <div style={styles.CardList}>
      { props.children }
      {renderGithubUsers()}
      </div>
    </div>
  );
}

const styles = {
  CardList: {
    color: '#222',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem',
    marginBottom: '2rem',
    '@media (max-width: 992px)': {
      gridTemplateColumns: '1fr',
    }
  }
}

export default Radium(CardList);
