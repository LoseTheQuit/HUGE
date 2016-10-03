'use strict';

console.log("OUTSIDE: prettyJSON");

angular.module("main")
console.log("INSIDE: prettyJSON");
  app.filter('prettyJSON', function () {
    function prettyPrintJson(json) {
        return JSON ? JSON.stringify(json, null, '  ') : 'your browser doesnt support JSON so cant pretty print';
    }
    return prettyPrintJson;
});
