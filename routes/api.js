const fs = require("fs")
const path = require("path")
const notesArray = require("../Develop/db/db.json");
const router = require('express').Router();


//function to create notes
function createNewNote(body, notesArray) {
    const newNote = body;
    if (!Array.isArray(notesArray))
        notesArray = [];
    
    if (notesArray.length === 0)
        notesArray.push(0);

    body.id = notesArray[0];
    notesArray[0]++;

    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, './Develop/db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return newNote;
}
//function to delete notes
function deleteNote(id, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        let note = notesArray[i];

        if (note.id == id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, './Develop/db/db.json'),
                JSON.stringify(notesArray, null, 2)
            );

            break;
        }
    }
}

//gets notes
router.get('/notes', (req, res) => {
    res.json(notesArray.slice(1));
});

//posts new notes
router.post('/notes', (req, res) => {
    const newNote = createNewNote(req.body, notesArray);
    res.json(newNote);
});

//deletes old notes
router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notesArray);
    res.json(true);
});

module.exports = router;