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

app.factory('BooksFactory', ['$http', function ($http) {
    return {
        get: function () {
            return $http.get('/api/books/');
        },
        post: function (body) {
            return $http.post('/api/books', body);
        },
        update: function (id, body) {
            return $http.put('/api/books/:' + id, body);
        },
        delete: function (id) {
            return $http.delete('/api/books/:' + id);
        }
    }
}]);

app.controller('mainController', function ($scope, BooksFactory) {

    $scope.addBooks = function () {
        BooksFactory.post($scope.books).then(function (response) {
            $scope.books = {};
            $scope.getAll();
        })
    }

    $scope.getAll = function () {
        BooksFactory.get().then(function (books) {
            $scope.allBooks = books.data;
        })
    }

    $scope.updata = function (id, data) {
        BooksFactory.updata(id, data).then(function (data) {
            $scope.getAll();
        })
    }

    $scope.delete = function (id) {
        BooksFactory.delete(id).then(function (data) {
            $scope.getAll();
        })
    }

    $scope.getAll();

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


