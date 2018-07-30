import React, { Component } from 'react';
import ListContacs from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';


class App extends Component {

  state = {
    contacts: []
  }

  componentDidMount(){
    ContactsAPI.getAll()
      .then((contacts) => {
        this.setState({ contacts })
      })
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    ContactsAPI.remove(contact);
  }
 
  render(){
    return (
      <div>
        <ListContacs 
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}
        />
      </div>
    )
  }
}

export default App