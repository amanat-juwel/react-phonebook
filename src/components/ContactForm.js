import React from 'react';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.contact ? props.contact.name : '',
      number: props.contact ? props.contact.number : '',
      error: ''
    };
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onNumberChange = (e) => {
    const number = e.target.value;
    this.setState(() => ({ number }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState(() => ({ error: '' }));
    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number
    });
    
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Name"
          autoFocus
          className="text-input"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <input
          type="text"
          placeholder="Number"
          className="text-input"
          value={this.state.number}
          onChange={this.onNumberChange}
        />
        <div>
          <button className="button">Save</button>
        </div>
      </form>
    )
  }
}
