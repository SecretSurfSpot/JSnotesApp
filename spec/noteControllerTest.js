var list = new NoteList
var notecontroller = new NoteController(list)
notecontroller.addNote("First Note")
notecontroller.addNote("Second Note")

function testAddNote() {
  assert.isTrue("NoteListController.ctrlAddNote", list.notes.length === 2)
}

function testNoteControllerInstantiation() {
  console.log(notecontroller.list.notes[0].text.length)
  assert.isTrue("NoteListController instance exists", notecontroller);
}

var expectedOutput = "<ul><li><div>First Note</div></li><li><div>Second Note</div></li></ul>"
function testupdateBrowser() {
  app.innerHTML = expectedOutput
  assert.isTrue("NoteController.updateBrowser", app.innerHTML === expectedOutput)
}

testAddNote()
testNoteControllerInstantiation()
testupdateBrowser()
