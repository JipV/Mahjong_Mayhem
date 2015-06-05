require('angular/angular');
require('angular-ui-router/build/angular-ui-router');

// Create your app
var app = angular.module("Mahjong_Mayhem", ['ui.router']);

var urlFactory = require("./factories/urlFactory");
var gamesFactory = require("./factories/gamesFactory");
var gamesController = require("./controllers/GamesController");
var gameController = require("./controllers/GameController");
var game = require("./models/game");

app.factory("urlFactory", urlFactory);
app.factory("gamesFactory", gamesFactory);
app.controller("GamesController", gamesController);
app.controller("GameController", gameController);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "./views/games.html",
      controller: "GamesController as gamesController",
      resolve: {
        retreivedGames: function(gamesFactory, $q){
          var deferred = $q.defer();

          gamesFactory.getGames(function(games){
            deferred.resolve(games);
          })

          return deferred.promise;
        }
      }
    })
    .state('home.opengames', {
      templateUrl: "./views/directives/opengames.html",
    })
    .state('home.playinggames', {
      url: "playinggames",
      templateUrl: "./views/directives/playinggames.html"
    })
    .state('home.ownedgames', {
      url: "ownedgames",
      templateUrl: "./views/directives/ownedgames.html",
    })
    .state('game', {
      url: "/game",
      templateUrl: "./views/game.html",
      controller: gameController
    })
});

app.directive('tile', function() {
	return {
		restrict: 'E',
		templateUrl: './views/directives/tileTemplate.html',
		controller: function($scope) {
			
		},
		link: function(scope, element, attrs) {
			
		}
	}
});
app.directive('game', function() {
  return {
    restrict: 'E',
    templateUrl: './views/directives/game.html',
  }
});