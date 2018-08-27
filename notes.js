console.log("Starting notes.js...");

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    //wtf is a try catch? it's this...
    try {
        var notesString = fs.readFileSync('notes-data.json');
        //above is pulling old string content
    
        notes = JSON.parse(notesString);
        //this will take the notesstring and parse it into an array
    } catch(e) {

    }
    //if try doesn't work it'll go to catch

    var duplicateNotes = notes.filter((note) => note.title === title);
    //the above is a really clean arrow function!

    if(duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
        //two things being passed in; name & content 
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Getting note', title);
};

var removeNote = (title) => {
    console.log('Removing note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
//since the name of the object and it's content are 
//identicle you can state it just once, like above

};