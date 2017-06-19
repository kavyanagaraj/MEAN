var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    show: function(req, res) {
    Note.find({}).sort('-createdAt').exec(function(err, notes){
       if(!err){
            res.json(notes);
        }
        else{
            console.log(err);
        }
    });
  },
  create: function(req, res) {
    console.log(req.body.content);
    Note.create({content : req.body.content})
    .then((data) =>{
        console.log('successfully added a note!', data);
        res.json(true);
        // res.status(200).json({message: "Note added successfully"});
    })
    .catch((err) => {
        console.log(err);
        res.status(400).json({message: "Unable to add note"});
    });
  }
};
