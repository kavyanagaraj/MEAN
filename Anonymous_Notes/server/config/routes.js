var notes = require('../controller/notes.js');
module.exports = function(app){
app.get('/notes', function(req, res) {
    notes.show(req, res);
});

app.post('/notes', function(req, res) {
    notes.create(req, res);
});

app.all("*", (req,res,next) => {
  res.sendfile(path.resolve("./public/dist/index.html"));
});

// app.get('/edit_dog/:id', function(req, res) {
//     dogs.edit(req, res);
// });
//
// app.get('/dog/:id', function(req, res) {
//     dogs.show_one(req, res);
// });
}
