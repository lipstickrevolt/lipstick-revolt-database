angular.module('myApp')

    .controller("techController", ["$scope", "getWomen", "getUser", function($scope, getWomen, getUser){
        getWomen.getWomen("Tech").then(function(response){
            $scope.allWomen = response;
        })
        getUser.getCurrentUser().then(function (response) {
            $scope.currentUser = response;
        })
        $scope.submitWoman = function(newWoman){
            newWoman.category = "Tech";
            newWoman.socialMedia = newWoman.socialMedia.split(",");
            getWomen.postWomen(newWoman).then(function(response){
                $scope.allWomen.push(response);
            })

            $scope.newWoman = {};
        }

        $scope.deleteWomen= function(woman, index){
            $scope.allWomen.splice(index, 1);
            getWomen.deleteWomen(woman);
        }
        $scope.saveWomanEdit = function(woman){
            getWomen.editWomen(woman);
            woman.womanEditBox = false;
        }
    }])