app.controller('showController', ['$scope','friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams) {


    friendsFactory.getFriend(function(returnedData){
      $scope.friend = returnedData;
      console.log($scope.friend);
    });

    $scope.show = function(){
      console.log($routeParams)
      console.log("show controller show function", $scope.friend)
      friendsFactory.show($routeParams.id, function(returnedData){
        $scope.friend=returnedData;
        console.log("show controller finish", returnedData)
      })
    }
}]);
