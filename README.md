# Number Guessing Game 🎮

## Overview

The **Number Guessing Game** is a simple, console-based game where players try to guess a randomly generated number within a limited number of attempts. The game has two difficulty levels: **Hard** and **Easy**, each with different ranges of numbers and allowed attempts.

## How It Works

- The player selects a difficulty level.
  - **Hard**: Guess a number between 1 and 100, with 5 attempts.
  - **Easy**: Guess a number between 1 and 50, with 10 attempts.
- The game prompts the player to guess a number within the selected range.
- After each guess, the game gives feedback:
  - **Too high**: If the guessed number is higher than the correct number.
  - **Too low**: If the guessed number is lower than the correct number.
  - **Correct**: If the guessed number matches the correct number.
- The player either wins by guessing the correct number or loses if they run out of attempts.

## Features

- Two difficulty levels: **Easy** and **Hard**.
- Feedback after each guess to help the player adjust their guesses.
- Random number generation based on the chosen difficulty.
- Input validation to ensure guesses are within the allowed range.

## Code Snippet: Difficulty Selection

The game allows players to choose between two difficulty levels: **Hard** and **Easy**. Here’s the code that handles the difficulty selection:

```
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
```

## How to Play

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:

   ```bash
   cd number-guessing-game
   ```

3. **Install dependencies**:  
   Ensure you have Node.js installed, then run:

   ```bash
   npm install
   ```

4. **Run the game**:

   ```bash
   node index.js
   ```

5. **Choose a difficulty** when prompted:

   - Enter `1` for **Hard** (1-100 with 5 attempts).
   - Enter `2` for **Easy** (1-50 with 10 attempts).

6. **Start guessing** the number! The game will guide you with feedback on whether your guess is too high, too low, or correct.

## Example

```bash
node index.js
Choose Difficulty level {1 : Hard}, {2 : Easy} : 1
Guess a number between 1 and 100 (Note: you have 5 tries left.): 50
Too high
Guess a number between 1 and 100 (Note: you have 4 tries left.): 25
Too low
Guess a number between 1 and 100 (Note: you have 3 tries left.): 35
Correct!
```

## Dependencies

- **prompt-sync**: prompt-sync: Used to handle synchronous input from the user in the console.

## Enjoy the Game

Feel free to use and modify the game as you like, and challenge your friends to see who can guess the correct number in the fewest attempts! 🎉
