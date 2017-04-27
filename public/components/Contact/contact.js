angular.module('myApp')

    .controller("contactController", ["$scope", "getWomen", "getUser", function($scope, getWomen, getUser){
        $scope.test = "contact works!";

    }])