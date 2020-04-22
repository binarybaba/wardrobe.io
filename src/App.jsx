import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import { render } from 'react-dom';

import { db } from './Chat/util';

import { Viewport } from './styled/Viewport';
import { Sidebar } from "./ContactList/components/Sidebar";
import { Main } from "./Chat/components/Main";

import Chat from './Chat/Chat';
import ContactList from "./ContactList/ContactList";

const App = () => (
	<Viewport>
		<Router>
			<Sidebar>
				<ContactList db={db}/>
			</Sidebar>
			<Switch>
				<Route path="/:contactName" children={(
					<Main>
						<Chat />
					</Main>
				)} />
			</Switch>
		</Router>
	</Viewport>
);

/*
* Problem: store-less
* time was limited so I couldnt configure the store
* Ideally all actions should be
* dispatched .
* */


render(<App />, document.getElementById('root'));
