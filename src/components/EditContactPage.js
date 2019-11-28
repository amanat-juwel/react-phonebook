import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { startEditContact, startRemoveContact } from '../actions/contacts';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export class EditContactPage extends React.Component {

  onSubmit = (contact) => {
    this.props.startEditContact(this.props.contact.id, contact);
    this.props.history.push('/');
  };

  confirmDelete = () => {
    this.props.startRemoveContact({ id: this.props.contact.id });
    this.props.history.push('/');
  };

  onRemove = () => {
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      title: <p>Hello World</p>,
      footer: 'Copyright 2018',
      onOpen: () => {
        // `MySwal` is a subclass of `Swal`
        //   with all the same instance & static methods
        MySwal.clickConfirm(<p>Are u sure</p>)
      },
      
    }).then(() => {
      return MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.confirmDelete();
          Swal.fire(
            'Deleted!',
            'Data has been deleted.',
            'success'
          )
        }
      })
    })
  };
  
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Contact</h1>
          </div>
        </div>
        <div className="content-container">
        
          <ContactForm
            contact={this.props.contact}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Contact</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  contact: state.contacts.find((contact) => contact.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditContact: (id, contact) => dispatch(startEditContact(id, contact)),
  startRemoveContact: (data) => dispatch(startRemoveContact(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContactPage);
