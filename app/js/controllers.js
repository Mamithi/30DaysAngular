'use strict';

angular.module('myApp.controllers', []).controller('Controller1', function($scope){
	$scope.message = "Hello World";
}).controller('Controller2', function($scope){
	$scope.now = new Date();
});