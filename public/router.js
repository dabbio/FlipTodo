angular.module('router', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			templateUrl: '/partials/login.html',
			controller: 'loginCtrl'
		})

		.when('/todo', {
			templateUrl: '/partials/todo.html',
			controller: 'mainCtrl'
		});

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

}]);