// Rock Paper Scissors Console Version

// Pseudo Code
// user inputs rock/paper/scissors done
// computer randomly choose rock/paper/scissors done
// compete user input vs random computer option 
    // assign winner based on: paper > rock, rock > scissors, scissors > paper
    // if user input and random computer option is the same, then it's a tie
// keep track of number of wins, first to win 5 rounds is the winner
// ask if user would like to play again

console.log("Rock Paper Scissors CONSOLE VERSION");
// console.log("First to 5 wins is the winner!") for first to 5 function game();
console.log("Play 5 rounds vs a computer!");
game();

function computerPlay() {
    let computerOption = Math.floor(Math.random() * 3);
    if (computerOption === 0) return "Rock";
    else if (computerOption === 1) return "Paper";
    else if (computerOption === 2) return "Scissors";
}

// compare choies between user input and random computer choice
// returns true on user win and false on user loss; returns nothing on tie which only works for while loop(look into this? or re run to double check)
    // seems that a function with no return value will return false (or null/undefined?)
// changed return values for 'for loop' version; 1 for win, 2 for loss, 3 for tied (which is unused)
function compareChoices(user, computer) {
    let userFirstChar = user.charAt(0).toLowerCase();
    let computerFirstChar = computer.charAt(0).toLowerCase();

    if (userFirstChar === "r") {
        if (computerFirstChar === "r") {
            console.log("You Tied! You both chose rock.");
            return 3;
        } else if (computerFirstChar === "p") {
            console.log("You Lose! Paper beats rock.");
            return 2;
        } else if (computerFirstChar === "s") {
            console.log("You Win! Rock beats scissors.");
            return 1;
        }
    } else if (userFirstChar === "p") {
        if (computerFirstChar === "r") {
            console.log("You Win! Paper beats rock.");
            return 1;
        } else if (computerFirstChar === "p") {
            console.log("You Tied! You both chose paper.");
            return 3;
        } else if (computerFirstChar === "s") {
            console.log("You Lose! Scissors beats paper.");
            return 2;
        }
    } else if (userFirstChar === "s") {
        if (computerFirstChar === "r") {
            console.log("You Lose! Rock beats scissors.");
            return 2;
        } else if (computerFirstChar === "p") {
            console.log("You Win! Scissors beats paper.");
            return 1;
        } else if (computerFirstChar === "s") {
            console.log("You Tied! You both chose scissors.");
            return 3;
        }
    } else { // user inputs any character besides r, p, s
        console.log("You need to choose rock, paper, or scissors!");
    }
}
// function for first to 5
function game() {
    let userScore = 0;
    let computerScore = 0;
    let roundCount = 1;

    while (userScore < 5 && computerScore < 5) {
        let userInput = prompt("Rock, Paper, or Scissors?", "");
        let computerInput = computerPlay();
        console.log(`Round ${roundCount}:`);
        console.log(userInput);
        console.log(computerInput);

        if (compareChoices(userInput, computerInput) === 1) {
            userScore += 1;
        } else if (compareChoices(userInput, computerInput) === 2) {
            computerScore += 1;
        }
        console.log(`User Score: ${userScore}`);
        console.log(`Computer Score: ${computerScore}`);
        roundCount++;
    }

    if (userScore === 5) {
        console.log("You won!");
    } else { // computerScore === 5
        console.log("You lost.");
    }
}

// function for 5 rounds
/* function game() {
    let userScore = 0;
    let computerScore = 0;
    
    for (let i = 1; i <= 5; i++) {
        let userInput = prompt("Rock, Paper, or Scissors?", "");
        let computerInput = computerPlay();
        console.log(`Round ${i}:`);
        console.log(userInput);
        console.log(computerInput);

        if (compareChoices(userInput, computerInput) === 1) {
            userScore += 1;
        } else if (compareChoices(userInput, computerInput) === 2) {
            computerScore += 1;
        }
        console.log(`User Score: ${userScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }

    if (userScore > computerScore) {
        console.log("You won!");
    } else if (computerScore > userScore) {
        console.log("You lost.");
    } else {
        console.log("You tied.");
    }
} */