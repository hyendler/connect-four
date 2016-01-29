$(document).ready(function() {

  //game set up
  var user1 = new User("#2D2E2E");
  var user2 = new User("red");
  var game = new Game(board, user1);


  $('i').on('click', function(e){
  e.preventDefault();
  var columnId = $(this).attr('id')
  var result = game.placePiece(columnId);
  var cellNumber = result[0];
  var cellColor = result[1];
  $("." + columnId + " ." +  cellNumber).css('background-color', cellColor)

  if (game.user=== user1) {
    game.user = user2;
  } else {
    game.user = user1;
  }
});



  //waiting for a click on a particular column, send that info back to model, update the board, check if game is won, then if not send back updated cell
  //after user1 clicks, then switch user
  // game.user = user2;

});





