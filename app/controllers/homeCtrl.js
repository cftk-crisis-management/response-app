"use strict";

app.controller("HomeCtrl", function(GeoFireFactory, $scope, $location) {


	// Get the current user's location
	GeoFireFactory.getLocation();

	$scope.goToMap = () => {
		console.log("changing the map");
		$location.path('/map');
	};
	
});