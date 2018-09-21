(function(exports) {
  // NoteController takes a copy of Note List Model (list) as a param
  function NoteController(list = new NoteList, noteListView = NoteListView) {
    this.list = list //NoteController owns 'list'
    // Creates a Note List View, passing in the Note List Model (list) as a param
    this.noteListView = new NoteListView(this.list) //NoteController owns 'noteListView'
  }
  // Create a function that uses list's addNote function (list is a copy of Note List Model)
  NoteController.prototype.addNote = function(string) {
    this.list.addNote(string)
  }
  // Function that takes an html element and updates that element with the output from noteListView's displayNotes func 
  NoteController.prototype.updateBrowser = function(htmlElement) {
    htmlElement.innerHTML = this.noteListView.displayNotes()
  }

  exports.NoteController = NoteController
})(this)
