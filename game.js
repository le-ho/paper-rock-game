
let elements = ['paper', 'rock', 'scissors'];
// get choice from the computer
function getComputerChoice() {
return computerElements = elements[Math.floor(Math.random() * elements.length)];

}

let playerElement = String(window.prompt("Choose paper,rock or scissors", ""));
{
if (playerElement.toLowerCase == "scissors" && computerElements == "paper") 
return String("You Won! scissors beats paper");

else if (playerElement.toLowerCase == "scissors" && computerElements == "rock")
return String("You Lose! rock beats scissors");

else if (playerElement.toLowerCase == "rock" && computerElements == "paper")
return String("You Loose! paper beats rock");

else if (playerElement.toLowerCase == "rock" && computerElements == "scissors")
return String("You Won! rock beats scissors");

else if (playerElement.toLocaleLowerCase == "paper" && computerElements == "rock")
return String("You Won! paper beats rock");

else if (playerElement.toLowerCase == "paper" && computerElements == "scissors")
return String ("You Loose! Scissors beats paper");

else if return String ("Draw");

}