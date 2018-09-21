// As we're only interested in testing SingleNoteView and its function displayNote
// We don't need to create an actual instance of 'Note', we can just pass
// the expected output of 'Note'
var singlenoteview = new SingleNoteView({text: "Some Text"})
var expectedOutput = "<ul><li><div>Some Text</div></li></ul>"


function testSingleNoteView() {
  assert.isTrue("SingleNoteView.displayNotes outputs html", singlenoteview.displayNote() === expectedOutput)
}

testSingleNoteView()
