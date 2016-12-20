myApp.factory('userFactory', function (){
    var users = [];
    var factory = {};
    factory.getUsers = function (callback){
        callback(users);
    }
    factory.create=function(data,callback){
      users.push(data);
      console.log(data)
      callback(users);
    }
    factory.delete=function(index,callback){
      users.splice(index,1);
      callback(users);
    }
    return factory;
  });
