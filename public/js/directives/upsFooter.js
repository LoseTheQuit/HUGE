'use strict';

console.log("OUTSIDE: FOOTER Directive");

angular.module("main")
  .directive('upsfooter', function() {

    console.log("INSIDE: FOOTER Directive");

    return {
      templateUrl: '../templates/footer.html',
      controller: 'alloyController',
      replace: false
    }

  });
