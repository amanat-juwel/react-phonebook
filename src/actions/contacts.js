import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addContact = (contact) => ({
  type: 'ADD_CONTACT',
  contact
});

export const startAddContact = (contactData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      name = '',
      number = ''
    } = contactData;
    const contact = { name, number };

    return database.ref(`users/${uid}/contacts`).push(contact).then((ref) => {
      dispatch(addContact({
        id: ref.key,
        ...contact
      }));
    });
  };
};

// REMOVE_EXPENSE
export const removeContact = ({ id } = {}) => ({
  type: 'REMOVE_CONTACT',
  id
});

export const startRemoveContact = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/contacts/${id}`).remove().then(() => {
      dispatch(removeContact({ id }));
    });
  };
};

// EDIT_EXPENSE
export const editContact = (id, updates) => ({
  type: 'EDIT_CONTACT',
  id,
  updates
});

export const startEditContact = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/contacts/${id}`).update(updates).then(() => {
      dispatch(editContact(id, updates));
    });
  };
};

// SET_contacts
export const setContacts = (contacts) => ({
  type: 'SET_CONTACTS',
  contacts
});

export const startSetContacts = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/contacts`).once('value').then((snapshot) => {
      const contacts = [];

      snapshot.forEach((childSnapshot) => {
        contacts.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setContacts(contacts));
    });
  };
};
