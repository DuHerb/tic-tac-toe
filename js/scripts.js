//Backend Logic for Player

var player1, player2;

function Player(diceScore, turnScore, totalScore, playerActive) {
  this.diceScore = 0,
  this.turnScore = 0,
  this.totalScore = 0,
  this.playerActive = playerActive
}

Player.prototype.rollDice = function() {
  var diceRoll = Math.floor((Math.random() * 6) + 1);
  if (diceRoll === 1) {
    this.diceScore = 1;
    this.turnScore = 0;
    if (this.playerActive === player1.playerActive) {
      player1.playerActive = false;
      player2.playerActive = true;
      $("#player1").toggleClass("disablePlayer");
      $("#player2").toggleClass("disablePlayer");
    } else if (this.playerActive === player2.playerActive) {
        player1.playerActive = true;
        player2.playerActive = false;
        $("#player1").toggleClass("disablePlayer");
        $("#player2").toggleClass("disablePlayer");
      }
    alert("You rolled a 1, you lose your points and your turn is over.");
  } else {
      this.diceScore = diceRoll;
      this.turnScore += diceRoll;
    };
};

Player.prototype.hold = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  if (this.playerActive === player1.playerActive) {
    player1.playerActive = false;
    player2.playerActive = true;
    $("#player1").toggleClass("disablePlayer");
    $("#player2").toggleClass("disablePlayer");
  } else if (this.playerActive === player2.playerActive) {
      player1.playerActive = true;
      player2.playerActive = false;
      $("#player1").toggleClass("disablePlayer");
      $("#player2").toggleClass("disablePlayer");
    }

  if (this.totalScore >=100) {
    alert("You win! Click OK to start a new game.");
    newGame();
  }
};

function newGame () {
  $('#player1').removeClass("disablePlayer");
  $('#player2').addClass("disablePlayer");
  var players = [player1, player2];
  players.forEach(function (player) {
    player.diceScore = 0;
    player.turnScore = 0;
    player.totalScore = 0;
  })
  var emptyFields = [$(".diceScore1"), $(".turnScore1"), $(".totalScore1"), $(".diceScore2"), $(".turnScore2"), $(".totalScore2")];
  emptyFields.forEach(function (emptyField) {
    emptyField.text(0);
  })
};

// User Interface Logic

$(document).ready(function () {
  var gamer1, gamer2;
  player1 = new Player(gamer1);
  player2 = new Player(gamer2);
  newGame();
  $("#rollDice1").click(function (event) {
    event.preventDefault();
    player1.playerActive = true;
    player2.playerActive = false;
    player1.rollDice();
    $(".diceScore1").text(player1.diceScore);
    $(".turnScore1").text(player1.turnScore);
  });
  $("#rollDice2").click(function (event) {
    event.preventDefault();
    player1.playerActive = false;
    player2.playerActive = true;
    player2.rollDice();
    $(".diceScore2").text(player2.diceScore);
    $(".turnScore2").text(player2.turnScore);
    $(".totalScore2").text(player2.totalScore);
  });
  $("#hold1").click(function (event) {
    event.preventDefault();
    player1.playerActive = false;
    player2.playerActive = true;
    player1.hold();
    $(".totalScore1").text(player1.totalScore);
    player1.diceScore = 0;
    player1.turnScore = 0;
    $(".diceScore1").text(player1.diceScore);
    $(".turnScore1").text(player1.turnScore);
  });
  $("#hold2").click(function (event) {
    event.preventDefault();
    player1.playerActive = true;
    player2.playerActive = false;
    player2.hold();
    $(".totalScore2").text(player2.totalScore);
    player2.diceScore = 0;
    player2.turnScore = 0;
    $(".diceScore2").text(player2.diceScore);
    $(".turnScore2").text(player2.turnScore);
  });
});
