// Rock Paper Scissors Console Version

// Pseudo Code
// user inputs rock/paper/scissors done
// computer randomly choose rock/paper/scissors done
// compete user input vs random computer option 
// assign winner based on: paper > rock, rock > scissors, scissors > paper
// if user input and random computer option is the same, then it's a tie
// keep track of number of wins, first to win 5 rounds is the winner
// ask if user would like to play again

// goal: 'click' => send value => compare => tally score => click

let userScore = 0;
let computerScore = 0;
let roundCount = 1;

const btns = document.querySelectorAll('input'); // nodelist
btns.forEach(item => {
        item.addEventListener('click', () => {
            let result = game(item.value);
             if(result === 'win') {
                 userScore += 1;
             } else if (result === 'lose') {
                 computerScore += 1;
             }
             showScore(userScore, computerScore);
             if (userScore === 5) {
                const para = document.createElement('p');
                para.textContent = 'You won!';
                document.querySelector('.results').appendChild(para);
                playAgain();
             } else if (computerScore === 5) {
                const para = document.createElement('p');
                para.textContent = 'You lost :(';
                document.querySelector('.results').appendChild(para);
                playAgain();
             }
             roundCount++;
        });
    }
)

function game(userInput) {
    let computerInput = computerPlay();
    displayChoices(userInput, computerInput);
    result = compareChoices(userInput, computerInput);
    return result;
}

function computerPlay() {
    let computerOption = Math.floor(Math.random() * 3);
    if (computerOption === 0) return "Rock";
    else if (computerOption === 1) return "Paper";
    else if (computerOption === 2) return "Scissors";
}

function displayChoices(userInput, computerInput) {
    const results = document.querySelector('.results');
    const userSelection = document.createElement('p');
    const computerSelection = document.createElement('p');
    userSelection.textContent = `You chose ${userInput}`;
    computerSelection.textContent = `Computer chose ${computerInput}`;
    results.appendChild(userSelection);
    results.appendChild(computerSelection);
}

// compare choies between user input and random computer choice
function compareChoices(user, computer) {
    let userFirstChar = user.charAt(0).toLowerCase();
    let computerFirstChar = computer.charAt(0).toLowerCase();

    if (userFirstChar === "r") {
        if (computerFirstChar === "r") {
            const tiedResult = document.createElement('p');
            tiedResult.textContent = 'You Tied! You both chose rock.';
            document.querySelector('.results').appendChild(tiedResult);
            return 'tie';
        } else if (computerFirstChar === "p") {
            const lossResult = document.createElement('p');
            lossResult.textContent = 'You Lose! Paper beats rock.';
            document.querySelector('.results').appendChild(lossResult);
            return 'lose';
        } else if (computerFirstChar === "s") {
            const winResult = document.createElement('p');
            winResult.textContent = 'You Win! Rock beats scissors.';
            document.querySelector('.results').appendChild(winResult);
            return 'win';
        }
    } else if (userFirstChar === "p") {
        if (computerFirstChar === "r") {
            const winResult = document.createElement('p');
            winResult.textContent = 'You Win! Paper beats rock.';
            document.querySelector('.results').appendChild(winResult);
            return 'win';
        } else if (computerFirstChar === "p") {
            const tiedResult = document.createElement('p');
            tiedResult.textContent = 'You Tied! You both chose paper.';
            document.querySelector('.results').appendChild(tiedResult);
            return 'tie';
        } else if (computerFirstChar === "s") {
            const lossResult = document.createElement('p');
            lossResult.textContent = 'You Lose! Scissors beats paper.';
            document.querySelector('.results').appendChild(lossResult);
            return 'lose';
        }
    } else if (userFirstChar === "s") {
        if (computerFirstChar === "r") {
            const lossResult = document.createElement('p');
            lossResult.textContent = 'You Lose! Rock beats scissors.';
            document.querySelector('.results').appendChild(lossResult);
            return 'lose';
        } else if (computerFirstChar === "p") {
            const winResult = document.createElement('p');
            winResult.textContent = 'You Win! Scissors beats paper.';
            document.querySelector('.results').appendChild(winResult);
            return 'win';
        } else if (computerFirstChar === "s") {
            const tiedResult = document.createElement('p');
            tiedResult.textContent = 'You Tied! You both chose scissors.';
            document.querySelector('.results').appendChild(tiedResult);
            return 'tie';
        }
    } /* else { // user inputs any character besides r, p, s
        console.log("You need to choose rock, paper, or scissors!");
    } */
}

function showScore(user, computer) {
    const para = document.createElement('p');
    para.textContent = `User: ${user} --- Computer: ${computer}`;
    document.querySelector('.results').appendChild(para);
}

function playAgain() {
    const para = document.createElement('p');
    para.textContent = 'Play Again?';
    document.querySelector('.playAgain').appendChild(para);

    const yes = document.createElement('input');
    const no = document.createElement('input');
    yes.classList.add('yes');
    no.classList.add('no');
    yes.value = 'yes';
    no.value = 'no';
    yes.type = 'button';
    no.type = 'button';

    yes.addEventListener('click', () => {
        userScore = 0;
        computerScore = 0;
        roundCount = 1;
        removeChildNodes(document.querySelector('.results'));
        removeChildNodes(document.querySelector('.playAgain'));
    });

    document.querySelector('.playAgain').appendChild(yes);
    document.querySelector('.playAgain').appendChild(no);
}

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
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

/* input.addEventListener('click', () => {
    playRound(input.value);
}); */

// console.log("Rock Paper Scissors CONSOLE VERSION");
// console.log("First to 5 wins is the winner!") for first to 5 function game();
// console.log("Play 5 rounds vs a computer!");
// game();

/* let buttons = document.querySelector('.button-container');
let oneGame = buttons.addEventListener('click', (e) => {
    const isBtn = (e.target.nodeName === 'INPUT')
    if (!isBtn) {
        return;
    }
    let computerInput = computerPlay();
    choices(e.target.value, computerInput);
    let result = compareChoices(e.target.value, computerInput);
    return result;
}); */