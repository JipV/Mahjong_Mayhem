module.exports = function($http, urlFactory) {

    var urlBase = '/Games';
    var gamesFactory = {};

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
	
	/*gamesFactory.getTiles = function (id, callBack) {
        $http.get(urlFactory + urlBase + '/' + id + '/tiles').
		success(function(data, status, headers, config) {
			callBack(data);
		}).
		error(function(data, status, headers, config){
			console.log(data);
		});
    };*/

    gamesFactory.getTiles = function (id, callBack) {
        return $http.get(urlFactory + urlBase + '/' + id + '/tiles').
		success(function(data, status, headers, config) {
			callBack(data);
		}).
		error(function(data, status, headers, config){
			console.log(data);
		});
    };

    gamesFactory.addMatch = function (idGame, idTile1, idTile2, callBack) {
        $http.post(urlFactory + urlBase + '/' + idGame + '/tiles/matches', {tile1Id: idTile1, tile2Id: idTile2}).
		success(function(data, status, headers, config) {
			callBack(data);
		}).
		error(function(data, status, headers, config){
			console.log(data);
		});
    };
	
    return gamesFactory;
};