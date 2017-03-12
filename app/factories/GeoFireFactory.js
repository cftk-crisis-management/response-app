"use strict";

app.factory("GeoFireFactory", function ($http, $q, AuthFactory, FBCreds) {



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



	var geolocationCallback = function(location) {
		let user = AuthFactory.getUser();

		//console.log("LOCATION", location.coords);
		//Geoposition {coords: Coordinates, timestamp: 1489283776769}
		
		let locationData = {
			uid: user,
			lattitude: location.coords.latitude,
			longitude: location.coords.longitude,
		};

		return new Promise((resolve, reject) => {
			$http.post(`${FBCreds.URL}/location.json`, angular.toJson(locationData))
			.then((location) => {
				resolve(location);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
	

	var getLocationFromFireBase = () => {
		let currentUser = AuthFactory.getUser();
		let items = [];

		return new Promise((resolve, reject) => {
			$http.get(`${FBCreds.URL}/location.json?orderBy="uid"&equalTo="${currentUser}"`)
			.then((itemObject) => {
				let itemCollection = itemObject.data;			
				Object.keys(itemCollection).forEach((key) =>{
					itemCollection[key].id = key;
					items.push(itemCollection[key]);
				});
				resolve(items);
			})
			.catch((error) => {
				reject(error);
			});
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
		getLocationFromFireBase,
		errorHandler,
		log
	};

	

});