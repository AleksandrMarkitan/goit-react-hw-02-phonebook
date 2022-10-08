// import PropTypes from 'prop-types';
import { Component } from 'react';
import { Button } from '../Button/Button';
import s from './ContactForm.module.scss';

export class ContactForm extends Component {
  state = {
    name: this.props.name,
    number: this.props.number,
  };

  handleContactInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleContactInput}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleContactInput}
          />
        </label>
        <Button />
      </form>
    );
  }
}

// User.propTypes = {
//   user: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired, // name of the users  object  being
//   }).isRequired,
// };
