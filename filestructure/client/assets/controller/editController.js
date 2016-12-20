app.controller('editController', ['$scope','friendsFactory','$routeParams', function($scope, friendsFactory, $routeParams) {
  /*
    GET A FRIEND FROM THE FACTORY, This is a one time thing when we load this partial -
    so we didn't set a variable so we could reuse it -
    we just run the friendsFactory method directly.
  */
  var show = function(id){
      console.log($routeParams)
      // console.log("show controller show function", $scope.friend)
      friendsFactory.show($routeParams.id, function(returnedData){
        $scope.friend=returnedData;
        $scope.friend.birthday=new Date($scope.friend.birthday)
        console.log("Date",   $scope.friend.birthday)
        console.log("Date",   typeof($scope.friend.birthday))
        console.log("show controller finish", returnedData)
      })
    }
    show();

   $scope.update = function(id){
     console.log("update controller edit function", $routeParams.id)
     console.log("friend",   $scope.friend)
     friendsFactory.update($scope.friend, $routeParams.id, function(returnedData){
       $scope.friend=returnedData;
       $scope.friend.birthday=new Date($scope.friend.birthday)
       console.log(returnedData)
     })
   }

  /*
    OUR $scope.update function goes here <-- $scope because we need to access this method
    with ng-submit or ng-click (from the form in the previous assignment).  Want to see
    all of the friends when we get back including the updated on??
    See Index in the previous controller.
  */
}]);
