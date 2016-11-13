angular.module('app')

.controller('MainController', function($scope, $location, $anchorScroll) {

	console.log("clicked");
	
	$scope.scrollTo = function(id) {
		$location.hash(id);
		$anchorScroll();
		console.log("clicked");
	}
});
