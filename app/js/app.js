'use strict';

angular.module('myApp', ['myApp.controllers', 'ngRoute']);

angular.module('myApp').config(function($routeProvider, $locationProvider){
	$routeProvider.when('/view1', {
		controller: 'Controller1',
		templateUrl: 'partials/view1.html'
	}).when('/view2/:firstname/:lastname', {
		controller: 'Controller2',
		templateUrl: 'partials/view2.html'
	}).otherwise({redirectTo:'/view1'});
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});


});
