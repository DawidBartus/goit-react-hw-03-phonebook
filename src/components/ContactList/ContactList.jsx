import { Component } from 'react';

class ContactList extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  delateContact = e => {
    const { contacts } = this.state;
    const newContact = contacts.filter(contact => contact.id !== e.target.id);

    this.setState({ contacts: newContact });
  };

  render() {
    const contactList = this.state.contacts;
    console.log(contactList);
    return (
      <>
        {contactList.map(contact => {
          return (
            <span key={contact.id}>
              <p>
                {contact.name} {contact.number}
              </p>
              <button id={contact.id} onClick={this.delateContact}>
                Delate
              </button>
            </span>
          );
        })}
        <button>Cześć</button>
      </>
    );
  }
}

export default ContactList;
