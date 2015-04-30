require('angular/angular');

// Create your app
var app = angular.module("Mahjong_Mayhem", []);

var gamesController = require("./controllers/GamesController");
app.controller("GamesController", gamesController);