// board object
var board = {
  col1: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},
  col2: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},
  col3: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},
  col4: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},
  col5: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},
  col6: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},
  col7: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},

  // col1: {6: "black", 5: "black", 4: "black", 3: null, 2: "black", 1: "red"},
  // col2: {6: null, 5: "red", 4: null, 3: "black", 2: "red", 1: "black"},
  // col3: {6: "red", 5: null, 4: null, 3: null, 2: "black", 1: "black"},
  // col4: {6: null, 5: null, 4: null, 3: "red", 2: null, 1: "black"},
  // col5: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},
  // col6: {6: null, 5: "black", 4: null, 3: null, 2: null, 1: null},
  // col7: {6: null, 5: null, 4: null, 3: null, 2: null, 1: null},


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
  var correctCell = this.updateBoard(columnNumber); // i.e. "cell2"
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

Game.prototype.checkDiagonalUp = function(col, cell) {
  var cellNumber = parseInt(cell.slice(4, 5));
  var colNumber = parseInt(col.slice(3, 4));
  startingCellNumber = "";
  startingColNumber = "";
  if (cellNumber >= 4) {
    while (cellNumber < 6 && colNumber < 7) {
      colNumber++;
      cellNumber++;
    }
    startingCellNumber = cellNumber;
    startingColNumber = colNumber;
  } else {
    while (cellNumber > 1 && colNumber > 1) {
      colNumber--;
      cellNumber--;
    }
    startingCellNumber = cellNumber;
    startingColNumber = colNumber;
  }
  return [startingColNumber, startingCellNumber];
};

Game.prototype.buildDiagonalStringUp = function(startingArray) {
  var colNumber = startingArray[0];
  var cellNumber = startingArray[1];
  var result = "";

  if (cellNumber >= 4) {
    while ((colNumber > 0) && (cellNumber > 0)) {
      console.log(colNumber, cellNumber)
      result += this.board["col" + colNumber][cellNumber];
      cellNumber--;
      colNumber--;
    };
  } else {
    while ((colNumber <= 7) && (cellNumber <= 6)) {
      console.log(colNumber, cellNumber)
      result += this.board["col" + colNumber][cellNumber];
      cellNumber++;
      colNumber++;
    }
  }
  return this.check(result);
};

Game.prototype.checkDiagonalDown = function(col, cell) {
  var cellNumber = parseInt(cell.slice(4, 5));
  var colNumber = parseInt(col.slice(3, 4));
  startingCellNumber = "";
  startingColNumber = "";

  if (cellNumber >= 4) {
    while (cellNumber < 6 && colNumber > 1) {
      colNumber--;
      cellNumber++;
    }
    startingCellNumber = cellNumber;
    startingColNumber = colNumber;
  } else {
    while (cellNumber > 1 && colNumber < 7) {
      colNumber++;
      cellNumber--;
    }
    startingCellNumber = cellNumber;
    startingColNumber = colNumber;
  }
  return [startingColNumber, startingCellNumber];
};

Game.prototype.buildDiagonalStringDown = function(startingArray) {
  var colNumber = startingArray[0];
  var cellNumber = startingArray[1];
  var result = "";

  if (cellNumber >= 4) {
    while ((colNumber <= 7) && (cellNumber >= 1)) {
      console.log(colNumber, cellNumber)
      result += this.board["col" + colNumber][cellNumber];
      cellNumber--;
      colNumber++;
    };
  } else {
    while ((colNumber >= 1) && (cellNumber <= 6)) {
      console.log(colNumber, cellNumber)
      result += this.board["col" + colNumber][cellNumber];
      cellNumber++;
      colNumber--;
    }
  }
  return this.check(result);
}

Game.prototype.checkDiagonal = function(col, cell) {

  var checkUp = this.checkDiagonalUp(col, cell);
  var checkDown = this.checkDiagonalDown(col, cell);
  var checkUpResult = this.buildDiagonalStringUp(checkUp);
  var checkDownResult = this.buildDiagonalStringDown(checkDown);

  if (checkUpResult === true || checkDownResult === true) {
    return true
  } else {
    return false
  }
}

// checks if a user has won - returns true or false
Game.prototype.hasWon = function(col, cell) {
  var horizontalResult = this.checkHorizontal(col, cell);
  var verticalResult = this.checkVertical(col);
  var diagonalResult = this.checkDiagonal(col, cell);

  if ((horizontalResult === true) || (verticalResult === true) || (diagonalResult === true)) {
    return true;
  } else {
    return false;
  }
};

// user object
function User(color) {
  this.getColor = function() {
    return color;
  }
}


