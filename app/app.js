"use strict";

// Define the application
var app = angular.module("CrisisApp", ['ngRoute']);


// Set up the routes
app.config(function($routeProvider, $httpProvider){




});




app.run( ($location, FBCreds, $rootScope) => {
	let creds = FBCreds;

	$rootScope.$on("$routeChangeError", function () {
		$location.path("/login");
	});

	let authConfig = {
		apiKey: creds.key,
		authDomain: creds.authDomain
	};

	firebase.initializeApp(authConfig);

});