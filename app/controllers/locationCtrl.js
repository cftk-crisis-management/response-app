"use strict";

app.controller("LocationCtrl", function(LocationFactory, AuthFactory, $scope) {

	let user = AuthFactory.getUser();

	let location = LocationFactory.findLocation();
	
	console.log(location);

});