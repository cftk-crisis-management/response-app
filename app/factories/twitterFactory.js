"use strict";

app.factory("TwitterFactory", function($http, $q, GeoFireFactory){
	console.log("TwitterFactory");
	
	//supposed to get this info from the GeoFireFactory.js
	 let userLat = GeoFireFactory.geolocationCallback;
	 let userLong = GeoFireFactory.longitude;
	 let userRadius = GeoFireFactory.radius;
	 let getUserLocation = () => {
	 		console.log("latitude", userLat);
	 		console.log("longitude", userLong);
	 		console.log("radius", userRadius);
	 	// return;
	 	//grab the user's current location and POST it to the Twitter API
	 	//the 
	 
	 };


    return {getUserLocation};
});