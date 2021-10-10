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
// console.log("Play 5 rounds vs a computer!");
// game();

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
            const tiedResult = document.createElement('p');
            tiedResult.textContent = 'You Tied! You both chose rock.';
            document.querySelector('.results').appendChild(tiedResult);
            return 3;
        } else if (computerFirstChar === "p") {
            const lossResult = document.createElement('p');
            lossResult.textContent = 'You Lose! Paper beats rock.';
            document.querySelector('.results').appendChild(lossResult);
            return 2;
        } else if (computerFirstChar === "s") {
            const winResult = document.createElement('p');
            winResult.textContent = 'You Win! Rock beats scissors.';
            document.querySelector('.results').appendChild(winResult);
            return 1;
        }
    } else if (userFirstChar === "p") {
        if (computerFirstChar === "r") {
            const winResult = document.createElement('p');
            winResult.textContent = 'You Win! Paper beats rock.';
            document.querySelector('.results').appendChild(winResult);
            return 1;
        } else if (computerFirstChar === "p") {
            const tiedResult = document.createElement('p');
            tiedResult.textContent = 'You Tied! You both chose paper.';
            document.querySelector('.results').appendChild(tiedResult);
            return 3;
        } else if (computerFirstChar === "s") {
            const lossResult = document.createElement('p');
            lossResult.textContent = 'You Lose! Scissors beats paper.';
            document.querySelector('.results').appendChild(lossResult);
            return 2;
        }
    } else if (userFirstChar === "s") {
        if (computerFirstChar === "r") {
            const lossResult = document.createElement('p');
            lossResult.textContent = 'You Lose! Rock beats scissors.';
            document.querySelector('.results').appendChild(lossResult);
            return 2;
        } else if (computerFirstChar === "p") {
            const winResult = document.createElement('p');
            winResult.textContent = 'You Win! Scissors beats paper.';
            document.querySelector('.results').appendChild(winResult);
            return 1;
        } else if (computerFirstChar === "s") {
            const tiedResult = document.createElement('p');
            tiedResult.textContent = 'You Tied! You both chose scissors.';
            document.querySelector('.results').appendChild(tiedResult);
            return 3;
        }
    } else { // user inputs any character besides r, p, s
        console.log("You need to choose rock, paper, or scissors!");
    }
}

function playRound(userInput) {
    // let userInput;
    let computerInput = computerPlay();
    const results = document.querySelector('.results');
    const userSelection = document.createElement('p');
    const computerSelection = document.createElement('p');
    userSelection.textContent = `You chose ${userInput}`;
    computerSelection.textContent = `Computer chose ${computerInput}`;
    results.appendChild(userSelection);
    results.appendChild(computerSelection);
    compareChoices(userInput, computerInput);
}

// function for first to 5
/* function game() {
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
} */

// function for 5 rounds
/* function game() {
    let userScore = 0;
    let computerScore = 0;
    
    for (let i = 1; i <= 5; i++) {
        let userInput = prompt("Rock, Paper, or Scissors?", "");
        let computerInput = computerPlay();
        console.log(`Round ${i}:`);
        console.log(userInput);log(computerInput);

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

let buttons = document.querySelector('.button-container');
buttons.addEventListener('click', (e) => {
    const isBtn = (e.target.nodeName === 'INPUT')
    if (!isBtn) {
        return;
    }
    playRound(e.target.value);
});

/* input.addEventListener('click', () => {
    playRound(input.value);
}); */