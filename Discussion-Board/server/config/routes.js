// Change controller file name if it is changed and same with the routes as well
var users = require('../controller/users.js');
var topics = require('../controller/topics.js');
var post = require('../controller/post.js');
var comment = require('../controller/comment.js');
var path = require('path');

module.exports = function(app){
  //user routes
  app.get('/user/:name', function(req, res){
    console.log("Inside routes.js get user", req.params.name);
    users.showOne(req,res);
  });

  app.post('/user', function(req, res){
    users.create(req,res);
  });

  // app.put('/items/:id', function(req, res){
  //   items.updateOne(req, res);
  // });

  // app.delete('/items/:id', function(req, res){
  //   items.deleteOne(req, res);
  // });

  //topic routes
  app.get('/topic', function(req, res){
    topics.show(req,res);
  });

  app.post('/topic/:name', function(req, res){
    topics.create(req,res);
  });

  app.get('/topic/:id', function(req, res){
    topics.showOne(req,res);
  });


  //post routes

  app.post('/post/:name', function(req, res){
    post.create(req,res);
  });

  app.post('/upvote', function(req, res){
    post.upvote(req,res);
  });

  app.post('/downvote', function(req, res){
    post.downvote(req,res);
  });

  app.post('/comment/:name', function(req, res){
    comment.createcomment(req,res);
  });

  

 app.all("*", function(req,res){
    res.sendFile(path.resolve("./public/dist/index.html"));
  });

};
