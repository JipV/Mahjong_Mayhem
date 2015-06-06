module.exports = function($http, urlFactory) {

    var urlBase = '/Games';
    var gamesFactory = {};

    gamesFactory.getGames = function (numberOfGames, setProgressBar, callBack) {
        setProgressBar("Loading games", 50);
        return $http.get(urlFactory + urlBase + "?pageSize=" + numberOfGames).
        success(function(data, status, headers, config){
        	callBack(data)
        }).error(function(data, status, headers, config){
        	console.log(data);
        });
    };
	
	gamesFactory.getTiles = function (id, callBack) {
        $http.get(urlFactory + urlBase + '/' + id + '/tiles').
		success(function(data, status, headers, config) {
			callBack(data);
		}).
		error(function(data, status, headers, config){
			console.log(data);
		});
    };
	
    return gamesFactory;
};