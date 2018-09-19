(function(exports) {

  function NoteList() {
    this.notes = []
  }

  NoteList.prototype.addNote = function(noteText) {
    note = new Note(noteText)
    this.notes.push(note)
  }

  exports.NoteList = NoteList
})(this)
