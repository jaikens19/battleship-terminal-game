const readline = require("readline");
class HumanPlayer {
  constructor() {
    this.rl = readline.createInterface(process.stdin, process.stdout);
  }

  getMove(processMove) {
    this.rl.question("Choose a coordinate to hit. (e.g. 3,1)\n>", (answer) => {
      const [row, col] = answer.split(',')
      processMove([Number(row), Number(col)]);
});
  }

  processGameOver(isWon, turns) {
      if (isWon) {
      console.log(`Nice job, you won in ${turns} turns!`);
    } else {
      console.log("You lose!");
    }
    this.rl.close();
  }
}


module.exports = HumanPlayer;
