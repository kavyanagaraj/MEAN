var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User')

module.exports = {
    show: function(req, res) {
    Topic.find({}).sort('-createdAt').populate('_user').populate('posts').exec(function(err, topics){
       if(!err){
            res.json(topics);
        }
        else{
            console.log(err);
            res.json(err);
        }
    });
  },

  create: function(req, res) {
    console.log("creating topic with username", req.params.name);
    User.findOne({ username : req.params.name}, function(err, user){
        var topic = new Topic(req.body);
        topic._user = user._id;
        topic.save(function(err){
            user.topics.push(topic);
            user.save(function(err){
                if(err){
                    console.log("Error saving topics in user");
                }
                else {
                    res.json(true);
                }
            })
        })
    })
  }, 

//   , model: 'Post',
//      populate: {path: 'posts._user', model: 'User'}
  showOne: function(req,res){
      Topic.find({_id: req.params.id}).populate('posts').populate('posts._user').populate('_user').exec(function(err, topic){
        if(!err){
            console.log("Single Topic", topic);
            res.json(topic);
        }else{
            console.log(err);
            res.json(err);
        }
    });
  },

//   updateOne : function(req, res){
//     Item.findById({_id: req.params.id}, function(err, item){
//         if(!err){
//             dog.name = req.body.name;
//             // dog.color = req.body.color;
//             // dog.weight = req.body.weight;
//             item.save(function(err){
//                 if(err){
//                 console.log('something went wrong');
//                 }
//                 else{
//                   // res.json()
//                 }
//             });
//         }else{
//             console.log(err);
//         }
//     });
//   }

};