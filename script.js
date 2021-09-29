// Rock Paper Scissors Console Version

// Pseudo Code
// user inputs rock/paper/scissors done
// computer randomly choose rock/paper/scissors done
// compete user input vs random computer option 
// assign winner based on: paper > rock, rock > scissors, scissors > paper
// if user input and random computer option is the same, then it's a tie
// ask if user would like to play again
// can add a score count; user vs computer

console.log("Rock Paper Scissors CONSOLE VERSION");
let userInput = prompt("Rock, Paper, or Scissors?", "");
let computerInput = computerPlay();
console.log(userInput);
console.log(computerInput);
// compareChoices(userInput, computerInput);

function computerPlay() {
    let computerOption = Math.floor(Math.random() * 3);
    if (computerOption === 0) return "Rock";
    else if (computerOption === 1) return "Paper";
    else if (computerOption === 2) return "Scissors";
}

function compareChoices(user, computer) {
    
}