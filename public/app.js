angular.module('myApp', ["ngRoute", "myApp.Auth"])

.config(['$routeProvider', function($routeProvider){
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
        .when("/users", {
            templateUrl: "components/Users/users.html",
            controller: "userController"
        })
        .otherwise({
            redirectTo: "/home"
        });





}]);