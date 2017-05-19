angular.module("myApp")

.controller("calendarController", ["$scope", "$filter", "getEvents", function($scope, $filter, getEvents){
    $scope.test = "test";
    $scope.events = [];

    var prom = getEvents.getEvents().then(function(data){
        $scope.events = data;
        return data
    });
    $scope.dayFormat = "d";

    $scope.selectedDate = null;
    $scope.firstDayOfWeek = 0;
    $scope.setDirection = function(direction) {
        $scope.direction = direction;
    };
    $scope.dayClick = function(date) {
        $scope.msg = "You clicked " + $filter("date")(date, "MMM d, y h:mm:ss a Z");
    };
    $scope.prevMonth = function(data) {
        $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
    };
    $scope.nextMonth = function(data) {
        $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
    };
    $scope.setDayContent = function(date) {
        return prom.then(function(data){
            var output = "";
            for (var i = 0; i < data.length; i++){
                if (date.toString() === data[i].date.toString() ){
                    console.log(data[i].name);
                    output += "<p class='cool'>" + data[i].name +
                        "</p> <div class='eventDets'><div>" + data[i].description + "</div><div>" + data[i].date + "</div><div>" + data[i].startTime + "</div><div>" + data[i].endTime + "</div> <img src='" + data[i].imgUrl + "'></div>";
                }
            }
            return output;
        })

    };

}])
