angular.module("myApp")

.controller("eventsController", ["$scope", "getEvents", "getUser", function($scope, getEvents, getUser){

    event.eventEditBox = false;
    $scope.events = [];
    getEvents.getEvents().then(function(data){
        $scope.events = data;
        return data
    })

    getUser.getCurrentUser().then(function (response) {
        $scope.currentUser = response;
    })

    $scope.deleteEvent= function(event, index){
        $scope.events.splice(index, 1);
        getEvents.deleteEvent(event);
    }

    $scope.saveEventEdit = function(event){
        getEvents.editEvent(event);
        event.eventEditBox = false;
    }

}])