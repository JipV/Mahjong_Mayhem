module.exports = function() {

    var loginFactory = {};

    loginFactory.isLoggedIn = function(){
        var email = window.localStorage.getItem("email");
        var token = window.localStorage.getItem("token");
        if(email && token){
            return true;
        } else {
            return false;
        }
    };

    loginFactory.getEmail = function(){
        return window.localStorage.getItem("email");
    };

    loginFactory.getToken = function(){
        return window.localStorage.getItem("token");
    };

    /*

    gamesFactory.getGames = function (numberOfGames, setProgressBar, callBack) {
        setProgressBar(50);
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
	
    */

    return loginFactory;
};