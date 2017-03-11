"use strict";

app.controller("TwitterMapCtrl", function(twitterFactory){
console.log("TwitterMapCtrl");
	twitterFactory.getUserLocation();

});