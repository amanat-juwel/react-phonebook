import React from 'react';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import selectContacts from '../selectors/contacts';

export const ContactList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Contacts</div>
      <div className="show-for-desktop">Name</div>
      <div className="show-for-desktop">Number</div>
    </div>
    <div className="list-body">
      {
        props.contacts.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No contacts</span>
          </div>
        ) : (
            props.contacts.map((contact) => {
              return <ContactListItem key={contact.id} {...contact} />;
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    contacts: selectContacts(state.contacts, state.filters)
  };
};

export default connect(mapStateToProps)(ContactList);
