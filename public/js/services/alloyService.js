'use strict';

console.log("OUTSIDE: alloy Service");

//angular.module("main")
app.service('alloyService', function ($http) {

    console.log("INSIDE: alloy Service");

    this.getTurner = function (callback) {
        console.log("success from getHomeBrew");

        $http({
            url: '/turner',
            method: "GET"
        })

        .then(callback);

    };

    this.getTurnerWithQuery = function (query, callback) {
        console.log("success from getHomeBrew");

        $http({
            url: '/query',
            method: "POST",
            data: query
        })

        .then(callback);

    };

});
