(function(exports) {

  function NoteListDisplay(list) {
    this.list = list
  }

  NoteListDisplay.prototype.dislayNotes = function() {
    var noteArray = this.list.notes
    var output = "<ul>"

    for (var i = 0; i < noteArray.length; i++) {
      output += "<li><div>" + noteArray[i].text + "</div></li>"
    }
    output += "</ul>"
    return output
  }

  exports.NoteListDisplay = NoteListDisplay
})(this)
