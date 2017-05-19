angular.module('myApp')

    .service("getWomen", ["$http", function ($http) {

        this.getWomen = function (category) {
            var url = "api/lipstickRevolt";
            // var confi
            if (category){
                url += "?category=" + category;
            }
            return $http.get(url).then(function (response) {
                return response.data
            })
        }

        this.postWomen = function (newWoman) {
            if (newWoman.category === "Both"){
                newWoman.category = ["Music", "Tech"];
            }
            return $http.post('api/lipstickRevolt', newWoman).then(function (newWoman) {
                return newWoman.data
            })
        }

        this.editWomen = function (item) {
            return $http.put('api/lipstickRevolt/' + item._id, item).then(function (response) {
                return response.data
            })
        }

        this.deleteWomen = function (woman) {
            return $http.delete('api/lipstickRevolt/' + woman._id).then(function (response) {
                return "Item deleted!"
            })
        }

    }])

    .service("getUser", ["$http", function ($http) {
        this.getUsers = function () {
            return $http.get('/users').then(function (response) {
                return response.data
            })
        }

        this.getCurrentUser = function(){
            return $http.get('/auth/currentUser').then(function(response){
                return response.data
            })
        }
        this.editUser = function(user){
            return $http.put('/users/' + user._id, user).then(function(response){
                return response.data
            })
        }
        this.deleteUser = function(user){
            return $http.delete('/users/' + user._id).then(function(response){
                return "User Deleted!"
            })
        }


    }])
    .service("getEvents", ["$http", function($http){
        this.getEvents = function (category) {
            var url = "api/event";
            var confi
            if (category){
                url += "?category=" + category;
            }
            return $http.get(url).then(function (response) {
                for(var i = 0; i < response.data.length; i++){
                    response.data[i].date = new Date(response.data[i].date)
                }

                return response.data
            })
        }

        this.postEvent = function (newEvent) {
            if (newEvent.category === "Both"){
                newEvent.category = ["Music", "Tech"];
            }
            return $http.post('api/event', newEvent).then(function (newEvent) {
                return newEvent.data
            })
        }

        this.editEvent = function (item) {
            return $http.put('api/event/' + item._id, item).then(function (response) {
                return response.data
            })
        }

        this.deleteEvent = function (event) {
            return $http.delete('api/event/' + event._id).then(function (response) {
                return "Item deleted!"
            })
        }





    }])