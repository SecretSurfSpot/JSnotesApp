var notelist = new NoteList()

notelist.addNote("Hello my name is Freddie")
notelist.addNote("Hello my name is Andrew")
var listView = new NoteListView(notelist)

var expectedOutputText = "<ul><li><div>Hello my name is Fre</div></li><li><div>Hello my name is And</div></li></ul>"

function testDisplayNotes() {
  assert.isTrue("NoteListView.displayNotes limits output to 20 chars", listView.displayNotes() === expectedOutputText)
}

testDisplayNotes()
