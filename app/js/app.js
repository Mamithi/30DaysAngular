'use strict';

angular.module('myApp', ['myApp.controllers', 'ui.router']);

angular.module('myApp').config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$stateProvider.state('view1', {
		url: '/view1',
		controller: 'Controller1',
		templateUrl: 'partials/view1.html'
	}).state('view2', {
		url: '/view2/:firstname/:lastname',
		controller: 'Controller2',
		resolve: {
			names: function(){
				return ['Misko', 'Vojta', 'Brad'];
			}
		},
		templateUrl: '/partials/view2.html',
		
	});
	$urlRouterProvider.otherwise('/view1');
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});


});
