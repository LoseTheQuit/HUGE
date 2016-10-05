'use strict';

console.log("OUTSIDE: FOOTER Directive");

angular.module("main")
  .directive('upsguide', function() {

    console.log("INSIDE: FOOTER Directive");

    return {
      templateUrl: '../templates/guide.html',
      controller: 'alloyController',
      replace: false
    }

  });
