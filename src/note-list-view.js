(function(exports) {

  function NoteListView(list) {
    this.list = list
  }

  NoteListView.prototype.displayNotes = function() {
    var noteArray = this.list.notes
    var output = "<ul>"

    for (var i = 0; i < noteArray.length; i++) {
      output += "<li><div>" + noteArray[i].text.substr(0, 20) + "</div></li>"
    }
    output += "</ul>"
    return output
  }
// var res = str.substr(0, 1);


  exports.NoteListView = NoteListView
})(this)
