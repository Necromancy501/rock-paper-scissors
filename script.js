// Returns "rock", "paper" or "scissors" randomly

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
