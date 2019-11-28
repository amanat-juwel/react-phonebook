import React from 'react';
import ContactList from './ContactList';
import ContactListFilters from './ContactListFilters';
import ContactSummary from './ContactSummary';

const ContactDashboardPage = () => (
	<div>
		<ContactSummary />
		<ContactListFilters />
		<ContactList />
	</div>
);

export default ContactDashboardPage;