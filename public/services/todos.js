angular.module('todoService', [])

.factory('todos', function ($http) {
	return {
	    get : function() {
	        return $http.get('/api/todo');
	    },
	    create : function(todoData) {
	    	console.log(todoData);
	        $http.post('/api/todo', todoData);
	        return $http.get('/api/todo');
	    },
	    delete : function(id) {
	        $http.delete('/api/todo/' + id);
	        return $http.get('/api/todo');
	    },
	    update : function(id, todoData) {
	    	console.log(todoData);
	    	console.log(id);
	    	$http({method: 'PUT', url: '/api/todo/' + id, data: todoData})
	    	// $http.put('/api/todo/' + id, todoData);
	    	return $http.get('/api/todo');
	    }
	}
});