var app = window.angular.module('app', []);

app.factory('recipeFetcher', recipeFetcher);
app.controller('mainCtrl', mainCtrl);

function recipeFetcher($http) {

  var API_ROOT = 'recipe';
  return {
    get: function() {
      return $http
        .get(API_ROOT)
        .then(function(resp) {
          return resp.data;
        });
    }
  };

}

function mainCtrl($scope, recipeFetcher,$http) {

  $scope.recipe = [];

  recipeFetcher.get()
    .then(function(data) {
      $scope.recipe = data;
    });

  $scope.addRecipe = function() {
    var formData = { name: $scope.Name, imageUrl: $scope.Url, instructions: $scope.Instructions, ingredients: $scope.Ingredients };
    console.log(formData);
    var recipeURL = '/recipe';
    $http({
      url: recipeURL,
      method: "POST",
      data: formData
    }).success(function(data, status, headers, config) {
      console.log("Post worked");
      window.alert('Recipe added successfully, reload the page to see your new recipe!');
    }).error(function(data, status, headers, config) {
      console.log("Post failed");
    });
  };
}
