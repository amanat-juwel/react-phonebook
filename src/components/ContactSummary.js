import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectContacts from '../selectors/contacts';

export const ContactSummary = ({ contactCount }) => {
  const contactWord = contactCount === 1 ? 'contact' : 'contacts';

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{contactCount}</span> {contactWord} </h1>
 
        <div className="page-header__actions">
          <Link className="button" to="/create">Add New</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleContacts = selectContacts(state.contacts, state.filters);

  return {
    contactCount: visibleContacts.length
  };
};

export default connect(mapStateToProps)(ContactSummary);
