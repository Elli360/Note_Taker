// const db = require("../db/db.json");
const fs = require("fs");
const db = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));


module.exports = function(app){
    app.get("/api/notes", function(req, res){
       res.JSON(db);
});
app.get("/api/notes/:id", function(req, res) {
    res.JSON(data[Number(req.params.id)]);
});

app.post("/api/notes", function(req, res) {
    console.log("success!");

        let noteId = req.body;
        let uniqueId = (req.body.title.length).toString();
        console.log(uniqueId);


        fs.writeFileSync(".db/db.jason", JSON.stringify(db), function(err) {
            is(err); throw err;
        });
            res.JSON(db);
            console.log("Success! Note created");
});
app.delete("/api/notes/:id", function(req, res) {
    let noteId = req.params.id;
    let newId = 0;
    console.log(`Deleting note id ${noteId}`);
    db = db.filter(currentNote => {
        return currentNote.id = newId.toString();
        newId++; 
    })
    fs.writeFileSync(".db/db.jason", JSON.stringify(db));
        res.JSON(db);
});
}