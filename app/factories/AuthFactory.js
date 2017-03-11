"use strict";

app.factory("AuthFactory", function(){

	let currentUser = null;

	let createUser = function(userObj){
		return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
		.catch( function(error){
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log("error:", errorCode, errorMessage);
		});
	};

	let loginUser = function(userObj) {
		return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
		.catch( function(error){
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log("error:", errorCode, errorMessage);
		});
	};

	let logoutUser = function(){
		console.log("logoutUser");
		return firebase.auth().signOut();
	};


	let isAuthenticated = function (){
		console.log("AuthFactory: isAuthenticated");
		return new Promise ( (resolve, reject) => {
			firebase.auth().onAuthStateChanged( (user) => {
				if (user){
					currentUser = user.uid;
					resolve(true);
				}else {
					resolve(false);
				}
			});
		});
	};

	let getUser = function(){
		return currentUser;
	};


	let provider = new firebase.auth.GoogleAuthProvider();

	let authWithProvider= function(){
    	return firebase.auth().signInWithPopup(provider);
  	};


	let loginGoogle = function () {
		console.log("you clicked login with Google");
		AuthFactory.authWithProvider()
		.then(function(result) {
	    	var user = result.user.uid;
	    	console.log("logged in user:", user);
	    	//Once logged in, go to another view
	    	// $location.path("/login-details");
	    	$scope.$apply();
	  	}).catch(function(error) {
	    	// Handle the Errors.
	    	console.log("error with google login", error);
	    	var errorCode = error.code;
	    	var errorMessage = error.message;
	    	// The email of the user's account used.
	    	var email = error.email;
	    	// The firebase.auth.AuthCredential type that was used.
	    	var credential = error.credential;
	    	// ...
	  	});
	};

	return {createUser, loginUser, logoutUser, isAuthenticated, getUser, authWithProvider, loginGoogle};
});