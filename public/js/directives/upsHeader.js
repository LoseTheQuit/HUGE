'use strict';

console.log("OUTSIDE: alloy Directive");

angular.module("main")
  .directive('upsheader', function() {

    console.log("INSIDE: alloy Directive");

    return {
      templateUrl: '../templates/header.html',
      controller: 'alloyController',
      replace: false
    }

  });
