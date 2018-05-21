import React, { Component } from 'react';
import Radium from 'radium';
import Airtable from 'airtable';

import Section from '../elements/Section';
import Title from '../elements/Title';
import Paragraph from '../elements/Paragraph';

var base = new Airtable({apiKey: `${process.env.REACT_APP_AIRTABLE_API_KEY}`}).base('appGdT2hY3InLQ24J');

class EmailSignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      wantsCasePacket: true,
      wantsUpdates: false,
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("buttonSubmitEmailForm").innerHTML = "Submiting...";
    base('Website Email Subscribers').create({
      "Name": `${this.state.name}`,
      "Email": `${this.state.email}`,
      "Wants Case Packet?": `${this.state.wantsCasePacket}`,
      "Wants Updates?": `${this.state.wantsUpdates}`
    }, {typecast: true}, function(err, record) {
        if (err) {
          console.error(err);
          alert("Whoops, there was an error submitting your contact information. Please refresh the page and try again.");
          return;
        } else {
          document.getElementById("buttonSubmitEmailForm").innerHTML = "Submitted!";
        }
        // console.log(record.getId());
    });
    this.setState({
      submitted: true
    });
  };
  render() {
    return (
      <div style={styles.formText}>
        <Title>Request Case Packet</Title>
        <br/>
        <br/>
        <Paragraph>Want to request our case packet? Submit your contact information below and we'll reach out!</Paragraph>
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
          {/* <label>
            Would you like to request the UMBN Case Packet?
            <input
              name="wantsCasePacket"
              type="checkbox"
              checked={this.state.wantsCasePacket}
              onChange={this.handleInputChange} />
          </label> */}
          <label>
            <Paragraph>Want updates? No spam.
              <input
                style={styles.checkbox}
                name="wantsUpdates"
                type="checkbox"
                checked={this.state.wantsUpdates}
                onChange={this.handleInputChange} />
            </Paragraph>

          </label>
          <button type="submit" id="buttonSubmitEmailForm"
            style={this.state.submitted === false ? [styles.buttonUnsubmitted, styles.button, styles.inputAndButton] : [styles.buttonSubmitted, styles.button, styles.inputAndButton]}
            >Submit</button>
        </form>
      </div>
    );
  };
}

// Colors
const primary = '#65a3d6';
const secondary = '#004787';


const styles = {
  formText: {
    backgroundColor: secondary,
    padding: 30,
    '@media (max-width: 649px)': { // large mobile
      width: '100%',
      padding: 15,
    },
  },
  emailSignupForm: {
    margin: '3rem 0',
    display: 'flex',
    flexDirection: 'column',

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
    backgroundColor: '#e5e5e5',
    margin: '1rem 0',
    width: '25%',
    '@media (max-width: 992px)': {
      width: '50%',
    },
    '@media (max-width: 448px)': {
      width: '100%',
    }
  },
  button: {
    color: '#3d3d3d',
    borderRadius: '3px',
    border: '1px solid #e5e5e5',
    textAlign: 'center',
    width: '25%',
    '@media (max-width: 992px)': {
      marginLeft: 0,
      marginTop: '1rem',
      width: '50%',
    },
    '@media (max-width: 448px)': {
      width: '100%',
    },
  },
  buttonUnsubmitted: {
    backgroundColor: '#e5e5e5',
  },
  buttonSubmitted: {
    backgroundColor: primary,
  },
  checkbox: {
    marginLeft: 10,
  }
}

export default Radium(EmailSignupForm);
