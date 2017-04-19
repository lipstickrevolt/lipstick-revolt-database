angular.module('myApp')

    .service("getWomen", ["$http", function ($http) {

        this.getWomen = function () {
            return $http.get('/lipstickRevolt').then(function (response) {
                return response.data
            })
        }

        this.postWomen = function (newWoman) {
            return $http.post('/lipstickRevolt', newWoman).then(function (newWoman) {
                return newWoman.data
            })
        }

        this.editWomen = function (item) {
            return $http.put('/lipstickRevolt/' + item._id, item).then(function (response) {
                return response.data
            })
        }

        this.deleteWomen = function (woman) {
            return $http.delete('/lipstickRevolt/' + woman._id).then(function (response) {
                return "Item deleted!"
            })
        }

    }])

    .service("getUser", ["$http", function ($http) {
        this.getUser = function () {
            return $http.get('/users').then(function (response) {
                return response.data
            })
        }
        this.postUser = function (newUser) {
            return $http.post('/users', newUser).then(function (response) {
                return newUser.data
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