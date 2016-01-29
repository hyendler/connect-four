// board object
var board = {
  // col1: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},
  // col2: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},
  // col3: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},
  // col4: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},
  // col5: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},
  // col6: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},
  // col7: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},

  col1: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},
  col2: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},
  col3: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},
  col4: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},
  col5: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},
  col6: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},
  col7: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},


}

// game object
function Game(board, user) {
  this.board = board;
  this.user = user;
};

// These functions should be called in a specific order:
    // #placePiece()
        // takes columnNumber (column on which the user clicked)
        // calls #updateBoard() function (see below)
        // returns an array with the cell to update and the appropriate color
    // #updateBoard()
        // takes columnNumber (column on which the user clicked)
        // iterates through the board to find the first null value in that column
        // returns the cell to update as a string (i.e. "cell2")
    // #hasWon()
        // takes the board
        // runs three methods (see below) to check if a user has won (4 peices of the same color in a row horizontally, vertically or diagonally)
        // returns true if a user has won
        // returns false if no one has won
    // #checkHorizontal()
    // #checkVertiacal()
    // #checkDiagonal()

Game.prototype.updateBoard = function(columnNumber) {
  var pieceColor = this.user.getColor();
  var cellToUpdate = "";
  var cellHash = this.board[columnNumber];

  for (var key in cellHash) {
    if (cellHash[key] === null) {
      cellToUpdate = "cell" + key;
      cellHash[key] = pieceColor;
      break
    }
  };
  return cellToUpdate; // i.e. "cell2"
};

Game.prototype.placePiece = function(columnNumber) {
  var result = [];
  var pieceColor = this.user.getColor();
  var correctCell = this.updateBoard(columnNumber);
  result.push(correctCell, pieceColor);
  return result; // [correctCell, pieceColor]
};

Game.prototype.check = function(array) {
  if (array.match("redredredred") || array.match("blackblackblackblack")){
    return true;
  } else {
    return false;
  }
}

Game.prototype.checkHorizontal = function(col, cell) {
  var board = this.board;
  var cell_number = cell.slice(4, 5);
  var smushed_row = "";

  for (var column in board){
    if (board[column][cell_number] === null) {
      board[column][cell_number] = "null";
    }
    smushed_row += (board[column][cell_number]);
  }
  return this.check(smushed_row);
};

Game.prototype.checkVertical = function(col) {
  //column is a string with the key name that matches the board
  var board = this.board;
  var column = board[col];
  var smushed_column = "";

  for (var cell in column) {
    if (column[cell] == null) {
      column[cell] = "null";
    }
    smushed_column += column[cell];
  }

  return this.check(smushed_column)
};

Game.prototype.cellIndex = function(col, cell){
  var cell_number = parseInt(cell.slice(4, 5));
  var col_number = parseInt(col.slice(3, 4));
  var index = ((col_number - 1)*7 + cell_number)-1;
  return index;
}

Game.prototype.flattenBoard = function(col, cell){
  var board = this.board;
  var boardArray = [];
  for (var column in board){
    console.log(column)
    for (var cell in board[column]){
      if (board[column][cell] === null) {
        board[column][cell] = "null";
      }
      boardArray.push(board[column][cell]);
    }
  }
  return boardArray;
}

Game.prototype.checkDiagonal = function(col, cell) {
  var board = this.flattenBoard(col, cell); //board array flattened
  var index = this.cellIndex(col, cell);

  //check the 8 +/- diagonal


  //check the 6 +/- diagonal






}

// checks if a user has won - returns true or false
Game.prototype.hasWon = function(col, cell, board) {
  var horizontalResult = this.checkHorizontal(board);
  var verticalResult = this.checkVertical(column);
  var diagonalResult = this.checkDiagonal(board);

  // if ((horizontalResult === true) || (verticalResult === true) || (diagonalResult === true) {
  //   return true;
  // } else {
  //   return false;
  // }

}

// helper methods (will try to move to another file later)

// user object
function User(color) {
  this.getColor = function() {
    return color;
  }
}


// Driver Code
var user1 = new User("black");
var user2 = new User("red");
var game = new Game(board, user1);
var piece = game.placePiece("col4");


console.log(game.checkDiagonal("col5", "cell6"));
// console.log(game.checkDiagonal(board));






