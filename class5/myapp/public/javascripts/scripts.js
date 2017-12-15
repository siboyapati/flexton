var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })

        .when('/contact', {
            templateUrl: '/pages/contact.html',
            controller: 'contactController'
        });
});

app.factory('Email', ['$http', function ($http) {
    return {
        get: function () {
            return $http.get('/emails');
        }
    }
}]);

app.controller('mainController', function ($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});

app.controller('aboutController', function ($scope, Email) {
    $scope.message = 'Look! I am an about page.';
    $scope.emails = [];

    $scope.getData = function () {
        Email.get().then(function (pl) {
            $scope.emails = pl.data.emailList;
        }, function (error) {
            $scope.error = error;
        });
    }



});

app.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});


