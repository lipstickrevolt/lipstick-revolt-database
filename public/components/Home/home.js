angular.module('myApp')

.controller("homeController", ["$scope", "getWomen", "getUser", "$location", "UserService", "getEvents", function($scope, getWomen, getUser, $location, UserService, getEvents){
   
    getWomen.getWomen().then(function(response){
       $scope.allWomen = response;
   })

   getUser.getCurrentUser().then(function (response) {
       $scope.currentUser = response;
   })

    $scope.userEditBox = false;

    getUser.getUsers().then(function(response){
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

    $scope.submitEvent = function(newEvent){
        getEvents.postEvent(newEvent);

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