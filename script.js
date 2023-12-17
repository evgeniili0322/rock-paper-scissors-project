function getComputerChoice() {
  let choice;

  randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      choice = "rock";
      break;
    case 1:
      choice = "paper";
      break;
    case 2:
      choice = "scissors";
      break;
  }
  
  return choice;
}

let playerScore = 0, 
    computerScore = 0;

function playRound(e) {
  const playerSelection = e.target.id.slice(0, -3);
  const computerSelection = getComputerChoice();

  let result;

  if (playerSelection != computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
      result = `Computer: ${computerSelection} You: ${playerSelection}, You lose`;
      computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      result = `Computer: ${computerSelection} You: ${playerSelection}, You lose`;
      computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      result = `Computer: ${computerSelection} You: ${playerSelection}, You lose`;
      computerScore++;
    } else {
      result = `Computer: ${computerSelection} You: ${playerSelection}, You win`;
      playerScore++
    }
  } else result = `Computer: ${computerSelection} You: ${playerSelection}, Ties`;

  const roundResult = document.querySelector('#round-result');
  if (playerScore == 5 || computerScore == 5) {
    if (playerScore === 5) alert('You win the game');
    if (computerScore === 5) alert('Computer win the game');
    playerScore = 0;
    computerScore = 0;
    roundResult.textContent = 'Click on button to play';
  } else  roundResult.textContent = result;

  const score = document.querySelector('#score');
  score.textContent = `Your score: ${playerScore} - Computer score: ${computerScore}`;
}

const rpsbutton = document.querySelectorAll('.rps-button');

for (let i = 0; i < rpsbutton.length; i++) {
  rpsbutton[i].addEventListener('click', playRound);
}