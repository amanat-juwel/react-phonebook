import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { startAddContact } from '../actions/contacts';

export class AddContactPage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddContact(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ContactForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddContact: (expense) => dispatch(startAddContact(expense))
});

export default connect(undefined, mapDispatchToProps)(AddContactPage);
