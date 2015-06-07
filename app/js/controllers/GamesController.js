module.exports = function($scope, $state, $timeout, gamesFactory, gameService, retreivedGames) {

	this.user = {
		_id: window.localStorage.getItem("email"),
		//name: "Erik Brandsma",
		id: window.localStorage.getItem("email")
	};

	this.activeTab = "open"

	this.gameType = "Shanghai";

	this.games = retreivedGames;

	var stop;

	this.showGame = function(game) {
		gameService.setGame(game);
		$state.go('game');
	}

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
		if(minPlayers != "" && maxPlayers != "" && minPlayers > 1 && minPlayers < 33 && maxPlayers > 0 && maxPlayers < 33 && maxPlayers > minPlayers){
			//Implementeer success (Alle gegevens zijn goed )
			gamesFactory.createGame(this.gameType, minPlayers, maxPlayers, this);
			
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
			$(".myAlert").animate({
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

	this.receiveGame = function(newGame){
		console.log(newGame);
		this.games.push(newGame);
		this.goToOwnedGames();
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
}