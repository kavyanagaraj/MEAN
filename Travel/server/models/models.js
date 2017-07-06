var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
username: {type : String, required:true},
email : {type : String, required: true},
password : {type : String, 
        required: true,
        },
        // validate: {
        //   validator: function( value ) {
        //     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{3,32}/.test( value );
        //   },
        //   message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        // }},
_trips_created: [{type : Schema.Types.ObjectId, ref: 'Trip'}],
_trips_shared: [{type : Schema.Types.ObjectId, ref: 'Trip'}],
});
mongoose.model('User',UserSchema);

var TripSchema = new mongoose.Schema({
start_date: {type: Date, required:true},
end_date : {type: Date, required: true},
location : {type: String, required: true},
blog : {type: String},
_days : [{note : {type: String, required: true}}],
_user: {type: Schema.Types.ObjectId, ref: 'User'},
_travellers: [{type:Schema.Types.ObjectId, ref: 'User'}],
});
mongoose.model('Trip',TripSchema);

var DaySchema = new mongoose.Schema({
note : {type: String, required: true}
});
mongoose.model('Day',DaySchema);