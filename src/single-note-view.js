(function(exports) {

  function SingleNoteView(note) {
    this.note = note
  }

  SingleNoteView.prototype.displayNote = function(){
    return "<ul><li><div>" + this.note.text + "</div></li></ul>"
  }

  exports.SingleNoteView = SingleNoteView
})(this)
