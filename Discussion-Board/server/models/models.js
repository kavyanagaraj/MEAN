var mongoose = require('mongoose');
var Schema = mongoose.Schema
//User Schema
var UserSchema = new mongoose.Schema({
username: {type:String, required:true},
topics: [{type:Schema.Types.ObjectId, ref: 'Topic'}],
comments: [{type:Schema.Types.ObjectId, ref: 'Comment'}],
posts: [{type:Schema.Types.ObjectId, ref: 'Post'}]
});
mongoose.model('User',UserSchema);

//Topic Schema
var TopicSchema = new mongoose.Schema({
_user: {type : Schema.Types.ObjectId, ref:'User'}, 
posts: [{type : Schema.Types.ObjectId, ref: 'Post'}],
description:{ type: String, required: true},
content: { type: String, required: true},
category:{ type: String, required: true}
});
mongoose.model('Topic',TopicSchema);

//Post Schema
var PostSchema = new mongoose.Schema({
_user: {type:Schema.Types.ObjectId, ref:'User'},
username : {type: String}, 
_topic: {type:Schema.Types.ObjectId, ref:'Topic'}, 
content: { type: String, required: true},
upvotes:[{type:Schema.Types.ObjectId, ref: 'User'}],
downvotes:[{type:Schema.Types.ObjectId, ref: 'User'}],
comments:[{type:Schema.Types.ObjectId, ref: 'Comment'}],
});
mongoose.model('Post',PostSchema);

//Comment Schema
var CommentSchema = new mongoose.Schema({
_user: {type:Schema.Types.ObjectId, ref:'User'}, 
_post: {type:Schema.Types.ObjectId, ref:'Post'}, 
content: { type: String, required: true},
});
mongoose.model('Comment',CommentSchema);