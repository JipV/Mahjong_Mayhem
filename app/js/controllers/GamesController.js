module.exports = function($scope, gamesFactory) {

	this.user = {
		_id: "jip--pie@avans.nl",
		name: "Jip Verhoeven",
		__v: 0,
		id: "jip--pie@avans.nl"
	};

	this.activeTab = "open"

	var game1 = {
		_id: "5541fc5b1872631100678bb7",
		createdBy: {
			_id: "mmaa.schuurmans@avans.nl",
			name: "Martijn Schuurmans",
			__v: 0,
			id: "mmaa.schuurmans@avans.nl"
		},
		createdOn: "2015-05-30T09:56:43.516Z",
		startedOn: "2015-05-30T09:57:43.516Z",
		endedOn: "2015-05-30T09:58:43.516Z",
		gameTemplate: {
			_id: "Monkey",
			__v: 0,
			id: "Monkey"
		},
		__v: 0,
		players: 
		[{
			_id: "mmaa.schuurmans@avans.nl",
			name: "Martijn Schuurmans",
			__v: 0,
			id: "mmaa.schuurmans@avans.nl"
		}],
		maxPlayers: 8,
		minPlayers: 2,
		state: "open",
		id: "5541fc5b1872631100678bb7"
	}
				
	var game2 = {_id: "5541fc5b1872631100678bb4",
		createdBy: {
			_id: "mmaa.schuurmans@avans.nl",
			name: "Martijn Schuurmans",
			__v: 0,
			id: "mmaa.schuurmans@avans.nl"
		},
		createdOn: "2015-04-30T09:56:43.516Z",
		startedOn: "2015-04-30T09:57:43.516Z",
		endedOn: "2015-04-30T09:58:43.516Z",
		gameTemplate: {
			_id: "Dragon",
			__v: 0,
			id: "Dragon"
		},
		__v: 0,
		players: 
		[{
			_id: "mmaa.schuurmans@avans.nl",
			name: "Martijn Schuurmans",
			__v: 0,
			id: "mmaa.schuurmans@avans.nl"
		}],
		maxPlayers: 32,
		minPlayers: 2,
		state: "playing",
	id: "5541fc5b1872631100678bb4"}
		
	this.games = [game1, game2];

	this.hasPlayer = function(game, user){
		for(var x = 0; x < game.players.length; x++){
			if(game.players[x]._id === user._id){
				return true
			}
		}
		return false
	}	
	
	this.addGame = function(name) {
		var newGame ={
			"templateName": "Ox",
			"minPlayers": 2,
			"maxPlayers": 32
		};
	};

	this.addPlayer = function(game) {
		console.log("Hallo :D")
		game.players.push(this.user);
	};

	this.top
	
	//var game = new Game(gamesFactory);
	//game.getTiles();
}