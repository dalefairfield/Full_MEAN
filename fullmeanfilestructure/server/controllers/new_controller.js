  myApp.controller('new_controller1', ['$scope', 'userFactory', function ($scope, userFactory){
      $scope.addUsers = function (){
        userFactory.create($scope.user, function(data){
          $scope.user = {};
      })
    }
  }
