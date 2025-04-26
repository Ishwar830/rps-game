
const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";

let humanScore = 0;
let computerScore = 0;

// playGame();

function playGame(){
    const NUMBER_OF_ROUNDS = 5;
    
    for(let i=0; i<NUMBER_OF_ROUNDS; ++i){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(getGameOverMessage());
}


function playRound(humanChoice, computerChoice){
    let message = "";
    
    if(humanChoice === computerChoice){
        message = "It's a tie.";
    }
    else if((humanChoice === ROCK && computerChoice === SCISSOR) ||
        (humanChoice === SCISSOR && computerChoice === PAPER) ||
        (humanChoice === PAPER && computerChoice === ROCK)
    ){
        humanScore++;
        message = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else{
        computerScore++;
        message = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    console.log(message);
}

function getComputerChoice(){
    let randomVal = parseInt(Math.random() * 3);
    if(randomVal === 0) return ROCK;
    if(randomVal === 1) return PAPER;
    return SCISSOR;
}

function getHumanChoice(){
    let choice = prompt("Enter your choice");
    if(choice === null) return;
    choice = choice.toLowerCase();
    if(choice !== ROCK && choice !== PAPER && choice != SCISSOR) return;
    return choice;
}

function getGameOverMessage(){
    if(humanScore === computerScore) return "Game Tied";
    if(humanScore > computerScore) return "You won!";
    return "You lost! Better luck next time."
}