"use strict";

app.factory("twitterFactory", function($http, $q, $scope, GeoFireFactory, RootFactory){
	console.log("twitterFactory");
	/*
		Documentation
	 */
	 let userLat = GeoFireFactory.latitude;
	 let userLong = GeoFireFactory.longitude;
	 let userRadius = GeoFireFactory.radius;
	 let getUserLocation = () => {
	 	userLat;
	 		console.log("latitude", userLat);
		userLong;
	 		console.log("longitude", userLong);
	 	userRadius;
	 		console.log("radius", userRadius);
	 	return;
	 	//grab the user's current location and POST it to the Twitter API
	 	//the 
	 
	 };


    return {getUserLocation};
});