"use strict";

app.factory("GeoFireFactory", function ($http, $q, AuthFactory, FBCreds) {


	/* Uses the HTML5 geolocation API to get the current user's location */
	var getLocation = function() {
	   if (typeof navigator !== "undefined" && typeof navigator.geolocation !== "undefined") {
	   	console.log("Asking user to get their location");

		navigator.geolocation.getCurrentPosition(geolocationCallback, errorHandler);
	  
		} else {
		console.log("Your browser does not support the HTML5 Geolocation API, so this demo will not work.");
		}
	};

	var geolocationCallback = function(location) {
		console.log("location grabbed"); 

		let user = AuthFactory.getUser();

		let locationData = {
			uid: user,
			lattitude: location.coords.latitude,
			longitude: location.coords.longitude,
		};

		return new Promise((resolve, reject) => {
			$http.post(`${FBCreds.URL}/location.json`, angular.toJson(locationData))
			.then((location) => {
				resolve(location);
				console.log("posted successful to firebase", locationData); 
			})
			.catch((error) => {
				reject(error);
				console.log("error in geolocationCallback promise")
			});
		});
	};
	

	var getLocationFromFireBase = () => {

		console.log("getLocationFromFireBase"); 
		let currentUser = AuthFactory.getUser();
		let items = [];

		return new Promise((resolve, reject) => {
			$http.get(`${FBCreds.URL}/location.json?orderBy="uid"&equalTo="${currentUser}"`)
			.then((itemObject) => {
				let itemCollection = itemObject.data;	

				console.log("Returned data from FB", itemCollection);		
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


	return {
		getLocation,
		geolocationCallback,
		getLocationFromFireBase,
		errorHandler,
	};

	

});