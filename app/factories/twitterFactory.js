"use strict";

app.factory("TwitterFactory", function($http, $q, GeoFireFactory, AuthFactory){
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


	 let getTweets = () => {
	 	let tweets = [];
	 	let user = AuthFactory.getUser();

	 	return $q((resolve, reject) => {
	 		$http.get(`https://api.twitter.com/1.1/geo/search.json?query=${user.latitude},${user.longitude}`)
	 		.then((tweetObject) => {
	 			let tweetCollection = tweetObject.data;
	 			Object.keys(tweetCollection).forEach((key) => {
	 				tweetCollection[key].id = key;
	 				tweets.push(tweetCollection[key]);
	 			});
	 			resolve(tweets);
	 		})
	 		.catch((error) => {
	 			reject(error);
	 		});
	 	});
	 };


    return {getUserLocation};
});