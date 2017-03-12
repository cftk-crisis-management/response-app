"use strict";

app.controller("HomeCtrl", function(GeoFireFactory, $scope, $location) {


	// Get the current user's location
	GeoFireFactory.getLocation();

	
	//get the items from the item factory
	GeoFireFactory.getLocationFromFireBase()
		.then( (itemArray) => {
			console.log("RETURNED FROM FB", itemArray);
			$scope.items = itemArray;
			$scope.$apply();
	}); 


	$scope.goToMap = () => {
		console.log("changing the map");
		$location.path('/map');
	};
	
});