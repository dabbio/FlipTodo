angular.module('login', [])
	.controller('loginCtrl', ['$scope', '$http', '$location', 'users', function($scope, $http, $location, users) {

        users.get()
            .success(function(data) {
                $scope.users = data;
            });

        $scope.login = function() {
            if (!$.isEmptyObject($scope.formData)) {

                var data = $scope.users;

                console.log(data);

                for(var x in data) {
                    if (data[x].username == $scope.formData.username && data[x].password == $scope.formData.password ) {
                        $location.path( "/todo" );
                    } else {
                        $scope.error = "Incorrect Deets";
                    }
                }
            }
        };
	}]);