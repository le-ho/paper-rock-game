//game
let computerElement; // variable to store getComputerChoice in
let playerElement; // variable  to store getPlayerChoice in

let element = ['paper', 'rock', 'scissors']; // elements for computer to choose from
// function designed to get choice from the computer
function getComputerChoice() {
computerElement = element[Math.floor(Math.random() * element.length)];
return computerElement;
}

// get choice from the player by typing it in the window
function getPlayerChoice() {

playerChoice = window.prompt("Choose paper,rock or scissors", "");
   
return playerElement = (playerChoice.toLowerCase());
}



let playerWin = 0; // variable to store number of player wins
let computerWin = 0; // variable to store number of computer wins

// single round between player and computer

function playRound(playerElement, computerElement)
{
// check if player win if yes add count to playerWin 
if (playerElement == "scissors" && computerElement == "paper")

{
    playerWin++;
return ("You Won! scissors beats paper");

}
else if (playerElement == "rock" && computerElement == "scissors")
{
    playerWin++; 
return ("You Won! rock beats scissors");
}
else if (playerElement == "paper" && computerElement == "rock")
{
    playerWin++;
return ("You Won! paper beats rock");
//player loose add count to computerWin
}
else if (playerElement == "scissors" && computerElement == "rock")
{
    computerWin++;
return ("You Lose! rock beats scissors");
}

else if (playerElement == "rock" && computerElement == "paper")
{
    computerWin++;
    return ("You Lose! paper beats rock");
}

else if (playerElement == "paper" && computerElement == "scissors")
{
    computerWin++;
    return ("You Lose! Scissors beats paper");
}
// if player element is equal computer element
else  if (computerElement == playerElement)
{
return ("It's a tie");
}

}

// play 5 games in the row, one woh get 3 wins in round win the game

function game()
{
    getPlayerChoice(playerElement);
    getComputerChoice();
    playRound(playerElement, computerElement);

    console.log('you choose', playerElement);
    console.log('number of your wins', playerWin);
    console.log('computer choose', computerElement);
    console.log('number of computer wins',computerWin);

    gameResult(computerWin, playerWin) 

    getPlayerChoice(playerElement);
    getComputerChoice();
    playRound(playerElement, computerElement);

    console.log('you choose', playerElement);
    console.log('number of your wins', playerWin);
    console.log('computer choose', computerElement);
    console.log('number of computer wins',computerWin);

    gameResult(computerWin, playerWin) 

    getPlayerChoice(playerElement);
    getComputerChoice();
    playRound(playerElement, computerElement);

    console.log('you choose', playerElement);
    console.log('number of your wins', playerWin);
    console.log('computer choose', computerElement);
    console.log('number of computer wins',computerWin);

    gameResult(computerWin, playerWin) 

    getPlayerChoice(playerElement);
    getComputerChoice();
    playRound(playerElement, computerElement);

    console.log('you choose', playerElement);
    console.log('number of your wins', playerWin);
    console.log('computer choose', computerElement);
    console.log('number of computer wins',computerWin);

    gameResult(computerWin, playerWin) 

    getPlayerChoice(playerElement);
    getComputerChoice();
    playRound(playerElement, computerElement);

    console.log('you choose', playerElement);
    console.log('number of your wins', playerWin);
    console.log('computer choose', computerElement);
    console.log('number of computer wins',computerWin);

    gameResult(computerWin, playerWin) 



    } 

// coutning wins, 5 games in the row, wins one who have 3 wins first

function gameResult(computerWin, playerWin) 
{
    if (computerWin >= 3)
   {
   return ("Computer Win the game");
    }
else if (playerWin >= 3)
   {
       return ("You Win! the game!");
    }
else if (playerWin < 3 || computerWin < 3)
{
    return ("play again");
}

}

console.log(game());
console.log(gameResult(computerWin, playerWin));



