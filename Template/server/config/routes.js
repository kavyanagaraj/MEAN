// Change controller file name if it is changed and same with the routes as well
var items = require('../controller/items.js');
var path = require('path');

module.exports = function(app){
  app.get('/items', function(req, res){
    items.show(req,res);
  });

  app.get('/items/:id', function(req, res){
    items.showOne(req,res);
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
    res.sendfile(path.resolve("./public/dist/index.html"));
  });
};
