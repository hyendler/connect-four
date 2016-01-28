# connect-four

*Hanah Yendler, Natasha Thapliyal Ryan Ho & Lindsey Stevenson*
DBC connect four group project!

## MVP Goals

We will build a Javascript and jQuery web application game to model Connect-Four.

#### MVP User Stories

Two users will share a mouse and one browser window to play a game.
The users will click on the column in which they want to play
The view will color the appropriate cell in the column on which the user clicked
When a user wins the game, the view will alert them and present an option to play again

### Model

#### Objects

the following objects will be defined:

- piece:
..- red or black
- user:
..- is associated with a color
..- each game has two users
- board:
..- rows
..- columns
..- cells
....- empty of full
....- if full, red or black
..- game play
....- check its own state and return that
....- check if someone has won, and return the winning user
....- return the new board after a new play
..- board will be stored as a nested hash - e.g.
```
{ column1: {1: "black", 2: "red", 3: null, 4: null, 5: null, 6: null},
  column2: {1: "red", 2: "black", 3: "black", 4: null, 5: null, 6: null},
  column3: {....}, etc };
```

#### helper methods

the board object will require a few helper methods.
Specifically one to flatten the nested board into an array so we can easily use indices to check for four pieces in a row (horizontally, vertically and diagonally)

### Controller

Listening for click events on column divs
Will capture column and user upon click event, send info to the model
Model will return updated column & the new user
Controller will pass the updated column to the view for updated display to users

### Views

- User clicks on column to place a piece
- There is only one view
- The view is just coloring pre-existing div - see below example:

```
<div id="column1"<a href="#">
  <div id="cell1"></div>
  <div id="cell2"></div>
  <div id="cell3"></div>
  <div id="cell4"></div>
  <div id="cell5"></div>
  <div id="cell6"></div>
</a></div>
```

## Stretch Goals & Ideas

- Do we need a game object? Will we want to call a method like #has_won? and do something special on the screen?
- Allow a user to select their own piece colors and maybe even custom pieces (i.e. a pink elephant icon vs. yellow dragon icons)
- recursively check if the board is solved