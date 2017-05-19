angular.module('myApp', ["ngRoute", "myApp.Auth", "ngMaterial", "materialCalendar", "ui.bootstrap"])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider.hashPrefix("");

    $routeProvider
        .when("/home", {
            templateUrl: "components/Home/home.html",
            controller: "homeController"
        })
        .when("/about", {
            templateUrl: "components/About/about.html",
            controller: "aboutController"
        })
        .when("/contact", {
            templateUrl: "components/Contact/contact.html",
            controller: "contactController"
        })
        .when("/music", {
            templateUrl: "components/Music/music.html",
            controller: "musicController"
        })
        .when("/tech", {
            templateUrl: "components/Tech/tech.html",
            controller: "techController"
        })
        .when("/events", {
            templateUrl: "components/events/events.html",
            controller: "eventsController"
        })
        .when("/users", {
            templateUrl: "components/Users/users.html",
            controller: "userController"
        })
        .when("/calendar", {
        templateUrl: "components/calendar/calendar.html",
        controller: "calendarController"
        })
        .when("/profile", {
            templateUrl: "components/profile/profile.html",
            controller: "profileController"
        })
        .otherwise({
            redirectTo: "/home"
        });





}]);