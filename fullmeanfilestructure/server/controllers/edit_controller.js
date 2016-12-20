myApp.controller('edit_controller1', ['$scope', 'userFactory', function ($scope, userFactory){
    $scope.addUsers = function (){
      userFactory.update($scope.user, function(data){
        $scope.user = {};
    })
  }
}
