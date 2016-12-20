console.log('friends controller Back End');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
function FriendsController(){
  this.index = function(req,res){
    //your code here
    Friend.find({}, function(err, results){

      res.json(results);
    })
  };
  this.create = function(req,res){
    console.log("inside friends.js", req.body)
    Friend.create(req.body, function(err, result){
      if(err){
        console.log(err)
      }else{
        res.json(result)
      }
    })
  };
  this.update = function(req,res){
    //your code here
    console.log("update BE")
    console.log(req.params.id)
    console.log("=======================================================")
    console.log(req.body)
    Friend.findOne({_id: req.params.id}, function(err, friend){
      if(err){
        console.log(err);
      }else{
        friend.firstname = req.body.firstname;
        friend.lastname = req.body.lastname;
        friend.birthday = req.body.birthday;
        console.log(friend.firstname)
        console.log(friend.lastname)
        console.log(friend.birthday)
        friend.save(function(err, updatedFriend){
          if (err){
            console.log(err);
          }else{
            res.json(updatedFriend);
          }
        })
      }
    })
  };
  this.delete = function(req,res){
    //your code here
    console.log('delete controller BE')
    Friend.remove({_id: req.params.id}, function(err, result ){
      if(err){
        console.log(err);
      }else{
        res.json({message: "Friend deleted!"});
      }
    })
  };
  this.show = function(req,res){
    //your code here
    console.log("show BE")
    Friend.findOne({_id: req.params.id}, function(err, result){
      console.log(req.params.id)
      res.json(result);
    })
  };
}
module.exports = new FriendsController(); // what does this export?
