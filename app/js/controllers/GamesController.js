module.exports = function($scope, $state, $timeout, retreivedGames) {

	this.gameType = "Shanghai";

	this.user = {
		_id: "ebrandm@avans.nl",
		name: "Erik Brandsma",
		__v: 0,
		id: "ebrandsm@avans.nl"
	};

	this.activeTab = "open"
	var stop;

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
		maxPlayers: 2,
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
		maxPlayers: 2,
		minPlayers: 2,
		state: "open",
	id: "5541fc5b1872631100678bb4"}
	this.games = retreivedGames
	//this.games = [game1, game2];

	this.hasPlayer = function(game, user){
		for(var x = 0; x < game.players.length; x++){
			if(game.players[x]._id === user._id){
				return true
			}
		}
		return false
	}	
	
	this.createGame = function() {
		var minPlayers = $("#minPlayers").val();
		var maxPlayers = $("#maxPlayers").val();
		if(minPlayers != "" && maxPlayers != "" && minPlayers > 0 && minPlayers < 32 && maxPlayers > 0 && maxPlayers < 33 && maxPlayers > minPlayers){
			//Implementeer success (Alle gegevens zijn goed )
		} else {
			$("#alertToRemove").remove()
			$("#createGame").append('<div id="alertToRemove" class="alert alert-danger myAlert" role="alert">De game voldoet niet aan een van deze eisen: </br> minPlayers != undefined && maxPlayers != undefined && minPlayers > 0 && minPlayers < 32 && maxPlayers > 0 && maxPlayers < 33 && maxPlayers > minPlayers</div>')
			$(".myAlert").dequeue();
			$(".myAlert").css("opacity", 0);
			$(".myAlert").clearQueue();
			$(".myAlert").stop(true, true);
			if(angular.isDefined(stop)){
				$timeout.cancel(stop);
            	stop = undefined;
			}
			$( ".myAlert" ).animate({
			    opacity: 1,
			}, 1000, function() {
			    stop = $timeout(function(){
					$( ".myAlert" ).animate({
						opacity: 0,
					}, 4000, function() {
						$("#alertToRemove").remove()
					});
				}, 4000);
			});
		}
	};

	this.addPlayer = function(game) {
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

	this.changeSelect = function(gameType){
		this.gameType = gameType;
		$("#selectGameType").html(this.gameType);
	}
	
	$state.go('home.opengames');
	//var game = new Game(gamesFactory);
	//game.getTiles();
}