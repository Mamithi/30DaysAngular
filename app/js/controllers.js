'use strict';

angular.module('myApp.controllers', []).controller('Controller1', function($scope, $location){
	$scope.loadView2 = function(){
		$location.path('/view2/'+$scope.firstname+'/'+$scope.lastname);
	}
}).controller('Controller2', function($scope, $routeParams, names){
	$scope.firstname = $routeParams.firstname;
	$scope.lastname = $routeParams.lastname;
	$scope.names = names;
});