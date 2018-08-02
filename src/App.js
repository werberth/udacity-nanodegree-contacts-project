import React, { Component } from 'react';
import ListContacs from './ListContacts';
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI';


class App extends Component {

  state = {
    screen: 'list',
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
        {this.state.screen === 'list' && (
          <ListContacs 
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
          />
        )}
        
        {this.state.screen === 'add' && (
          <CreateContact />
        )}

      </div>
    )
  }
}

export default App