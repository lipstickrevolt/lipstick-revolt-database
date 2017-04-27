angular.module("myApp.Auth")

.controller("LoginController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {

    $scope.login = function (user) {

        UserService.login(user).then(function (response) {
            // UserService.saveUser(response.data.user);
            $location.path("/lipstickRevolt");
        },
            function (response) {
            alert(response.data.message);
        });
    }
}]);