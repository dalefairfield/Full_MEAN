console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = {};
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend,callback){
      console.log("inside create factory", newfriend)
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(friend, id,  callback){ // what parameters do we need?
      console.log("update begin factory")
      $http.put('/friends/'+id, friend).then(function(returned_data){
        // console.log(returned_data)
        // console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          console.log("callback")
          callback(returned_data.data);
          // console.log("update end factory")
        }
      });
    };
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      });
 //Note: this can be shortened to $http.get('/friends').then(callback);
 //But only if you only want to run the callback from the controller.
    };
    this.delete = function(id, callback){// what parameters do we need?
        console.log('delete factory')
        $http.delete('/friends/'+id).then(function(returned_data){
          console.log('inside delete factory')
          console.log(returned_data.data);
          friends = returned_data.data;
          callback(friends);
          });
    };
    this.show = function(id, callback){// what parameters do we need?
      // console.log("show factory")
      $http.get('/friends/'+id).then(function(returned_data){
        // console.log(returned_data);
        // console.log(returned_data.data);
        friend = returned_data.data;
        callback(friend);
        // console.log("finish show factory")
        });
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
    this.getFriend = function(callback){
        callback(friend);
    };
  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);
