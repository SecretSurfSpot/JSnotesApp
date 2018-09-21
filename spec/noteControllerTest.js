var list = new NoteList
var notecontroller = new NoteController(list)
notecontroller.ctrlAddNote("First Note")
notecontroller.ctrlAddNote("Second Note")

function testctrlAddNote() {
  assert.isTrue("NoteListController.ctrlAddNote", list.notes.length === 2)
}

var expectedOutput = "<ul><li><div>First Note</div></li><li><div>Second Note</div></li></ul>"

function testctrlGetHTML() {
  assert.isTrue("NoteListController.ctrlGetHTML",notecontroller.ctrlNoteListView.displayNotes() === expectedOutput)
}

function testctrlDisplayHTML() {
  let html = notecontroller.ctrlGetHTML()
  document.getElementById('app').innerHTML = html
  innerHTML = document.getElementById('app').innerHTML
  assert.isTrue("NoteListController.ctrlDisplayHTML", html === expectedOutput)
  assert.isTrue("NoteListController.ctrlDisplayHTML", innerHTML === html)
}

function testNoteControllerInstantiation() {
  console.log(notecontroller.list.notes[0].text.length)
  assert.isTrue("NoteListController instance exists", notecontroller);
}

testctrlAddNote()
testctrlGetHTML()
testctrlDisplayHTML()
testNoteControllerInstantiation()
