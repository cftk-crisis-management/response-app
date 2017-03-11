"use strict";

app.controller("TwitterMapCtrl", function($scope, TwitterFactory){
console.log("TwitterMapCtrl");

//we call on the GeoFireFactory to get the user's location, then we send that location to the Twitterfactory.
//Then the TwitterFactory will use that user's location to query the twitter api
	GeoFireFactory.getLocation();

	TwitterFactory.getUserLocation();

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


});