let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector('#user-score');
const computerScore_span = document.querySelector('#computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.querySelector('#r');
const paper_div = document.querySelector('#p');
const scissors_div = document.querySelector('#s');
const bubble_div = document.querySelector('.choises');
const runitagain = document.querySelector('#closeit');
runitagain.hidden = true;

const getComputerChoice = () => {
  const choices = ['r', 'p', 's'];
  const randomNumber = choices[Math.floor(Math.random() * choices.length)];
  return randomNumber;
};

const convertToWord = (letter) => {
  if (letter === 'r') return 'Rock';
  if (letter === 's') return 'Scissors';
  return 'Paper';
};

const win = (user, computer) => {
  userScore++;

  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `${convertToWord(user)}  beats ${convertToWord(computer)} You Win`;

  checkForEnd();
};

const lose = (user, computer) => {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(user)}  loses to   ${convertToWord(computer)} You Lost`;
  checkForEnd();
};

const draw = (user, computer) => {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(user)}  equals   ${convertToWord(computer)} It's a Draw!`;
  checkForEnd();
};

const game = (userChoice) => {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
  }
};

const checkForEnd = () => {
  if (userScore === 5 || computerScore === 5) {
    if (userScore > computerScore) {
      result_p.innerHTML = `You win! You beat the computer by ${userScore - computerScore} `;
      removeOptions();
      restargame();
    } else {
      result_p.innerHTML = `You lose! You lost by ${computerScore - userScore} `;
      removeOptions();
      restargame();
    }
  }
};

const removeOptions = () => {
  document.querySelector('.choices').removeChild(document.querySelector('#r'));
  document.querySelector('.choices').removeChild(document.querySelector('#p'));
  document.querySelector('.choices').removeChild(document.querySelector('#s'));
};

const restargame = () => {
  runitagain.hidden = false;
  let pressthis = document.querySelector('#magic');
  pressthis.hidden = false;
  pressthis.innerHTML = 'Reset';
  pressthis.addEventListener('click', () => {
    location.reload();
  });
};

const main = () => {
  rock_div.addEventListener('click', () => {
    game('r');
  });

  paper_div.addEventListener('click', () => {
    game('p');
  });

  scissors_div.addEventListener('click', () => {
    game('s');
  });
};
main();
