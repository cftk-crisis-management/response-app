"use strict";

app.factory("GeoFireFactory", function ($http, $q, AuthFactory) {

	let user = AuthFactory.getUser();

	//GeoFire query 
	//initialize the firebase app on the app.js, pointing to info stored in the values folder

	//generate user's specific location
	var firebaseRef = firebase.database().ref().push();

	// Create a new GeoFire instance at the random Firebase location
	var geoFire = new GeoFire(firebaseRef);
	var geoQuery;

	//Need grab the location info from the phone, gonna be a query

	/* Uses the HTML5 geolocation API to get the current user's location */
	var getLocation = function() {
	  if (typeof navigator !== "undefined" && typeof navigator.geolocation !== "undefined") {
	    log("Asking user to get their location");
	    navigator.geolocation.getCurrentPosition(geolocationCallback, errorHandler);
	  } else {
	    log("Your browser does not support the HTML5 Geolocation API, so this demo will not work.");
	  }
	};

	/* Callback method from the geolocation API which receives the current user's location */
	var geolocationCallback = function(location) {
	  var latitude = location.coords.latitude;
	  var longitude = location.coords.longitude;
	  
	  //add the radius to the object. during the twitter query, add in mi after the radius
	  var radius = 25; 
	  location.coords.radius = radius;
	  
	  log("Retrieved user's location: [" + latitude + ", " + longitude + "]");

		geoFire.set(user, [latitude, longitude]).then(function() {
		log("Current user " + user + "'s location has been added to GeoFire");
	  
	    // When the user disconnects from Firebase (e.g. closes the app, exits the browser),
	    // remove their GeoFire entry
	    firebaseRef.child(user).onDisconnect().remove();

	    log("Added handler to remove user " + user + " from GeoFire when you leave this page.");
	  }).catch(function(error) {
	    log("Error adding user " + user + "'s location to GeoFire");
	  });
	};

	/* Handles any errors from trying to get the user's current location */
	var errorHandler = function(error) {
	  if (error.code == 1) {
	    log("Error: PERMISSION_DENIED: User denied access to their location");
	  } else if (error.code === 2) {
	    log("Error: POSITION_UNAVAILABLE: Network is down or positioning satellites cannot be reached");
	  } else if (error.code === 3) {
	    log("Error: TIMEOUT: Calculating the user's location too took long");
	  } else {
	    log("Unexpected error code");
	  }
	};

	/* Logs to the page instead of the console */
	function log(message) {
		var childDiv = document.createElement("div");
		var textNode = document.createTextNode(message);
		childDiv.appendChild(textNode);
		document.getElementById("log").appendChild(childDiv);
	}


	return {
		getLocation,
		geolocationCallback,
		errorHandler,
		log
	};

	

});