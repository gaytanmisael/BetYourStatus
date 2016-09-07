// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDmXnP8cy63BNqCprLALVQD3WHoDO-Pnjs",
    authDomain: "betyourstatus.firebaseapp.com",
    databaseURL: "https://betyourstatus.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1280699998606760',
      xfbml      : true,
      version    : 'v2.6'
    });

    FB.Event.subscribe('auth.authResponseChange', checkLoginState);
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

'use strict';

// Declare app level module which depends on views, and components
angular.module('BetYourStatus', [
  'ngRoute',
  'BetYourStatus.home'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}]);
