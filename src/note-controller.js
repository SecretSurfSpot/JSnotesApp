(function(exports) {
  // NoteController takes a copy of Note List Model (list) as a param
  function NoteController(list) {
    this.list = list //NoteController owns 'list'
    // Creates a Note List View, passing in the Note List Model (list) as a param
    this.ctrlNoteListView = new NoteListView(list) //NoteController owns 'ctrlNoteListView'
  }

    // Create a function that uses list's AddNote function (list is a copy of Note List Model)
  NoteController.prototype.ctrlAddNote = function(string) {
    this.list.addNote(string)
  }
  // Create a function that uses ctrlNoteListView's displayNotes function (ctrlNoteListView is a copy of NoteListView)
  NoteController.prototype.ctrlGetHTML = function() {
    return this.ctrlNoteListView.displayNotes()
  }

  // Create a function that changes the content of the html 'id' element
  NoteController.prototype.ctrlDisplayHTML = function() {
    let html = this.ctrlGetHTML() // pass the returned value of ctrlGetHTML to the variable html
    var elem = document.getElementById('app'); // pass value of elementid id to variable 'element'
    elem.innerHTML = html; // pass the value of html to the innerHTML part of element
  }

  exports.NoteController = NoteController
})(this)



// (function(exports) {
//   function NoteController(list) {
//     this.list = list
//     this.ctrlNoteListView = new NoteListView(list)
//   }
//
//   NoteController.prototype.ctrlAddNote = function(string) {
//     this.list.addNote(string)
//   }
//
//   NoteController.prototype.ctrlGetHTML = function() {
//      console.log(this.ctrlNoteListView)
//       return this.ctrlNoteListView.displayNotes()
//   }
// // Function sets html to value returned by ctrlGetHTML()
// // sets elem to value of the 'app' element
// // then changes the innerHTML of that elem to the html
//   NoteController.prototype.ctrlDisplayHTML = function() {
//       let html = this.ctrlGetHTML()
//       var elem = document.getElementById('app');
//       elem.innerHTML = html;
//   }
//
//   exports.NoteController = NoteController
// })(this)
