module.exports = function($scope) {

var user = {
	id: "1", 
	name: "Jan Janssen", 
	email: "jan@jansen.nl", 
	nickname: "Jantje"
};

var game1 = {
	layout: "shanghai",
	createdOn: new Date(),
	startedOn: new Date(),
	endedOn: new Date(),
	createdBy: {
		id: "bla",
		name: "BlaBla",
		email: "blabla@blabla.nl",
		nickname: "Bla"
	},
	minPlayers: 2,
	maxPlayers: 8,
	players: [{
		id: "bla",
		name: "BlaBla",
		email: "blabla@blabla",
		nickname: "Bla"
	}],
	"state": "open"
};
			
var game2 = {
	layout: "dragon",
	createdOn: new Date(),
	startedOn: new Date(),
	endedOn: new Date(),
	createdBy: {
		id: "bla",
		name: "BlaBla",
		email: "blabla@blabla.nl",
		nickname: "Bla"
	},
	minPlayers: 4,
	maxPlayers: 10,
	players: [{
		id: "bla",
		name: "BlaBla",
		email: "blabla@blabla",
		nickname: "Bla"
	}],
	"state": "open"
};

var game3 = {
	layout: "monkey",
	createdOn: new Date(),
	startedOn: new Date(),
	endedOn: new Date(),
	createdBy: user,
	minPlayers: 2,
	maxPlayers: 10,
	players: [user],
	"state": "open"
};
	
	this.games = [game1, game2];
	
	this.addGame = function(name) {
		this.games.push(game3);
	};
	
	this.addPlayer = function(game) {
		game.players.push(user);
	};
	
};
	 
	 