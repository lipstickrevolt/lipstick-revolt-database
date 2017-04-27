angular.module('myApp')

    .controller("userController", ["$scope", "getWomen", "getUser", function($scope, getWomen, getUser){

        getUser.getUsers().then(function(response){
            $scope.users = response;
        })

        getUser.getCurrentUser().then(function(response){
            $scope.currentUser = response;

        })
        // $scope.register = function(newUser){
        //     getUser.postUser(newUser).then(function(response){
        //         $scope.users.push(response);
        //     })
        //     $scope.newUser = {};
        // }
        $scope.deleteUser= function(item, index){
            $scope.users.splice(index, 1);
            getUser.deleteUser(item);
        }

        $scope.saveUserEdit = function(user){
            console.log(user._id);
            getUser.editUser(user);
            user.userEditBox = false;
        }

    }])