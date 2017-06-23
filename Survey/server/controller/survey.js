var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');
var User = mongoose.model('User');

module.exports = {

    //to add a new user
    createUser: function(req, res) {
    console.log("survey.js create req.body", req.body);
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

    createSurvey: function(req, res) {
    console.log("creating survey with username", req.params.name);
    User.findOne({ username : req.params.name}, function(err, user){
        var survey = new Survey(req.body);
        survey._user = user._id;
        survey.save(function(err){
            user._surveys.push(survey);
            user.save(function(err){
                if(err){
                    console.log("Error saving survey in user");
                }
                else {
                    res.json(true);
                }
            })
        })
    })
},

    retrieveSurveys: function(req, res){
    Survey.find({}).sort('-createdAt').populate('_user').exec(function(err, items){
        if(!err){
            res.json(items);
        }
        else{
            console.log(err);
            res.json(err);
        }
    });
},

    showOne: function(req,res){
      Survey.find({_id: req.params.id}).populate('_user').exec(function(err, survey){
        if(!err){
            res.json(survey);
        }else{
            console.log(err);
            res.json(err);
        }
    });
},

    vote : function(req, res){
        console.log("In server vote up", req.body);
        Survey.findOne({_id: req.body.surveyid}, function(err, survey){
        if(!err){
            switch (req.body.optionIs) {
                case "option1":
                    console.log("Before",survey.option1.votes)
                    survey.option1.votes = survey.option1.votes + 1;
                    console.log("After", survey.option1.votes)
                    break;
                
                case "option2":
                    survey.option2.votes = survey.option2.votes + 1;
                    break;

                case "option3":
                    survey.option3.votes = survey.option3.votes + 1;
                    break;  

                case "option4":
                    survey.option4.votes = survey.option4.votes + 1;
                    break;
                default:
                    break;
                }
                console.log("Voting up a survey before save", survey);
            Survey.update({_id: req.body.surveyid}, survey)
            .then(response => {res.json(response)})
            .catch(err=>console.log('error at update vote',err));
        }else{
            console.log(err);
            res.json(err);
        }
    });
},

    delete : function(req, res){
        console.log("inside delete server side", req.body);
        Survey.remove({_id: req.body._id})
        .then(response => { "Deleted successfully", res.json(response)})
        .catch(err=>console.log('error in delete survey',err))
    }
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
//   create: function(req, res) {
//     console.log(req.body.content);
//     Item.create(req.body)
//     .then((data) =>{
//         console.log('successfully added a item!', data);
//         res.json(true);
//         // res.status(200).json({message: "Note added successfully"});
//     })
//     .catch((err) => {
//         console.log(err);
//         res.status(400).json({message: "Unable to add note"});
//     });
//   },

//   showOne: function(req,res){
//       Item.find({_id: req.params.id}, function(err, item){
//         if(!err){
//             res.json(item);
//         }else{
//             console.log(err);
//             res.json(err);
//         }
//     });
//   },

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
