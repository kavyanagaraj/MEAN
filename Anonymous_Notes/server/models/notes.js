var mongoose = require('mongoose');
var NotesSchema = new mongoose.Schema({
 content: { type: String, required: true}
}, {timestamps: true });
mongoose.model('Note', NotesSchema);
