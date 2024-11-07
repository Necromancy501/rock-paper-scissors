// Capitalizes a word. Used in "getHumanChoice()"

function capitalize(word) {
  word = word.toLowerCase();
  return word.charAt(0).toUpperCase() + word.slice(1);
}

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

  return computerChoice;
}

// Gets and returns human choice for Rock, Paper, Scissors

function getHumanChoice() {

  keepGoing = true;

  while(keepGoing){

    // Array with all the possible choices.

    const options = ["Rock", "Paper", "Scissors"];

    // Asks the user to input a choice: "Rock, Paper or Scissors?"

    const choice = capitalize(prompt("Rock, Paper or Scissors?"));

    // Checks if it's a valid choice and returns that choice.

    if (options.includes(choice)) {
      return choice;
    }

    // Otherwise return and keeps the loop going

    else {
      console.log("please enter a valid choice");
    }
  }



}

// Game logic for a round of "Rock, Paper, Scissors"

function playRound(humanChoice, computerChoice) {

  // Object that stores which choice beats which

  const getsBeatenBy = {
    paper: "Scissors",
    scissors: "Rock",
    rock: "Paper"
  }

  // Checks ties

  if (humanChoice === computerChoice) {
    console.log("Tie");
  }

  // Checks human win

  else if (getsBeatenBy[computerChoice.toLowerCase()] === humanChoice) {
    console.log("Round won!")
    humanScore++;
  }

  // Gives point to computer

  else {
    console.log("Round lost")
    computerScore++
  }

  // Prints current results and ends the round

  console.log(`You [${humanScore}] - Computer [${computerScore}]`);

}

// Score tracker

let humanScore = 0;
let computerScore = 0;

// Plays a round of Rock, Paper, Scissors

playRound( getHumanChoice(), getComputerChoice() )
