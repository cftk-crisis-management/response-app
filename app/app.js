"use strict";

// Define the application
var app = angular.module("CrisisApp", ['ngRoute']);


// Set up the routes
app.config(function($routeProvider, $httpProvider){
	$routeProvider.
	when("/", {
		templateUrl: "partials/home.html ",
		controller: "HomeCtrl"
	});



});