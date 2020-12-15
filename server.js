const express = require("express");
const db = require("./db/db.json");
const fs = require("fs");
const path = require("path");
const routes = require("./routes/htmlRoutes.js");
const apiRoutes = require("./routes/apiRoutes.js");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("/", routes);
// app.use("/", apiRoutes);
apiRoutes(app)

app.listen(PORT, () => console.log(` listening on ${PORT}`));

///----------------APIRoutes


app.get('/api/notes', function(req,res) {
    fs.readFile('./db/db.json', 'utf8', function(err,data) {
        if (err){
            throw err;
        }
    });
    res.json(db);

});
app.post('/api/notes', function(req,res) {  
    var newpost = req.body;

    function addNewPost(post) {
        db.push(post);
        for(let i=0;i<db.length;i++) {
            db[i].id = i;
        }
        return JSON.stringify(db);
    }
    fs.writeFile('./db/db.json', addNewPost(newpost), function(err) {
        if (err){
            throw err;
        }
    });
    res.json(db);
});
app.delete('/api/notes/:id', function(req,res) {
    var noteId = req.params.id;

    db.splice(noteId,0);

    for(let i=0;i<db.length;i++) {
        dbjson[i].id = i;
    }

    fs.writeFile('./db/db.json', JSON.stringify(db), function(err) {
        if (err){
            throw err;
        }
    });
    res.json(db);
});

