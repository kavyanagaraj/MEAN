// Change controller file name if it is changed and same with the routes as well
var items = require('../controller/players.js');
var path = require('path');

module.exports = function(app){
  app.get('/players', function(req, res){
    items.show(req,res);
  });

  app.post('/players', function(req, res){
    items.create(req,res);
  });

  app.all("*", function(req,res){
    res.sendFile(path.resolve("./public/dist/index.html"));
  });
};
