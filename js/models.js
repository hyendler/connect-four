// board object
var board = {
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
  // console.log("check" + col + ", " + cell);
  if (array.match("redredredred") || array.match("blackblackblackblack")){
    return true;
  } else {
    return false;
  }
}

Game.prototype.checkHorizontal = function(col, cell, board) {
  var board = board;
  var cell_number = cell.slice(4, 5);
  var smushed_row = "";

  for (var column in board){
    if (board[column][cell_number] === null) {
      board[column][cell_number] = "null";
    }
    smushed_row += (board[column][cell_number]);
  }
   console.log("checkhorizonatl" + col + ", " + cell);
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
  var index = ((((7 - cell_number) - 1)*7 + col_number)-1);
  return index;
}

Game.prototype.flattenBoard = function(){
  var board = this.board;
  var boardArray = [];
  for (var i = 6; i > 0; i--) {
    for (var column in board) {
      if (board[column][i] === null) {
        board[column][i] = "null";
      }
      boardArray.push(board[column][i])
    }
  }
  console.log(boardArray);
  return boardArray;

}

// Game.prototype.checkDiagonal = function(col, cell) {
//   var board_array = this.flattenBoard(); //board array flattened
//   var index = this.cellIndex(col, cell);
//   var answer_string = "";

//   // check the 6 +/- diagonal
//   // check the 8 +/- diagonal

//   // if (when we are our perform +/-) the index is less that zero
//   // or more than 41
//   // or the index is equal to [0, 7, 14, 21, 24, 35, 6, 13, 20, 27, 34, 41]
//   // we need to stop the +/- process
//   do {
//     answer_string += (board_array[index]);
//     index += 8;
//   } while (index >= 0 && index < 42);

//   do {
//     (board_array[index]) + answer_string
//     index -= 8;
//   } while (index >= 0 && index < 42)



//   // && index != [0, 7, 14, 21, 24, 35, 6, 13, 20, 27, 34, 41]
//   console.log(answer_string);

// }

// checks if a user has won - returns true or false
Game.prototype.hasWon = function(col, cell, board) {
  console.log("models col: " + col);
  console.log("models cell: " + cell);
  var horizontalResult = this.checkHorizontal(col, cell, board);
  // var verticalResult = this.checkVertical(col);
  // var diagonalResult = this.checkDiagonal(board);

  // if ((horizontalResult === true) || (verticalResult === true) || (diagonalResult === true) {
  //   return true;
  // } else {
  //   return false;
  // }

   if (horizontalResult === true) {
    return true;
  } else {
    return false;
  }

}

// helper methods (will try to move to another file later)

// user object
function User(color) {
  this.getColor = function() {
    return color;
  }
}


// var user1 = new User("black");
// var game = new Game(board, user1);
// game.flattenBoard();
// game.checkDiagonal("col4", "cell5");





