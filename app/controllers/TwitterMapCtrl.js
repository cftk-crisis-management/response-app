"use strict";

app.controller("TwitterMapCtrl", function($scope, TwitterFactory){
console.log("TwitterMapCtrl");

//we call on the GeoFireFactory to get the user's location, then we send that location to the Twitterfactory.
//Then the TwitterFactory will use that user's location to query the twitter api
	GeoFireFactory.getLocation();

	TwitterFactory.getUserLocation();

});