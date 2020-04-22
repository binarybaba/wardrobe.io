import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMessages, sendMessage } from "./util";

const Chat = () => {
	let { contactName } = useParams();

	const [ message, setMessage ] = useState('');

	const send = (e) => {
		e.preventDefault();
		setMessage(e.target.elements[0].value);
		sendMessage(message, contactName);
		setMessage('');
	};

	const handleMessageChange = (e) => {
		const { target } = e;
		if (target.value.length) {
			setMessage(target.value)
		}
	};

	return (
		<div>
			<ul>
				{getMessages(contactName).map(chat => (
					<li>
						<div>{chat.message}</div>
					</li>
				))}
			</ul>
			<form onSubmit={send}>
				<input type="text" name="chat-text" value={message} onChange={handleMessageChange}/>
				<button type="submit">send</button>
			</form>
		</div>
	)
};

/*
* Problem: store-less
* time was limited so I couldnt configure the store
* Ideally all actions should be
* dispatched .
* */


export default Chat;
