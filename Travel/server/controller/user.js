var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt'); 

module.exports = {
    show: function(req, res) {
    Item.find({}).sort('-createdAt').exec(function(err, items){
       if(!err){
            res.json(items);
        }
        else{
            console.log(err);
            res.json(err);
        }
    });
  },
  create: function(req, res) {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
    console.log("inside create",req.body);
    User.findOne({email: req.body.email}, function(err,user) {
        if(user){
            console.log("user exists", user)
            res.json({message: "Email is registered please login", register : false});
        } else{
            console.log("user doesn't exist", user);
            User.create(req.body)
            .then((data) =>{
                console.log('successfully added a user!', data);
                res.json({message: "Created user", register : true, user: data});
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({message: "Unable to add user"});
            });
        }
    })



    // User.findOne({email: req.body.email}, function(err, user){
    //     console.log(err)
    //     console.log("Inside find")
    //     if(user.length > 0){
    //         console.log("User exists")
    //         // res.json(user);
    //     }else{
    //         console.log("User doesn't exist")
    //         // User.create(req.body)
    //         // .then((data) =>{
    //         //     console.log('successfully added a user!', data);
    //         //     res.json(true);
    //         //     // res.status(200).json({message: "Note added successfully"});
    //         // })
    //         // .catch((err) => {
    //         //     console.log(err);
    //         //     res.status(400).json({message: "Unable to add user"});
    //         // });
    //     }
    // });
  },

  showOne: function(req,res){
      User.findOne({email: req.body.email})
      .then((user) => {
        console.log("in then user", user);  
            if (user != null){
                console.log("Passwords match", bcrypt.compareSync(req.body.password, user.password));
                if(!bcrypt.compareSync(req.body.password, user.password)){
                    res.json({message : "Username or password doesn't match", login : false, user : user});
                }
                else{
                    res.json({message : "User exists", login : true, user : user});
                }
            }  
            else{
                res.json(user);
                console.log("User is null")
            }
        })
      .catch((err) => {
          console.log(err);
           res.json({message : "Error", error : err});
        })
    }
}