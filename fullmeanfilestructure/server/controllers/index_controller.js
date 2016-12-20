  myApp.controller('index_controller1', ['$scope', 'userFactory', function ($scope, userFactory){
  userFactory.getUsers(function(data){
    $scope.users =data;
  })
  $scope.deleteUsers = function (index){
        userFactory.delete(index, function(data){
        });

  }]);
