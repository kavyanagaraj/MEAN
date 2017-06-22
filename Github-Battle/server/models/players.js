var mongoose = require('mongoose');
var PlayerSchema = new mongoose.Schema({
 name: { type: String, required: true},
 avatar_url : {type: String},
 score : {type : Number}
},
 {timestamps: true });
mongoose.model('Player', PlayerSchema);