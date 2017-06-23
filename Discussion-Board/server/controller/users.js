var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
//     show: function(req, res) {
//     Item.find({}).sort('-createdAt').exec(function(err, items){
//        if(!err){
//             res.json(items);
//         }
//         else{
//             console.log(err);
//             res.json(err);
//         }
//     });
//   },
  create: function(req, res) {
    console.log("users.js create req.body", req.body);
    User.find({username : req.body.username}, function(err, user){
        if(user.length > 0){
            console.log("User exists");
            res.json(true);
        }
        else{
            console.log("User doesnt exist");
            User.create(req.body)
            .then((data) =>{
                console.log('successfully added a user!', data);
                res.json(true);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({message: "Unable to add user"});
            });
        }
    })
  },

  showOne: function(req,res){
      console.log("Inside show one of user.js", req.params.name);
      User.find({username: req.params.name}).populate('topics').populate('comments').populate('posts').exec(function(err, user){
        if(!err){
            console.log("User in server side", user)
            res.json(user);
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
