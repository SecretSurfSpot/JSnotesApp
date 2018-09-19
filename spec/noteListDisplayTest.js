var notelist = new NoteList()
notelist.addNote("Hello my name is Freddie")
notelist.addNote("Hello my name is Andrew")
var listView = new NoteListDisplay(notelist)

var expectedOutputText = "<ul><li><div>Hello my name is Freddie</div></li><li><div>Hello my name is Andrew</div></li></ul>"

function testDisplayNotes() {
  assert.isTrue(listView.dislayNotes = expectedOutputText)
}

testDisplayNotes()
