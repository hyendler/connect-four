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

// game object
function Game(board, user) {
  this.board = board;
  this.user = user;
  };

  //check if game is won?
    //return true or false
      //continue playing if false
      //end game if true
};

//place piece function which takes the column on which the user picked and it needs to update the board and return the correct cell and color
Game.prototype.placePiece = function(columnNumber) {
  var result = []; // [correctCell, pieceColor]
  var correctCell = // this is the logic - maybe result of helper method
  var pieceColor = this.user.getColor(); // push to result at index 1
  // now with result built - update board - another helper method
  return result;
};

Game.prototype.updateBoard = function(columnNumber) {
  var pieceColor = this.user.getColor();
  var cellToUpdate = "";
  var cellHash = this.board.find(columnNumber);

  for (var key in this.board) {
    if (key === columnNumber) {
      var searchColumn = this.board[key];
      // this should return a hash like this one:
      // {1: "black", 2: "red", 3: null, 4: null, 5: null, 6: null}
      for (var key in searchColumn) {
        if (searchColumn[key] === null) {
          cellToUpdate = "cell" + key;
          searchColumn[key] = pieceColor;
          break;
        };
      };
    };
    break;
  };
  return cellToUpdate;
}


// helper methods (will try to move to another file later)

//user object
function User(color) {
  var color = color;
  var getColor = function() {
    return color;
  }
}
