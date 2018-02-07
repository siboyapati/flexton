'use strict';

/* Controllers */

var gitAppControllers = angular.module('gitAppControllers', []);

gitAppControllers.controller('HomeCtrl', ['$scope', '$http', 'Git',
    function ($scope, $http, Git) {

        Git.getUsersFromOrg().then(function (res) {
            if (res.data.statusCode >= 400) {
                $scope.error = res.data.message;
            } else {
                $scope.userList = res.data;

            }
        }, function (error) {
            $scope.error = error;
        });

        $scope.getProfileInfo = function (user) {
            if (!user.login) {
                return;
            }
            $scope.userDetails = user;
            Git.getProfileInfo(user.login).then(function (res) {
                $scope.getUserInfo = res.data.getUserInfo;
                $scope.getUserRepos = res.data.getUserRepos;
                $scope.listOfReposContributedTo = res.data.listOfReposContributedTo;
                if (!res.data.getUserInfo) {
                    $scope.error = res.data.message;
                }
            }, function (error) {
                    console.log(err)
            })
        }
    }]);

gitAppControllers.controller('AboutCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {

    }]);
