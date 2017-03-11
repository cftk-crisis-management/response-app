"use strict";

app.controller("HomeCtrl", function(GeoFireFactory, $scope) {


	// Get the current user's location
	GeoFireFactory.getLocation();
	
});