"use strict";

// Define the application
var app = angular.module("CrisisApp", ['ngRoute']);


let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
	console.log('isAuth');
	AuthFactory.isAuthenticated()
		.then((userExists) => {
			if (userExists){
				console.log('resolving');
				resolve();
			} else {
				console.log('rejectng');
				reject();
			}
		});
});


// Set up the routes
app.config(function($routeProvider, $httpProvider){
	$routeProvider
	
	.when("/", {
		templateUrl: "partials/login.html ",
		controller: "UserCtrl",
	})

	.when('/home', {
		templateUrl: 'partials/home.html',
		controller: "HomeCtrl",
		resolve: {isAuth}
	})

	.when('/map', {
		templateUrl: 'partials/map.html',
		controller: "TwitterMapCtrl",
		resolve: {isAuth}
	});



});




app.run( ($location, FBCreds, $rootScope) => {
	let creds = FBCreds;

	$rootScope.$on("$routeChangeError", function () {
		$location.path("/login");
	});

	let authConfig = {
		apiKey: creds.key,
		authDomain: creds.authDomain,
		databaseURL: creds.URL
	};

	firebase.initializeApp(authConfig);

});