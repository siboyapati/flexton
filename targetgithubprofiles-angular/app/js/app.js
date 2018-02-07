'use strict';

var gitApp = angular.module('gitHubApp', [
  'ngRoute',
  'gitAppControllers',
  'gitHubService'

]);

gitApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
