'use strict';

angular.module('gitHubService', [])
    .factory('Git', ['$http', function ($http) {

        return {
            getUsersFromOrg: function () {
                return $http.get('/api/getUsersFromOrg');
            },

            getProfileInfo: function (username) {
                return $http.get('/api/getProfileInfo/' + username);
            }

        }
    }]);


