var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {
    show: function(req, res) {
    Player.find({}).sort('-score').exec(function(err, players){
       if(!err){
            res.json(players);
        }
        else{
            console.log(err);
            res.json(err);
        }
    });
  },
  create: function(req, res) {
      Player.find({name : req.body.name}, function(err, item){
          if(item.length < 1){
              console.log("To be created", req.body);
              Player.create(req.body)
                .then((data) =>{
                    console.log('successfully added a Player!', data);
                    res.json(true);
                    // res.status(200).json({message: "Note added successfully"});
                })
                .catch((err) => {
                    console.log(err);
                    res.status(400).json({message: "Unable to add player"});
                });
          }
          else{
              console.log("Exists", item);
              res.json({message: "Player exists"})
          }
      })
  },


  updateOne : function(req, res){
    Item.findById({_id: req.params.id}, function(err, item){
        if(!err){
            dog.name = req.body.name;
            // dog.color = req.body.color;
            // dog.weight = req.body.weight;
            item.save(function(err){
                if(err){
                console.log('something went wrong');
                }
                else{
                  // res.json()
                }
            });
        }else{
            console.log(err);
        }
    });
  }

};
