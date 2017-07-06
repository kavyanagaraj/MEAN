var mongoose = require('mongoose');
var Trip = mongoose.model('Trip');
var User = mongoose.model('User');

module.exports = {
    show: function(req, res) {
        var today = new Date();
        console.log(new Date(new Date().getTime()-60*5*1000).toISOString())
        Trip.find({ "end_date": {$lt : new Date(new Date().getTime()-60*5*1000).toISOString()}}).populate('_travellers').populate('_days').sort('-createdAt').exec(function(err, trips){
           if(!err){
               console.log("Trips", trips);
                res.json(trips);
            }
            else{
                console.log("Error getting trips", err);
                res.json(err);
            }
        });
    },
    create : function(req, res){
        console.log("Inside trip create", req.body);
        var travellers = [];

        // for(var i = 0; i < travellers.length; i++){

        User.find({"$or": req.body._travellers})
        .then((data) => {console.log("success", data); 
            //To update travellers id in trip 
            for(user of data){
                travellers.push(user._id);
            } 
            req.body._travellers = travellers;
            console.log("Trip content after replacing user id's", req.body);  
            User.findById({_id : req.body._user})
            .then((user) =>{ 
                var trip = new Trip(req.body);
                console.log("Trip before save", trip);
                trip.save(function(err){
                    if(!err){
                    console.log("Inside trip save", trip);
                    user._trips_created.push(trip);
                    user.save();
                    data.forEach(function(buddy){
                        console.log("Inside buddy", buddy);
                        buddy._trips_shared.push(trip);
                        buddy.save();
                    })
                    res.json(true);
                }
                else{
                    console.log("Error saving trip",err)
                }
                })
            }) 
            .catch((err) => console.log("Error fectching user", err))                    
        })
        .catch((err) => {console.log("error", err)})
    }
}    