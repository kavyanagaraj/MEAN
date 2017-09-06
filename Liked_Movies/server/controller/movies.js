var path = require('path');
var fs = require("fs");
var jsonfile = require('jsonfile')
var file = './api/data.json'

module.exports = {
    show: function(req, res) {
        var jsonContent = jsonfile.readFileSync(file);
        res.json(jsonContent.movies);
    },

    getReview: function(req,res){
        var jsonContent = jsonfile.readFileSync(file);
        var review = jsonContent.reviews[req.params.id - 1];
        res.json(review)
    }

}  