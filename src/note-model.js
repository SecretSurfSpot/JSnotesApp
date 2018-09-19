(function(exports){

  function Note(string) {
    this.text = string
  }

  Note.prototype.content = function() {
    return this.text
  }

  exports.Note = Note
})(this)
