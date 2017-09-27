'use strict';

angular.module('myApp', [
		'myApp.controllers'
	]);

angular.module('myApp').run(function($rootScope){
	$rootScope.title = 'Famous Books';
	$rootScope.name = "Root Scope";
})