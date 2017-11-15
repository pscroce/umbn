import React, { Component } from 'react';
import Radium from 'radium';
import axios from 'axios';

class Form extends Component {
  state = { userName: '' }
  handleSubmit = (event) => {
    event.preventDefault();
    let request;
    if (this.props.type === "github") {
      request = axios.get(`https://api.github.com/users/${this.state.userName}`)
    }
      request.then(resp => {
        this.props.onSubmit(resp.data);
        this.setState({ userName: '' });
      })
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input type="text"
          style={[styles.input, styles.inputAndButton]}
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="Github username" required/>
        <button type="submit"
          style={[styles.button, styles.inputAndButton]}
          >Add Card</button>
      </form>
    );
  };
}

const styles = {
  // form: {
  //   margin: '3rem 0',
  //   display: 'grid',
  //   gridTemplateColumns: '1fr 1fr 1fr',
  //   gridGap: '1rem',
  //   '@media (max-width: 992px)': {
  //     gridTemplateColumns: '1fr',
  //     margin: 0,
  //   }
  // },
  form: {
    margin: '3rem 0',
    display: 'flex',
    '@media (max-width: 992px)': {
      margin: 0,
      flexDirection: 'column',
    }
  },
  inputAndButton: {
    fontSize: '2em',
    padding: '1rem 1.5rem',
    '@media (max-width: 992px)': {
      padding: '.5rem .57rem',
    }
  },
  input: {
    borderRadius: 3,
    border: '1px solid #222',
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: '#222',
    color: '#fff',
    borderRadius: '3px',
    border: '1px solid #222',
    marginLeft: '1rem',
    textAlign: 'center',
    width: '100%',
    '@media (max-width: 992px)': {
      marginLeft: 0,
      marginTop: '1rem',
    }
  }
}

export default Radium(Form);
