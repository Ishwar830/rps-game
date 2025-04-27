
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSOR = "Scissor";
const NUMBER_OF_ROUNDS = 5;

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Show home page
const main = document.querySelector('.main');

showHomeScreen();

function showHomeScreen(){
    main.textContent = '';
    const startBtn = document.createElement('button');
    startBtn.textContent = "Play Game";
    startBtn.classList.add('start-btn');
    startBtn.addEventListener('click', playGame);
    main.appendChild(startBtn);
}


//GamePlay screen

function showGamePlayScreen(){
    main.textContent = '';
    showChoiceBtnList();
    showScoreBoard();
    showRoundMessageScreen();
    showHomeBtn();
}

function showChoiceBtnList(){
    const choiceArr = ['Rock', 'Paper', 'Scissor'];
    const choiceListContainer = document.createElement('div');
    for(let i=0; i<choiceArr.length; ++i){
        const choiceBtn = document.createElement('button');
        choiceBtn.textContent = choiceArr[i];
        choiceBtn.addEventListener('click', (e) => {
            const playerChoice = e.target.textContent;
            playRound(playerChoice, getComputerChoice());
        });
        choiceListContainer.appendChild(choiceBtn);
    }

    main.appendChild(choiceListContainer);
}

function showScoreBoard(){
    const scoreBoardTitle = document.createElement('h2');
    scoreBoardTitle.textContent = 'Human - Computer';
    const scoreBoard = document.createElement('p');
    scoreBoard.classList.add('scoreboard');
    main.appendChild(scoreBoardTitle);
    main.appendChild(scoreBoard);
}

function showHomeBtn(){
    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', showHomeScreen);
    main.appendChild(homeBtn);
}

function playGame(){
    humanScore = 0;
    computerScore = 0;
    currentRoundNumber = 1;
    showGamePlayScreen();
    updateScoreBoard();
}

function isGameOver(){
    return currentRoundNumber > NUMBER_OF_ROUNDS;
}

function showGameOverScreen(){
    main.textContent = '';
    const gameOverMessageContainer = document.createElement('p');
    gameOverMessageContainer.textContent = getGameOverMessage();
    main.appendChild(gameOverMessageContainer);
    showHomeBtn();
}

function updateScoreBoard(){
    const scoreBoard = document.querySelector('.scoreboard');
    scoreBoard.textContent = `${humanScore} - ${computerScore}`;
}

function playRound(humanChoice, computerChoice){
    if(isGameOver()){
        showGameOverScreen();
        return;
    }

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

    currentRoundNumber++;
    updateScoreBoard();
    updateRoundMessage(message);
}

function showRoundMessageScreen(){
    const messageContainer = document.createElement('p');
    messageContainer.classList.add('round-message');
    main.appendChild(messageContainer); 
}

function updateRoundMessage(message){
    const messageScreen = document.querySelector('.round-message');
    messageScreen.textContent = message;
}

function getComputerChoice(){
    let randomVal = parseInt(Math.random() * 3);
    if(randomVal === 0) return ROCK;
    if(randomVal === 1) return PAPER;
    return SCISSOR;
}

function getGameOverMessage(){
    if(humanScore === computerScore) return "Game Tied";
    if(humanScore > computerScore) return "You won!";
    return "You lost! Better luck next time."
}