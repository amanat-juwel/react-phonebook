import React from 'react';
import { Link } from 'react-router-dom';

const ContactListItem = ({ id, name, number }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{name}</h3>
    </div>
    <h3 className="list-item__data">{number}</h3>
  </Link>
);

export default ContactListItem;
