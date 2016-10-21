/**
 * Created by imalonzo on 10/19/16.
 */

var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {

  console.log("in client/person_app.js $routerProvider LOADED");

  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html'
    })

    .when('/current', {
      templateUrl: 'partials/current.html'
    })

    .when('/rating', {
      templateUrl: 'partials/rating.html'
    })


    .when('/new', {
      templateUrl: 'partials/new.html'
    })

    .otherwise({
      redirectTo: '/'
    });




});