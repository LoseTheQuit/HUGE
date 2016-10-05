'use strict';

console.log("OUTSIDE: alloy Controller");

app.controller('alloyController', function($scope, $http, alloyService) {
  $scope.theRemoverr = function extractText(str) {
    var m = str.match(/(?:"[^"]*"|^[^"]*$)/)[0].replace(/"/g, "");
    return m;
  };
  console.log("INSIDE: alloy Controller");

  $scope.refresh = function() {

    alloyService.getTurner(function(response) {

      console.log("_________________________________");
      console.log("getTurner response.DATA: ");
      console.info(response);
      console.log("_________________________________");
      console.log(Object.keys(response.data[0].Awards[0]));

      for (var key in response.data[0]) {

        console.log("key: " + key)
      }
      $scope.movieData = response;

    });

  }

  $scope.refresh();

  $scope.turnerTitleSearch = () => {
    if ($scope.titleSearchQuery.length >= 1) {
      alloyService.getTurnerWithQuery({

        q: $scope.titleSearchQuery,

      }, function(response) {

        // SPOTIFYDATA IS USED IN THE VIEW TO PRESENT DATA
        $scope.movieData = response;

        console.log("_________________________________");
        console.log("SPOTIFY response.DATA: ");
        console.info(response.data);
        console.log("SPOTIFY response: ");
        console.info(response);
        console.log("_________________________________");

      });
    }

  }

});
