var express = require('express');
var router = express.Router();
var github = require('octonode');
var client = github.client();
var async = require('async');
const request = require('request-promise');
const _ = require('lodash');
const config = require('../config.js');

// Increase the Github API Rate limit exceeded
var auth_url = github.auth.config({
    id: config.client_id,
    secret: config.client_secret,
    apiUrl: 'http://localhost:3000/api/v3',
    webUrl: 'http://localhost:3000/'
}).login(['user', 'repo', 'gist']);

router.get('/getUsersFromOrg', function (req, res, next) {
    var ghorg = client.org(config.company);
    ghorg.members(function (err, data) {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
});

router.get('/getProfileInfo/:username', function (req, res) {
    var user = req.params.username;
    var gitUser = client.user(user);
    async.auto({
        getUserInfo: function (callback) {
            gitUser.info(function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, result);
                }
            })
        },
        getUserRepos: function (callback) {
            getRepos(user).then(function (result) {
                callback(null, result);
            }, function (err) {
                callback(err);
            })
        },
        listOfReposContributedTo: function (callback) {
            listOfReposContributedTo(user).then(function (result) {
                callback(null, result);
            }, function (err) {
                callback(err);
            })
        }
    }, function (err, results) {
        if (err) {
            res.json(err);
        } else {
            res.json(results)
        }
    });

})

function getRepos(username) {
    const options = {
        method: 'GET',
        uri: 'https://api.github.com/users/' + username + '/repos',
        headers: {
            'User-Agent': 'request'
        }
    }
    return new Promise((resolve, reject) => {
        request(options)
            .then(function (response) {
                // let followers = _.map(JSON.parse(response), 'login');
                resolve(JSON.parse(response));
            })
            .catch(function (response) {
                reject(response);
            })
    })
}

function listOfReposContributedTo(username) {
    const options = {
        method: 'GET',
        uri: 'https://api.github.com/users/' + username + '/received_events',
        headers: {
            'User-Agent': 'request'
        }
    }
    return new Promise((resolve, reject) => {
        request(options)
            .then(function (response) {
                var obj = {};
                response = JSON.parse(response);
                obj.total = response.length;
                var arr = response.map(r => {
                    if (r.repo && r.repo.name) {
                        return r.repo.name;
                    }
                })
                // Remove the duplicate repos.
                obj.arr = arr.filter((el, i, a) => i === a.indexOf(el));
                resolve(obj);
            })
            .catch(function (response) {
                reject(response);
            })
    })
}

module.exports = router;
