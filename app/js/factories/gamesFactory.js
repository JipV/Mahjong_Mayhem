module.exports = function($http, urlFactory) {

    var urlBase = '/Games';
    var gamesFactory = {};

    gamesFactory.timeout = function(callBack){
        window.setTimeout(function(){
            callBack();
        }, 5000)
    }

    gamesFactory.getGames = function (numberOfGames, setProgressBar, callBack) {
        setProgressBar("Loading games", 50);
        return $http.get(urlFactory + urlBase + "?pageSize=" + numberOfGames).
        success(function(data, status, headers, config){
        	callBack(data);
        }).error(function(data, status, headers, config){
        	console.log(data);
        });
    };

    gamesFactory.createGame = function (templateName, minPlayers, maxPlayers, callBack) {
        return $http.post(urlFactory + urlBase, {templateName: templateName,  minPlayers: minPlayers, maxPlayers: maxPlayers}).
        success(function(data, status, headers, config){
        	callBack(data);
        }).error(function(data, status, headers, config){
        	console.log(data);
        });
    };

    gamesFactory.startGame = function(game_id, callBack){
        return $http.post(urlFactory + urlBase + "/" + game_id + "/start").
        success(function(data, status, headers, config){
            callBack(data);
        }).error(function(data, status, headers, config){
            console.log(data);
        });
    }

    gamesFactory.joinGame = function(game_id, callBack){
        return $http.post(urlFactory + urlBase + "/" + game_id + "/Players").
        success(function(data, status, headers, config){
            callBack(data);
        }).error(function(data, status, headers, config){
            console.log(data);
        });
    }

    gamesFactory.getGame = function (id, callBack) {
        return $http.get(urlFactory + urlBase + '/' + id).
        success(function(data, status, headers, config) {
            callBack(data);
        }).
        error(function(data, status, headers, config){
            console.log(data);
        });
    };

    gamesFactory.getTiles = function (id, callBack) {
        return $http.get(urlFactory + urlBase + '/' + id + '/Tiles/?matched=false').
		success(function(data, status, headers, config) {
            
			callBack(data);
		}).
		error(function(data, status, headers, config){
			console.log(data);
		});
    };

    gamesFactory.getMatchedTiles = function (id, callBack) {
        return $http.get(urlFactory + urlBase + '/' + id + '/Tiles/matches').
        success(function(data, status, headers, config) {
            callBack(data);
        }).
        error(function(data, status, headers, config){
            console.log(data);
        });
    };

    gamesFactory.addMatch = function (idGame, idTile1, idTile2, callBack) {
        console.log("HALLO 2");
        return $http.post(urlFactory + urlBase + '/' + idGame + '/Tiles/matches', {tile1Id: idTile1, tile2Id: idTile2}).
		success(function(data, status, headers, config) {
            console.log("HALLO 1");
            console.log(data)
			callBack(data);
		}).
		error(function(data, status, headers, config){
			console.log(data);
		});
    };
	
    return gamesFactory;
};