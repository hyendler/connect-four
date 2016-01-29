$(document).ready(function() {

  //game set up
  var user1 = new User("black");
  var user2 = new User("red");

  var game = new Game(board, user1);


  $('i').on('click', function(e){

    e.preventDefault();

    var columnId = $(this).attr('id')
    var result = game.placePiece(columnId);
    var cellNumber = result[0];
    var cellColor = result[1];
    console.log(cellNumber);
    console.log("game.board");
    console.log(game.board.printBoard());



    $("." + columnId + " ." +  cellNumber).css('background-color', cellColor);

    if (game.hasWon(columnId, cellNumber)){
      $("#game-board").remove();
      $("#game-area").append("<h1 class='winner'>YOU WON!</h1>");
      $("#game-area").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    } else {

    if (game.user=== user1) {
      game.user = user2;
      var color = game.user.getColor();
      $(".user-piece").css('background-color', color)
    } else {
      game.user = user1;
      var color = game.user.getColor();
      $(".user-piece").css('background-color', color)
    }
  }

});



  //waiting for a click on a particular column, send that info back to model, update the board, check if game is won, then if not send back updated cell
  //after user1 clicks, then switch user
  // game.user = user2;

});





