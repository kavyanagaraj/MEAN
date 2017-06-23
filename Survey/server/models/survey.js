var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
username: {type:String, required:true},
_surveys: [{type:Schema.Types.ObjectId, ref: 'Survey'}],
});
mongoose.model('User',UserSchema);

var Option = new Schema({
    name: { type: String, required: true},
    votes : {type : Number}
});
// mongoose.model('Option', OptionSchema);

var SurveySchema = new mongoose.Schema({
 question: { type: String, required: true},
 option1 : Option,
 option2 : Option,
 option3 : Option,
 option4 : Option,
 _user : {type:Schema.Types.ObjectId, ref: 'User'},
 username : { type: String, required: true}
}, {timestamps: true });
mongoose.model('Survey', SurveySchema);
