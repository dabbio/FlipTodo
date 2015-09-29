angular.module('userService', [])

.factory('users', function ($http) {
	return {
	    get : function() {
	        return $http.get('/api/user');
	    }
	}
});