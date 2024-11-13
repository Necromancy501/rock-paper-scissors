// AUXILIAR FUNCTIONS

// Capitalizes a word

function capitalize(word) {
  word = word.toLowerCase();
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Checks if an input is a valid number (disalow 0). Used in roundsNumber

function isRoundNumber(str) {
  // Eliminates surrounding whitespaces

  str = str.trim();

  // If empty string return false

  if (!str) {
    return false;
  } else {
    // Trims leading zeros

    str = str.replace(/^0+/, "");

    // Forces an integer and stores in number

    number = parseInt(str);

    // Returns number if it's greater than 0, not a string and not infinity. Otherwise returns false

    if (number !== Infinity && String(number) === str && number > 0) {
      return number;
    } else {
      return false;
    }
  }
}

// MAIN FUNCTIONS

// Returns "rock", "paper" or "scissors" randomly (CPU choice)

function getComputerChoice() {
  // List all the options available with a random value

  const options = {
    rock: Math.random(),
    paper: Math.random(),
    scissors: Math.random(),
  };

  // Pick the one with the highest value among the three of them

  const computerChoice = Object.keys(options).reduce((a, b) =>
    options[a] > options[b] ? a : b
  );

  return capitalize(computerChoice);
}

// Game logic for a round of "Rock, Paper, Scissors"

function playRound(username, humanChoice, computerChoice) {
  
  // Object that stores which choice beats which

  const getsBeatenBy = {
    paper: "Scissors",
    scissors: "Rock",
    rock: "Paper",
  };


  let isRoundPlayed;

  // Checks ties

  if (humanChoice === computerChoice) {
    resultsDisplayer.textContent = "Tie";
    isRoundPlayed = false;
  }

  // Checks human win
  else if (getsBeatenBy[computerChoice.toLowerCase()] === humanChoice) {
    resultsDisplayer.textContent = "Round Won!";
    humanScore++;
    isRoundPlayed = true;
  }

  // Gives point to computer
  else {
    resultsDisplayer.textContent = "Round Lost";
    computerScore++;
    isRoundPlayed = true;
  }

  // Prints current results
  scoreDisplayer.textContent = `${username} [${humanScore}] - Computer [${computerScore}]`;

  return isRoundPlayed;
}

// Gets number of rounds from user

function roundsNumber() {
  // Gets number of rounds from user

  let rounds = prompt("How many rounds would you like to play?");

  keepGoing = true;

  while (keepGoing) {
    // Checks and assigns rounds number to a valid format

    rounds = isRoundNumber(rounds);

    if (rounds) {
      // Returns the number if it's a valid number

      return rounds;
    }

    // Repeats the prompt if necessary

    console.log("Invalid number of rounds");
    rounds = prompt("Please enter a valid number of rounds");
  }
}

// Gets the winner for a full game of "Rock, Paper, Scissors"

function getsWinner(player1, pointsP1, player2, pointsP2) {
  // Checks tie, returns "tie"

  if (pointsP1 === pointsP2) {
    return "tie";
  }

  // Returns winner
  else {
    return pointsP1 > pointsP2 ? player1 : player2;
  }
}

// Wraps the whole game

function gameWrapper() {
  // Asks for username

  const username = prompt("Please enter your username");

  // Asks how many rounds to play

  let numberOfRounds = roundsNumber();

  // Plays for a determined number of rounds

  while (numberOfRounds) {
    // Plays a round of Rock, Paper, Scissors

    if (playRound(username, humanChoice, getComputerChoice())) {
      // Decrease the number of rounds remaining

      numberOfRounds--;
    }

    console.log(`Rounds remaining: ${numberOfRounds}`);
  }

  // Gets winner of the whole game or "tie"

  const winner = getsWinner(username, humanScore, "Computer", computerScore);

  // Final output messages

  
}

// HTML Selectors

let resultsDisplayer = document.querySelector(".results p");
let scoreDisplayer = document.querySelector(".score p");

// Score tracker

let humanScore = 0;
let computerScore = 0;

// Makes clicking a button select that option for the user


const buttons = document.querySelector(".container");
buttons.addEventListener("click", (e) => {
  humanChoice = e.target.id;
  switch (humanChoice){
    case "rock":
      playRound("Necro", "Rock", getComputerChoice());
      break;
    case "paper":
      playRound("Necro", "Paper", getComputerChoice());
      break;
    case "scissors":
      playRound("Necro", "Scissors", getComputerChoice());
      break;
    }
    if(humanScore >= 5 || computerScore >= 5) {
      const winner = getsWinner("Human", humanScore, "Computer", computerScore);
      resultsDisplayer.textContent = "GAME OVER";
      if (winner === "tie") {
        scoreDisplayer.textContent = "Game concluded in a tie";
      } else {
        scoreDisplayer.textContent = `Winner: ${winner}`;
      }
      buttons.style.pointerEvents = "none";
    }
});


// Executes the code

// gameWrapper();