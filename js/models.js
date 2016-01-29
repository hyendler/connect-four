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
  //check if game is won?
    //return true or false
      //continue playing if false
      //end game if true
};

//place piece function which takes the column on which the user picked and it needs to update the board and return the correct cell and color


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

  //   if (key == columnNumber) {
  //     console.log("I am here");
  //     var searchColumn = this.board[key];
  //     console.log(searchColumn);
  //     console.log("--");
  //     // this should return a hash like this one:
  //     // {1: "black", 2: "red", 3: null, 4: null, 5: null, 6: null}
  //     for (var key in searchColumn) {
  //       if (searchColumn[key] === null) {
  //         this.cellToUpdate = "cell" + key;
  //         console.log(cellToUpdate);
  //         console.log("**");
  //         searchColumn[key] = pieceColor;
  //         break;
  //       };
  //     };
  //   };
  //   break;
  // };
  return cellToUpdate; // i.e. "cell2"
};

Game.prototype.placePiece = function(columnNumber) {
  var result = []; // [correctCell, pieceColor]
  var pieceColor = this.user.getColor();
  var correctCell = this.updateBoard(columnNumber);
  result.push(correctCell, pieceColor);
  return result;
};


// helper methods (will try to move to another file later)

//user object
function User(color) {
  this.getColor = function() {
    return color;
  }
}


//Drive Code
// var user1 = new User("black");
// var user2 = new User("red");
// var game = new Game(board, user1);
// var result = game.placePiece("col4");
// console.log(result);




