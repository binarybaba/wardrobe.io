import React  from 'react';
import { Link } from "react-router-dom";

const ContactList = ({ db }) => (
	<ul>
		{db.map(contact => (
			<li>
				<Link to={`${contact.name}`}>
					<div>{contact.name}</div>
					<p>{contact.messages[contact.messages.length - 1].message}</p>
				</Link>
			</li>
		))}
	</ul>
);

/*
* Problem: doesn't update when a new messafe is passed/
* time was limited so I couldnt have redux. Ideally, this component
* should be connected to a store and should be subscribed to changes.
* */

export default ContactList;
