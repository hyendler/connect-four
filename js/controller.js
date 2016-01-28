$(document).ready(function() {
  console.log("ready");

  //game set up
  user1 = new User("black");
  user2 = new User("red");
  var game = new Game(board, user1);



  //waiting for a click on a particular column, send that info back to model, update the board, check if game is won, then if not send back updated cell
  //after user1 clicks, then switch user
  game.user = user2;

});
