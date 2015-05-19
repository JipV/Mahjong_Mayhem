require('angular/angular');

// Create your app
var app = angular.module("Mahjong_Mayhem", []);

var urlFactory = require("./factories/urlFactory");
var gamesFactory = require("./factories/gamesFactory");
var gamesController = require("./controllers/GamesController");

app.factory("urlFactory", urlFactory);
app.factory("gamesFactory", gamesFactory);
app.controller("GamesController", gamesController);
