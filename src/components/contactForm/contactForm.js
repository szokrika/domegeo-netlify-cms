import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Alert } from 'react-alert';
import axios from 'axios';
import Box from 'components/box';
import FormContainer from './contactForm.css';

const initialState = {
  selectedOption: null,
  name: '',
  company: '',
  email: '',
  message: '',
};
class ContactForm extends Component {
  state = initialState;

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleChangeSelect = selectedOption => {
    this.setState({ selectedOption });
    // console.log('------- this.state --------->', this.state);
  };
  handleSubmit = async (e, alert) => {
    e.preventDefault();
    const data = this.state;
    if (data.selectedOption) {
      const interest = data.selectedOption.reduce((collector, item) => {
        collector.push(item.value);
        return collector;
      }, []);

      delete data.selectedOption;
      data.interest = interest.join(', ');

      try {
        const response = await axios.post('.netlify/functions/sendMail', data);
        const { status } = response.data;

        alert.show(<div style={{ color: '#eee' }}>{status}</div>);
        this.setState(initialState);
      } catch (error) {
        alert.show(<div style={{ color: '#eee' }}>{error.message}</div>);
      }
    }
  };
  render() {
    const options = [
      {
        value: 'Resource Exploration & Development',
        label: 'Resource Exploration & Development',
      },
      { value: 'Water Supply', label: 'Water Supply' },
      { value: 'Downhole Camera', label: 'Downhole Camera Services' },
      { value: 'Environmental', label: 'Environmental' },
      { value: 'Geohazards', label: 'Geohazards' },
      { value: 'Education/Research', label: 'Education/Research' },
      { value: 'Other', label: 'Other' },
    ];
    const { selectedOption, name, company, email, message } = this.state;
    return (
      <Alert>
        {alert => (
          <FormContainer
            name="contact"
            netlify
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={e => this.handleSubmit(e, alert)}
          >
            <input type="hidden" name="form-name" value="contact" />
            <Box slim>
              <label htmlFor="name">
                <span>Your Name:</span>{' '}
                <input
                  onChange={this.handleChange}
                  value={name}
                  id="name"
                  type="text"
                  name="name"
                  required
                />
              </label>
            </Box>
            <Box slim>
              <label htmlFor="company">
                <span>
                  Company Name: <sup>(optional)</sup>
                </span>{' '}
                <input
                  onChange={this.handleChange}
                  value={company}
                  id="company"
                  type="text"
                  name="company"
                  required
                />
              </label>
            </Box>
            <Box slim>
              <label htmlFor="email">
                <span>Your Email:</span>{' '}
                <input
                  onChange={this.handleChange}
                  value={email}
                  id="email"
                  type="email"
                  name="email"
                  required
                />
              </label>
            </Box>
            <Box slim>
              {/* eslint-disable */}
              <label htmlFor="interest">
                <span>Interest:</span>
                <Select
                  isMulti
                  required
                  id="interest"
                  name="interest"
                  className="select-box"
                  value={selectedOption}
                  onChange={this.handleChangeSelect}
                  options={options}
                />
              </label>
              {/* eslint-enable */}
            </Box>
            <Box slim>
              <label htmlFor="message">
                <span>Message:</span>{' '}
                <textarea
                  onChange={this.handleChange}
                  value={message}
                  required
                  id="message"
                  name="message"
                />
              </label>
            </Box>
            <Box slim className="buttonBox">
              <button type="submit">Send</button>
            </Box>
          </FormContainer>
        )}
      </Alert>
    );
  }
}
ContactForm.propTypes = {
  alert: PropTypes.oneOfType([PropTypes.shape(), PropTypes.node]),
};
export default ContactForm;
