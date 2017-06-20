var mongoose = require('mongoose');
var Item = mongoose.model('Item');

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
    console.log(req.body.content);
    Item.create(req.body)
    .then((data) =>{
        console.log('successfully added a item!', data);
        res.json(true);
        // res.status(200).json({message: "Note added successfully"});
    })
    .catch((err) => {
        console.log(err);
        res.status(400).json({message: "Unable to add note"});
    });
  },

  showOne: function(req,res){
      Item.find({_id: req.params.id}, function(err, item){
        if(!err){
            res.json(item);
        }else{
            console.log(err);
            res.json(err);
        }
    });
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
