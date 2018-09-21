var string = 'My favourite language is JavaScript'
var testNote = new Note(string)

function hasText() {
  assert.isTrue("Note.content", testNote.content() === string)
}

hasText()
