const path = require("path");
const router = require('express').Router();

//gets the index page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//gets the notes page to add or delete notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//will pull up nothing is wrong link is clicked
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

    module.exports = router;