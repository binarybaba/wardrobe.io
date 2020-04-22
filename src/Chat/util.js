export const db = [{
	"name": "Piano",
	"messages": [{
		"message": "Consultants can sell higher if they are very good",
		"time": 1587513198849
	}, {
		"message": "ok",
		"time": 1587513198849,
		"isSelf": true
	},{
		"message": "Just had my talk with people",
		"time": 1587513198849,
	},{
		"message": "NICE!!",
		"time": 1587513198849,
		"isSelf": true
	},{
		"message": "He asked me what I want",
		"time": 1587513198849,
	},{
		"message": "I asked to see more stuff and talk to the people I'm going to work with",
		"time": 1587513198849,
	},{
		"message": "It's the core!",
		"time": 1587513198849,
	},{
		"message": "oh fuck yes",
		"time": 1587513198849,
	},{
		"message": "calll",
		"time": 1587513198849,
	}]
}, {
	"name": "Gleb",
	"messages": [{
		"message": "Then Isabel wanted to get beers around 6",
		"time": 1587513198849
	}, {
		"message": "Okay",
		"time": 1587513198849,
		"isSelf": true
	},{
		"message": "So I'm actually inviting you to come meet the three of us",
		"time": 1587513198849,
	},{
		"message": "oh no i don't wanna do beers",
		"time": 1587513198849,
		"isSelf": true
	},{
		"message": "We'll come for company",
		"time": 1587513198849,
	},{
		"message": "*well",
		"time": 1587513198849,
	},{
		"message": "i willl end up having beers if i come lol",
		"time": 1587513198849,
		"isSelf": true
	},{
		"message": "nevermind you guys have fun",
		"time": 1587513198849,
		"isSelf": true
	},{
		"message": "You can't sacrifice social relationships because of ALCOHOL",
		"time": 1587513198849,
	},{
		"message": "That's literal alcoholism",
		"time": 1587513198849,
	}, {
		"message": "😂",
		"time": 1587513198849,
		"isSelf": true
	}]
}];

export const getMessages = (name) => db.filter(contact => contact.name === name)[0].messages;

export const sendMessage = (message, name, isSelf = true) => {
	db.forEach(contact => {
		if(contact.name === name) {
			contact.messages.push({
				message,
				isSelf,
				time: (new Date()).getTime()
			})
		}
	})
};

