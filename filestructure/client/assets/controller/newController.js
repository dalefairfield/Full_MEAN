app.controller('newController', ['$scope','friendsFactory', function($scope, friendsFactory) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
  //  var index = function(){
  //    console.log("new controller index function")
  //               friendsFactory.index(function(returnedData){
  //                 $scope.friends = returnedData;
  //                 console.log("new controller index function FINISHED")
  //                 console.log($scope.friends);
  //               });
  //           };
  //  index();
console.log("inside new controller");
   $scope.create = function(){
     console.log("new controller create function", $scope.friend)
     friendsFactory.create($scope.friend, function(returnedData){
       $scope.friend={};
       console.log("new controller create function FINISHED")
       console.log(returnedData)
     })
   }
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method
  with ng-submit or ng-click (from the form in the previous assignment).
  Want to all of the friends when we get back?  We can re-run index.
*/
}]);
