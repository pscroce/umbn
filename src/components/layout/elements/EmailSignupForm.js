import React, { Component } from 'react';
import Radium from 'radium';
import axios from 'axios';
import Airtable from 'airtable';

var base = new Airtable({apiKey: `${process.env.REACT_APP_AIRTABLE_API_KEY}`}).base('appGdT2hY3InLQ24J');

// base('Website Email Subscribers').create({
//   "Name": `${this.state.name}`,
//   "Email": `${this.state.email}`,
//   "Interested in...": {this.state.interestedIn}
// }, function(err, record) {
//     if (err) { console.error(err); return; }
//     console.log(record.getId());
// });

// w/ interestedIn
// state = { name: '',
//           email: '',
//           interestedIn: [] }
// handleSubmit = (event) => {
//   event.preventDefault();
//   base('Website Email Subscribers').create({
//     "Name": `${this.state.name}`,
//     "Email": `${this.state.email}`,
//     "Interested in...": {this.state.interestedIn}
//   }, function(err, record) {
//       if (err) { console.error(err); return; }
//       console.log(record.getId());
//   });
// };

class EmailSignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      wantsCasePacket: false,
      wantsToolkit: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    base('Website Email Subscribers').create({
      "Name": `${this.state.name}`,
      "Email": `${this.state.email}`,
      "Wants Case Packet?": `${this.state.wantsCasePacket}`,
      "Wants Toolkit?": `${this.state.wantsToolkit}`
    }, {typecast: true}, function(err, record) {
        if (err) { console.error(err); return; }
        console.log(record.getId());
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.emailSignupForm}>
        <label htmlFor="Full name">
          <input type="text"
            style={[styles.input, styles.inputAndButton]}
            value={this.state.name}
            onChange={(event) => this.setState({ name: event.target.value })}
            placeholder="Full name" required/>
        </label>
        <label htmlFor="Email">
          <input type="email"
            style={[styles.input, styles.inputAndButton]}
            value={this.state.email}
            onChange={(event) => this.setState({ email: event.target.value })}
            placeholder="Email" required/>
        </label>
        <label>
          Would you like to request the UMBN Case Packet?
          <input
            name="wantsCasePacket"
            type="checkbox"
            checked={this.state.wantsCasePacket}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Would you like to request the UMBN Toolkit?
          <input
            name="wantsToolkit"
            type="checkbox"
            checked={this.state.wantsToolkit}
            onChange={this.handleInputChange} />
        </label>
        <button type="submit"
          style={[styles.button, styles.inputAndButton]}
          >Submit</button>
      </form>
    );
  };
}

const styles = {
  // emailSignupForm: {
  //   margin: '3rem 0',
  //   display: 'grid',
  //   gridTemplateColumns: '1fr 1fr 1fr',
  //   gridGap: '1rem',
  //   '@media (max-width: 992px)': {
  //     gridTemplateColumns: '1fr',
  //     margin: 0,
  //   }
  // },
  emailSignupForm: {
    margin: '3rem 0',
    display: 'flex',
    '@media (max-width: 992px)': {
      margin: 0,
      flexDirection: 'column',
    }
  },
  inputAndButton: {
    fontSize: '2em',
    padding: '0.5rem 0.75rem',
    '@media (max-width: 992px)': {
      padding: '.5rem .57rem',
    }
  },
  input: {
    borderRadius: 3,
    border: '1px solid #222',
    backgroundColor: 'transparent',
    '@media (max-width: 992px)': {
      marginTop: '1rem',
    }
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

export default Radium(EmailSignupForm);
