angular.module('myApp', []).controller('GreetingController', function($scope){
	$scope.now = new Date();
	$scope.helloMsgs = ["Hello", "Bonjour", 'Hola', 'Ciao', 'Hallo'];
	$scope.greeting = $scope.helloMsgs[0];

	$scope.getRandomHelloMsg = function(){
		$scope.greeting = $scope.helloMsgs[parseInt((Math.random()*$scope.helloMsgs.length))];
	}
});