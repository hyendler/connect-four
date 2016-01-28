$(document).ready(function() {

  //game set up
  var user1 = new User("black");
  var user2 = new User("red");
  var game = new Game(board, user1);

  bindListeners();


  //waiting for a click on a particular column, send that info back to model, update the board, check if game is won, then if not send back updated cell
  //after user1 clicks, then switch user
  // game.user = user2;

});

var bindListeners = function(){
  $('i').on('click', fillCircle);
}

var fillCircle = function(e){
  e.preventDefault();
  var columnId = $(this).attr('id')
  var cellNumber = game.updateBoard(columnId);
  console.log(cellNumber);


}



