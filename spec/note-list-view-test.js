var notelist = new NoteList()
var note_1 = "Hello my name is Freddie"
var note_2 = "Hello my name is Andrew"
var note_1_substr = note_1.substr(0, 20)
var note_2_substr = note_2.substr(0, 20)


notelist.addNote(note_1_substr)
notelist.addNote(note_2_substr)
var listView = new NoteListView(notelist)

var expectedOutputText = "<ul><li><div>" + note_1_substr + "</div></li><li><div>" + note_2_substr + "</div></li></ul>"

function testDisplayNotes() {
  assert.isTrue("NoteListView.displayNotes", listView.displayNotes() === expectedOutputText)
}

testDisplayNotes()
