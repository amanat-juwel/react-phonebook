import React from 'react';
import { Link } from 'react-router-dom';

const ContactListItem = ({ id, name, number }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <p className="list-item__title">{name}</p>
    </div>
    <p className="list-item__data">{number}</p>
  </Link>
);

export default ContactListItem;
