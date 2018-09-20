(function(exports) {

  function NoteList() {
    // What is "this"? In a function definition, 'this' refers to the "owner" of the function.
    this.notes = [] // The NoteList object "owns" the 'notes' array.
  }

  NoteList.prototype.addNote = function(noteText) {
    note = new Note(noteText)
    this.notes.push(note)
  }

  exports.NoteList = NoteList
})(this) // Here 'this' refers to the NoteList object.
