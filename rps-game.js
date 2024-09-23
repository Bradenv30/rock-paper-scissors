/*
1: Set up a function to make the computers choice, either rock paper or scissors
2: Set up a function to get a prompt from the user to select a number/string correlating to rock paper or scissors
3: Set up a function that compares them and returns the winner
4: Set up a counter that adds 1 for each victory
5: Set it up to play 5 rounds, declare the winner
*/

/* Computer choice, make it return either 1, 2, or 3. Assign rock paper scissors to it */
function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);

  const move = ["ROCK", "PAPER", "SCISSORS"];
  return move[number];
}
let choice = getComputerChoice();

/* Get user choice */
function getHumanChoice() {
  let userInput = prompt("Rock, Paper, or Scissors? ").trim().toUpperCase();

  if (
    userInput === "ROCK" ||
    userInput === "PAPER" ||
    userInput === "SCISSORS"
  ) {
    return userInput;
  } else {
    alert("You must choose Rock, Paper, or Scissors.");
    return getHumanChoice();
  }
}

let humanScore = 0;
let computerScore = 0;
function playGame() {
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    if (humanChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
      (humanChoice === "PAPER" && computerChoice === "ROCK") ||
      (humanChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
      humanScore++;
      return "You won this round!";
    } else {
      computerScore++;
      return "The computer won this round!";
    }
  }

  for (let i = 0; i < 6; i++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    const result = playRound(humanSelection, computerSelection);

    console.log(`You chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log(result);
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("You won! Lucky round");
  } else if (humanScore < computerScore) {
    console.log("Better luck next time chump.");
  }
}
playGame();
