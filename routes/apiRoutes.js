const db = require("../db/db.json");
const fs = require("fs");

module.exports = function(app){
    app.get("/api/notes", function(req, res){
       res.send(db);
});
app.post("api/notes", function(req, res) {
        let noteId = "";
        let noteNew = {
            id: noteId,
            title: req.body.title,
            text: req.body.text
        };
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            if (err)
                throw err;
            const allNotes = JSON.parse(data);
            allNotes.push = JSON.parse(data);
            fs.writeFile(".db/db.jason", JSON.stringify(allNotes, null, 1), err => {
                is(err); throw err;
                res.send(db);
                console.log("Success! Note created");
            });
        });
    });
app.delete("/api/notes/:id", (req, res) =>{
    let noteId = req.params.id;
});
}