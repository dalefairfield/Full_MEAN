app.controller('indexController', ['$scope','friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
   var index = function(){
     console.log("new controller index SHOW THEM ALL")
                friendsFactory.index(function(returnedData){
                  $scope.friends = returnedData;
                  console.log($scope.friends);
                });
            };
   index();
  //  delete method
  $scope.delete = function(id){
    console.log('delete controller')
    console.log("delete id", id)
    console.log("delete object", $scope.friend)
    friendsFactory.delete(id,  function(returnedData){
      console.log("++++++++++++++++++++++++++++++++++++++++++++++delete")
      // $scope.friend=returnedData;
      console.log($scope.friend);
      $location.url('index')
    })
  }
 }]);
