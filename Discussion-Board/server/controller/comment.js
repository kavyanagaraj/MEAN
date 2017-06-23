var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User')
var Post = mongoose.model('Post')
var Comment = mongoose.model('Comment')

module.exports = {
    createcomment: function(req, res){
    console.log("Inside create comment of comment.js");
    User.findOne({username: req.params.name}, function(err, user){
        Post.findOne({_id : req.body._post}, function(err, post){
            var comment = new Comment();
            comment.content = req.body.content;
            comment._user = user._id;
            comment._post = req.body._post;
            comment.save(function(err){
                console.log("In comment save", comment);
                user.comments.push(comment._id);
                post.comments.push(comment._id);
                console.log("Pushed comment to user", user);
                console.log("Pushed comment to post", post);
                user.save(function(err){
                   console.log("Inside save comment for user")
                   post.save(function(err){
                       if(err){
                            console.log("Error saving comments");
                        }
                        else {
                            res.json(true);
                        }
                   })
               }) 
            })
        })        
    })    
}
}    