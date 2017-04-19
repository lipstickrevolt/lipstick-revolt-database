angular.module('myApp', ["ngRoute"])

.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when("/home", {
            templateUrl: "Home/home.html",
            controller: "homeController"
        })
        .when("/about", {
            templateUrl: "About/about.html",
            controller: "aboutController"
        })
        .when("/contact", {
            templateUrl: "Contact/contact.html",
            controller: "contactController"
        })
        .when("/music", {
            templateUrl: "Music/music.html",
            controller: "musicController"
        })
        .when("/tech", {
            templateUrl: "Tech/tech.html",
            controller: "techController"
        })
        .when("/users", {
            templateUrl: "Users/users.html",
            controller: "userController"
        })
        .otherwise({
            redirectTo: "/home"
        });





}]);