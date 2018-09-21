var notelist = new NoteList()

function hasNotes() {
  assert.isTrue("NoteList.notes.length", notelist.notes.length === 0)
}

function testAddNote() {
  notelist.addNote("Favourite drink: seltzer")
  notelist.addNote()
  assert.isTrue("NoteList.AddNote", notelist.notes.length == 2)
}

hasNotes()
testAddNote()

// this function takes as an argument a string
// that will be the value of the text property of the note e.g. "Favourite drink: seltzer".
