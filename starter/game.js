const board = require("./board.js");

class BattleshipGame {
  constructor(player1, numRows, numCols, numShips) {
    this.player1 = player1
    this.currentPlayer = player1
    this.board = new board(numRows, numCols, numShips);
    this.turns = 0;
  }

  playTurn() {
    this.displayStatus();
    this.currentPlayer.getMove((pos) => this.processMove(pos));
  }

  displayStatus() {
    console.log("\n*******************************");
    console.log("'h' means hit, 'x' means no-hit\n");
    this.board.display();
  }

  processMove(pos) {
    console.clear();

    if (this.board.isValidMove(pos)) {
      this.board.attack(pos);
      this.turns++;
      if (this.board.isGameOver()) {
        this.displayStatus();
        this.currentPlayer.processGameOver(true, this.turns);
      } else {
        this.playTurn();
      }
    } else {
      console.log("\n*******************************");
      console.log("Please enter a valid move.");
      this.playTurn();
    }
  }
}

module.exports = BattleshipGame;
