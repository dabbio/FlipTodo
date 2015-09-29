angular.module('todoCtrl', [])
	.controller('mainCtrl', ['$scope', '$http', 'todos', function($scope, $http, todos) {
		$scope.formData = {};

		todos.get()
            .success(function(data) {
                $scope.todos = data;
            });

        $scope.createTodo = function() {
            if (!$.isEmptyObject($scope.formData)) {
                todos.create($scope.formData)
                    .then(function(response) {
                        $scope.formData = {};
                        console.log(response.data);
                        $scope.todos = response.data;
                    });
            }
        };

        $scope.deleteTodo = function(id) {
            todos.delete(id)
                .success(function(data) {
                    $scope.todos = data;
                });
        };

        $scope.updateTodo = function(id, text) {
        	var x = prompt('Please update your shit', text);
        	var updatedTodo = {text: x};
        	todos.update(id, updatedTodo)
        		.success(function(data) {
        			$scope.todos = data;
        		});
        }
	}]);