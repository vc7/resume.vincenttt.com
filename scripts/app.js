angular.module('app', ['AppServices'])

.run(['VincentSDK', '$rootScope', function (AppServices, $rootScope) {

	$rootScope.rawData = Vincent._resumeData;
	
}]);