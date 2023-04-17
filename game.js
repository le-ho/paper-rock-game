
let element = ['paper', 'rock', 'scissors'];
// get choice from the computer
function getComputerChoice() {
return element[Math.floor(Math.random() * element.length)];
}

const computerElement = getComputerChoice(element);


// player choose      his weapon
//let playerWon;
//let computerWon;

let playerElement = window.prompt("Choose paper,rock or scissors", "");

function playRound(playerElement, computerElement)
{
//player win
if (playerElement.toLowerCase() == "scissors" && computerElement == "paper")
{
return "You Won! scissors beats paper";
}
else if (playerElement.toLowerCase() == "rock" && computerElement == "scissors")
{
return "You Won! rock beats scissors";
}
else if (playerElement.toLocaleLowerCase() == "paper" && computerElement == "rock")
{
return "You Won! paper beats rock";
//player loose
}
else if (playerElement.toLowerCase() == "scissors" && computerElement == "rock")
{
return "You Lose! rock beats scissors";
}

else if (playerElement.toLowerCase() == "rock" && computerElement == "paper")
{
return "You Lose! paper beats rock";
}

else if (playerElement.toLowerCase() == "paper" && computerElement == "scissors")
{
return "You Lose! Scissors beats paper";
}
// if player element is equal computer element
else  if (computerElement == playerElement.toLocaleLowerCase())
{
return ("Draw");
}

}

console.log(playRound(computerElement, playerElement))

