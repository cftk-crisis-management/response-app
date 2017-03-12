"use strict";

app.controller("HomeCtrl", function(GeoFireFactory, $scope, $location) {


	// Get the current user's location
	GeoFireFactory.getLocation()


	let locationfb = function() {
	console.log("timer"); 

	GeoFireFactory.getLocationFromFireBase()
		.then( (itemArray) => {
			console.log("RETURNED FROM FB", itemArray);
			// call twitter
			// $scope.items = itemArray;
			// $scope.$apply();
	}); 
	}

	var setInterval;
	var setTimer = setTimeout(locationfb, 5000);


	// $scope.goToMap = () => {
	// 	console.log("changing the map");
	// 	$location.path('/map');
	// };
	
});