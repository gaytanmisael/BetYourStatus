// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDmXnP8cy63BNqCprLALVQD3WHoDO-Pnjs",
    authDomain: "betyourstatus.firebaseapp.com",
    databaseURL: "https://betyourstatus.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);

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
