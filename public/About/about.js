angular.module('myApp')

    .controller("aboutController", ["$scope", "getWomen", function($scope, getWomen){
        getWomen.getWomen().then(function(response){
            $scope.allusers = response;

        })




    }])