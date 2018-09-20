var list = new NoteList
var notecontroller = new NoteController(list)
notecontroller.ctrlAddNote("A note")

function testctrlAddNote() {
  assert.isTrue(list.notes.length === 1)
}

var expectedOutput = "<ul><li><div>A note</div></li></ul>"

function testctrlGetHTML() {
  assert.isTrue(notecontroller.ctrlNoteListView.displayNotes() === expectedOutput)
}

function testctrlDisplayHTML() {
  let html = notecontroller.ctrlGetHTML()
  assert.isTrue(html === expectedOutput)
}

testctrlAddNote()
testctrlGetHTML()
testctrlDisplayHTML()
