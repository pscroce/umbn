import React, { Component } from 'react';
import CardList from './CardList';
import DemonstrationIntro from './DemonstrationIntro';
import Form from './Form';

class Demonstration extends Component {
  state = {
    githubUsers: [
      { "id": 8445,
        "name": "Paul O’Shannessy",
        "avatar_url": "https://avatars1.githubusercontent.com/u/8445?v=4",
        "company": "Facebook",
        "bio": "I do open source things at @facebook.",
        "html_url": "https://github.com/zpao",
      }
    ]
  }
  addNewGithubCard = (cardInfo) => {
    this.setState(prevState => ({
      githubUsers: prevState.githubUsers.concat(cardInfo)
    }));
  }
  render() {
    return (
      <div>
        <DemonstrationIntro />
        <Form type="github" onSubmit={this.addNewGithubCard} />
        <CardList githubUsers={this.state.githubUsers} />
      </div>
    )
  }
}

export default Demonstration;
