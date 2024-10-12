const prompt = require("prompt-sync")({ sigint: true });

let randomNumber;
let tries;
let limit;

const selectDifficulty = () => {
  while (randomNumber == null) {
    const difficultyLevel = prompt(
      "Choose Difficulty level {1 : Hard}, {2 : Easy} : "
    );

    if (
      Number.isInteger(Number(difficultyLevel)) &&
      difficultyLevel >= 1 &&
      difficultyLevel <= 2
    ) {
      if (difficultyLevel == 1) {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        tries = 5;
        limit = 100;
      } else if (difficultyLevel == 2) {
        randomNumber = Math.floor(Math.random() * 50) + 1;
        tries = 10;
        limit = 50;
      }
    } else {
      console.log("Enter one or two to determine the difficulty level.");
    }
  }
};

const game = () => {
  selectDifficulty();
  while (tries > 0) {
    tries--;
    const playerGuess = prompt(
      `Guess a number between 1 and ${limit} (Note: you have ${
        tries + 1
      } tries left.): `
    );

    if (
      Number.isInteger(Number(playerGuess)) &&
      playerGuess >= 1 &&
      playerGuess <= limit
    ) {
      if (playerGuess == randomNumber) {
        console.log("Correct!");
        break;
      } else if (playerGuess > randomNumber) {
        console.log("Too high");
      } else if (playerGuess < randomNumber) {
        console.log("Too low");
      }
    } else {
      console.log("Make sure you enter a valid number in the range");
      tries++;
    }

    if (tries === 0) {
      console.log(
        `Sorry, You've run out of tries. The correct number was ${randomNumber}`
      );
    }
  }
};

game();
