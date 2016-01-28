//board object

var board = {
  col1: {1: null, 2: null, 3: null, 4: null, 5: null, 6: null},
  col2: {1: null, 2: null, 3: null, 4: null, 5: null, 6: null},
  col3: {1: null, 2: null, 3: null, 4: null, 5: null, 6: null},
  col4: {1: null, 2: null, 3: null, 4: null, 5: null, 6: null},
  col5: {1: null, 2: null, 3: null, 4: null, 5: null, 6: null},
  col6: {1: null, 2: null, 3: null, 4: null, 5: null, 6: null},
  col7: {1: null, 2: null, 3: null, 4: null, 5: null, 6: null},
}

function Game(board, user) {
  this.board = board;
  //place piece function which takes the column on which the user picked and it needs to update the board and return the correct cell and color
  //check if game is won?
    //return true or false
      //continue playing if false
      //end game if true
  this.user = user
  user.getColor();
}


user.getColor();
//user object
  //color property
  //user .name

function User(color) {
  var color = color;
  var getColor = function() {
    return color;
  }
}

// piece object?
