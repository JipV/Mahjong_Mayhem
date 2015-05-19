module.exports = function($http, urlFactory) {

    var urlBase = '/Games';
    var gamesFactory = {};

    gamesFactory.getGames = function () {
        return $http.get(urlFactory + urlBase);
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