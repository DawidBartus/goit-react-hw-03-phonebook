import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();

    this.props.onSubmit({ id, name, number });
    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="contactName">Number:</label>
        <input
          id="contactName"
          type="text"
          name="name"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <label htmlFor="number">Name</label>
        <input type="tel" id="number" name="number" pattern="[0-9]+" />
        <button type="submit">Zapisz</button>
      </form>
    );
  }
}

export default ContactForm;
