angular.module('myApp')

    .controller("musicController", ["$scope", "getWomen", "getUser", function($scope, getWomen, getUser){

        getWomen.getWomen("Music").then(function(response){
            $scope.allWomen = response;
        })
        getUser.getCurrentUser().then(function (response) {
            $scope.currentUser = response;
        })
        $scope.submitWoman = function(newWoman){
            newWoman.category = "Music";
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

        $scope.oneAtATime = true;

        $scope.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function() {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };

        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };

    }])