angular.module('myApp')

.controller("homeController", ["$scope", "getWomen", "getUser", "$location", function($scope, getWomen, getUser, $location){
   getWomen.getWomen().then(function(response){
       $scope.allWomen = response;
   })

    $scope.userEditBox = false;

    getUser.getUser().then(function(response){
       $scope.users = response;
   })
    $scope.saveWomanEdit = function(woman){

        getWomen.editWomen(woman);
        woman.womanEditBox = false;
    }
    $scope.deleteWomen= function(women, index){
        $scope.allWomen.splice(index, 1);
        getWomen.deleteWomen(women);
    }

    $scope.submitWoman = function(newWoman){
        getWomen.postWomen(newWoman).then(function(response){
            $scope.allWomen.push(response);
        })
        $scope.newWoman = {};
    }
    $scope.register = function(newUser){
       getUser.postUser(newUser).then(function(response){
           $location.path("/users")
       })
       $scope.newUser = {};
   }
   $scope.deleteUser= function(item, index){
        $scope.users.splice(index, 1);
        getUser.deleteUser(item);
    }
   $scope.saveUserEdit = function(user){
       console.log(user._id);
       getUser.editUser(user);
       $scope.userEditBox = false;
   }



}])