//declaring constant variables----------------------------------------------------
const startGameBtn = document.getElementById('start-game-btn');
const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button')
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WINS";
const RESULT_COMPUTER_WINS = "COMPUTER WINS";
//declaring constant variables----------------------------------------------------

//variables that are changing during play-------------------------------------------
let writeWinner = document.querySelector("#win-counter");
let writeLoser = document.querySelector('#loss-counter');
let gameIsRunning = false;
let winCounter = 0;
let lossCounter = 0;
let tieCounter = 0;
//variables that are changing during play-------------------------------------------


//getting the player and the computer choices-------------------------------------------

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

//getting the player and the computer choices-------------------------------------------

//Results section------------------------------------------------------------

const resultOfGameIsWinner = function(){
    console.log("wins are currently: " + winCounter)
}    
     
const resultOfGameIsLoser = function(){
    console.log("losses are currently: " + lossCounter)
}    
    
const resultOfGameIsTie = function(){
    tieCounter++;
    console.log("ties are currently: " + tieCounter)
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

const outputCounts = function(){ //working but increasing by 2
  writeWinner.textContent = winCounter;
  writeLoser.textContent = lossCounter;
}  
      
//Results section------------------------------------------------------------ 

//gameplay mechanics---------------------------------------------------------

// startGameBtn.addEventListener("click", function(){
//     if(gameIsRunning){
//         return;
//     }
//     gameIsRunning = true;
//     console.log("Game is starting...");
//     const playerChoice = getPlayerChoice();
//     const computerChoice = getComputerChoice();
//     const winner = getWinner(computerChoice, playerChoice);
//     let message = `You picked ${playerChoice}, computer picked ${computerChoice}, `
//     if (winner === RESULT_DRAW){
//         message = message + "result is a draw!";
        
//     } else if (winner === RESULT_PLAYER_WINS) {
//         message = message + "You won!";
//         winCounter += 1;
        
//     } else {
//         message = message + "You lost!";
//         winCounter = 0
//         lossCounter += 1;
// }
//     alert(message); 
//     gameIsRunning = false;
//     outputCounts();    
// });

//gameplay mechanics---------------------------------------------------------       
rockButton.addEventListener("click", function(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerChoice = ROCK;
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    let message = `You picked ROCK, computer picked ${computerChoice}, `
    if (winner === RESULT_DRAW){
        message = message + "result is a draw!";
        
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + "You won!";
        winCounter += 1;
        
    } else {
        message = message + "You lost!";
        winCounter = 0
        lossCounter += 1;
}
    alert(message); 
    gameIsRunning = false;
    outputCounts();    
});
paperButton.addEventListener("click", function(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerChoice = PAPER;
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    let message = `You picked PAPER, computer picked ${computerChoice}, `
    if (winner === RESULT_DRAW){
        message = message + "result is a draw!";
        
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + "You won!";
        winCounter += 1;
        
    } else {
        message = message + "You lost!";
        winCounter = 0
        lossCounter += 1;
}
    alert(message); 
    gameIsRunning = false;
    outputCounts();    
});
scissorsButton.addEventListener("click", function(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerChoice = SCISSORS;
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    let message = `You picked SCISSORS, computer picked ${computerChoice}, `
    if (winner === RESULT_DRAW){
        message = message + "result is a draw!";
        
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + "You won!";
        winCounter += 1;
        
    } else {
        message = message + "You lost!";
        winCounter = 0
        lossCounter += 1;
}
    alert(message); 
    gameIsRunning = false;
    outputCounts();    
});       