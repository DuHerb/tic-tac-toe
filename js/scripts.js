function Player(mark) {
  this.mark = mark,
  this.isActive = false;
}

function Board() {
  this.squares = [],
  this.currentId = -1;
}

function Square(id, row, col) {
  this.id = id,
  this.row = row,
  this.col = col,
  this.isChecked = false,
  this.checkMark = ""
}

Square.prototype.isChecked = function(){
  return this.isChecked;
}

Square.prototype.getMark = function(){
  return this.checkMark;
}

function Game() {
  this.players = []
}

Game.prototype.switchPlayer = function(){
  if(this.players[0].isActive){
    this.players[0].isActive = false;
    this.players[1].isActive = true;
  } else {
    this.players[0].isActive = true;
    this.players[1].isActive = false;
  }
}

Game.prototype.addPlayer = function(player1, player2){
  this.players.push(player1);
  this.players.push(player2);
}
Board.prototype.buildBoard = function(){
  var boardArray = [];
  for (i=1; i <= 3; i++){
    for (j=1; j <= 3; j++){
      var squareArray =[];
      var id = this.currentId ++;
      var newSquare = new Square(this.currentId, i, j)
      boardArray.push(newSquare);
    }
  }
  return boardArray;
}

Board.prototype.winCheck = function(){

  var winners = ["012", "345", "678"];
  this.squares.forEach(function(square){
    if(square.isChecked && square.checkMark === "X"){
      
      console.log("forEach loop working");
    }
  });
  // if (this.squares[0,1,2]){
  //   console.log("this worked");
  }
  // 012
  // 345
  // 678
  // 036
  // 147
  // 258
  // 048
  // 246


function addEventListeners(){
  $(".square").on("click", function(event){
    var squareId = event.target.id;
    // console.log(squareId);
    if(game.players[0].isActive){
      $(this).text(game.players[0].mark);
      board.squares[squareId].checkMark = game.players[0].mark;
      board.squares[squareId].isChecked = true;
      board.winCheck();
      // console.log(board.squares[squareId]);
      game.switchPlayer();
    } else {
      $(this).text(game.players[1].mark);
        board.squares[squareId].checkMark = game.players[1].mark;
        board.squares[squareId].isChecked = true;
        // console.log(board.squares[squareId]);
      game.switchPlayer();
    }
  });
}

var player1 = new Player("X");
var player2 = new Player("O");
var game = new Game();
var board = new Board();
board.squares = board.buildBoard();
console.log(board.squares);
game.addPlayer(player1, player2);
game.players[0].isActive = true;

//document.ready --------------------------------//
$(document).ready(function(){

  // var player1 = new Player("X");
  // var player2 = new Player("O");
  // var game = new Game();
  // var board = new Board();
  // game.addPlayer(player1, player2);
  // game.players[0].isActive = true;
  // console.log(board.buildBoard());
  console.log(game.players);
  addEventListeners();
})
