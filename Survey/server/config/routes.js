// Change controller file name if it is changed and same with the routes as well
var survey = require('../controller/survey.js');
var path = require('path');

module.exports = function(app){

  app.post('/user', function(req, res){
    survey.createUser(req,res);
  });

  app.post('/survey/create/:name', function(req, res){
    survey.createSurvey(req,res);
  });
  
  app.get('/survey', function(req, res){
    survey.retrieveSurveys(req,res);
  });

  app.get('/survey/:id', function(req, res){
    survey.showOne(req,res);
  });

  app.post('/survey/vote', function(req, res){
    survey.vote(req,res);
  });

  app.post('/survey/delete', function(req, res){
    survey.delete(req,res);
  });

  app.all("*", function(req,res){
    res.sendFile(path.resolve("./public/dist/index.html"));
  });
};
