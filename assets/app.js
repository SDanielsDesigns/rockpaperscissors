const startGameBtn = document.getElementById('start-game-btn');
const writeWinner = document.getElementById('win-counter');
const writeLoser = document.getElementById('loss-counter');
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button')
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WINS";
const RESULT_COMPUTER_WINS = "COMPUTER WINS";

let winCounter = 0;
let lossCounter = 0;
let tieCounter = 0;

let gameIsRunning = false;
;
const getPlayerChoice = function(){
    const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`, "rock").toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
        
    }
    return selection;
};

const getComputerChoice = function(){
    const randomValue = Math.random();
    if(randomValue < 0.34){
        return ROCK;
    } else if( randomValue < 0.67){
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner = function(cChoice, pChoice) {
    
    if (cChoice === pChoice){
        resultOfGameIsTie();
        return RESULT_DRAW;
    } else if ( cChoice === ROCK && pChoice === PAPER ||
                cChoice === PAPER && pChoice === SCISSORS ||
                cChoice === SCISSORS && pChoice === ROCK) {
    
    resultOfGameIsWinner();   
        return RESULT_PLAYER_WINS;
        } else {
    resultOfGameIsLoser();
        return RESULT_COMPUTER_WINS;
    }
     
}       
        


const resultOfGameIsWinner = function(){
    winCounter++;
    console.log("wins are currently: " + winCounter)
    
}    
const resultOfGameIsLoser = function(){
    lossCounter++;
    console.log("losses are currently: " + lossCounter)
    
       
}
const resultOfGameIsTie = function(){
    tieCounter++;
    console.log("ties are currently: " + tieCounter)
    
       
}       



startGameBtn.addEventListener("click", function(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    let message = `You picked ${playerChoice}, computer picked ${computerChoice}, `
    if (winner === RESULT_DRAW){
        message = message + "result is a draw!";
        
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + "You won!";
        // winCounter += 1;
    } else {
        message = message + "You lost!";
        // lossCounter += 1;
}
    alert(message); 
    gameIsRunning = false;    
    
});    
rockButton.addEventListener("click",)
paperButtonButton.addEventListener("click",)
scissorsButton.addEventListener("click",)








    
