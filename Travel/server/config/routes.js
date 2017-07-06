// Change controller file name if it is changed and same with the routes as well
var user = require('../controller/user.js');
var trip = require('../controller/trips.js');
var path = require('path');

module.exports = function(app){

  //User routes
  app.post('/user', function(req, res){
    user.create(req,res);
  });

  app.post('/trip', function(req, res){
    trip.create(req,res);
  });

  app.get('/trip', function(req, res){
    trip.show(req,res);
  });

  app.post('/user/login', function(req, res){
    user.showOne(req,res);
  });

  app.post('/items', function(req, res){
    items.create(req,res);
  });

  app.put('/items/:id', function(req, res){
    items.updateOne(req, res);
  });

  app.delete('/items/:id', function(req, res){
    items.deleteOne(req, res);
  });

  app.all("*", function(req,res){
    res.sendFile(path.resolve("./public/dist/index.html"));
  });
};
