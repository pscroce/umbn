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
    base('People Who Requested a Case Packet').create({
      "Name": `${this.state.name}`,
      "Email": `${this.state.email}`,
      "Wants Case Packet?": `${this.state.wantsCasePacket}`,
      "Who is contacting them?": "annemarie@umbn.co"
    }, {typecast: true}, function(err, record) {
        if (err) {
          console.error(err);
          alert("There was an error submitting your contact information. Please refresh the page and try again. If this keeps happening, email hello@umbn.co for help.");
          return;
        } else {
          document.getElementById("buttonSubmitEmailForm").innerHTML = "Submitted ✓";
        }
        // console.log(record.getId());
    });
    this.setState({
      name: '',
      email: '',
      submitted: true
    });
  };
  render() {
    return (
      <div style={styles.formWrapper}>
        <Title>Request Case Packet</Title>
        <br/>
        <Paragraph>If you would like to request a case packet, we will personally contact you.</Paragraph>
        <br/>
        <form onSubmit={this.handleSubmit} style={styles.emailSignupForm}>
          <label htmlFor="Full name" style={styles.label}>
            <input type="text"
              style={[styles.input, styles.inputAndButton]}
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
              placeholder="Full name" required/>
          </label>
          <label htmlFor="Email" style={styles.label}>
            <input type="email"
              style={[styles.input, styles.inputAndButton]}
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
              placeholder="Email" required/>
          </label>
          {/* <label style={styles.label}>
            <Paragraph>
              Would you like to request the UMBN Case Packet?
              <input
                name="wantsCasePacket"
                type="checkbox"
                checked={this.state.wantsCasePacket}
                onChange={this.handleInputChange} />
            </Paragraph>
          </label> */}
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
  formWrapper: {
    backgroundColor: secondary,
    padding: 30,

    '@media (min-width: 650px)': { // not large mobile
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
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
    }
  },
  inputAndButton: {
    fontSize: '2em',
    borderRadius: '3px',
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
    width: 400,
    '@media (max-width: 448px)': {
      width: '100%',
    }
  },
  button: {
    color: '#3d3d3d',
    border: '1px solid #e5e5e5',
    textAlign: 'center',
    width: 400,
    margin: '1rem 0',
    '@media (max-width: 992px)': {
      marginLeft: 0,
    },
    '@media (max-width: 448px)': {
      width: '100%',
    },
  },
  buttonUnsubmitted: {
    backgroundColor: '#e5e5e5',
  },
  buttonSubmitted: {
    backgroundColor: '#e5e5e5',
  },
  checkbox: {
    marginLeft: 10,
  },
}

export default Radium(EmailSignupForm);
