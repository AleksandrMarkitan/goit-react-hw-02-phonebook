import { Component } from 'react';
// import { nanoid } from 'nanoid';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import s from '../components/ContactList/ContactList.module.scss';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <Section>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={contacts}
          name={name}
          number={number}
          handleContactInput={this.handleContactInput}
        />

        <div className={s.contacts}>
          <h2 className={s.h2}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </Section>
    );
  }
}
