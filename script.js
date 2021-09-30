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

console.log(compareChoices(userInput, computerInput));

function computerPlay() {
    let computerOption = Math.floor(Math.random() * 3);
    if (computerOption === 0) return "Rock";
    else if (computerOption === 1) return "Paper";
    else if (computerOption === 2) return "Scissors";
}

function compareChoices(user, computer) {
    let userFirstChar = user.charAt(0).toLowerCase();
    let computerFirstChar = computer.charAt(0).toLowerCase();

    if (userFirstChar === "r") {
        if (computerFirstChar === "r") {
            return "You Tied! You both chose rock.";
        } else if (computerFirstChar === "p") {
            return "You Lose! Paper beats rock.";
        } else if (computerFirstChar === "s") {
            return "You Win! Rock beats scissors.";
        }
    } else if (userFirstChar === "p") {
        if (computerFirstChar === "r") {
            return "You Win! Paper beats rock.";
        } else if (computerFirstChar === "p") {
            return "You Tied! You both chose paper.";
        } else if (computerFirstChar === "s") {
            return "You Lose! Scissors beats paper.";
        }
    } else if (userFirstChar === "s") {
        if (computerFirstChar === "r") {
            return "You Lose! Rock beats scissors.";
        } else if (computerFirstChar === "p") {
            return "You Win! Scissors beats paper.";
        } else if (computerFirstChar === "s") {
            return "You Tied! You both chose scissors.";
        }
    } else { // user inputs any character besides r, p, s
        return "You need to choose rock, paper, or scissors!";
    }
}