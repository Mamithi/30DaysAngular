'use strict';

angular.module('myApp', ['myApp.controllers', 'ngRoute']);

angular.module('myApp').config(function($routeProvider, $locationProvider){
	$routeProvider.when('/view1', {
		controller: 'Controller1',
		templateUrl: '/view1.tpl'
	}).when('/view2/:firstname/:lastname', {
		controller: 'Controller2',
		templateUrl: '/view2.tpl'
	}).otherwise({redirectTo:'/view1'});
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});


});
