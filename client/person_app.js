/**
 * Created by imalonzo on 10/19/16.
 */

var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {

  console.log("in client/person_app.js $routerProvider LOADED");

  $routeProvider
    .when('/', {
      templateUrl: 'partials/show.html'
    })
    .when('/new', {
      templateUrl: 'partials/new.html'
    })
    .when('/edit', {
      templateUrl: 'partials/edit.html'
    })
    .otherwise({
      redirectTo: '/'
    });




});