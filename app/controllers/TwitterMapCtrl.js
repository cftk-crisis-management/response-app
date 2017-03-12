"use strict";

app.controller("TwitterMapCtrl", function($scope, TwitterFactory, GeoFireFactory, $q, AuthFactory, $http){
console.log("TwitterMapCtrl");

//we call on the GeoFireFactory to get the user's location, then we send that location to the Twitterfactory.
//Then the TwitterFactory will use that user's location to query the twitter api
	var map;
  function initMap() {
    console.log("DO I EXIST!!!");
    map = new google.maps.Map(document.getElementById('map'), {
       center: {lat: -34.397, lng: 150.644},
       zoom: 8
    });
  }
  initMap();
 // GeoFireFactory.getLocation();

  TwitterFactory.getUserLocation();
});

