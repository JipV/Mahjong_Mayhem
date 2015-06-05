module.exports = function($scope, $state, retreivedGames) {

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
		state: "open",
	id: "5541fc5b1872631100678bb4"}
	console.log(retreivedGames);
	this.games = retreivedGames

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

	this.isOwnedGame = function(game){
		if(this.user._id == game.createdBy._id){
			return true;
		} else {
			var found = false;
			for(var i = 0; i < game.players.length; i++) {
			    if (game.players[i]._id == this.user._id) {
			        found = true;
			        break;
			    }
			}
			return found;
		}
	}

	this.goToOwnedGames = function(){
		this.activeTab = 'owned'
		$state.go('home.ownedgames');
	}

	this.goToOpenGames = function(){
		this.activeTab = 'open'
		$state.go('home.opengames');
	}

	this.goToPlayingGames = function(){
		this.activeTab = 'playing'
		$state.go('home.playinggames')
	}
	
	$state.go('home.opengames');
	//var game = new Game(gamesFactory);
	//game.getTiles();
}