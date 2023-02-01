const PlayerOptions = {
  Rock: 'rock',
  Paper: 'paper',
  Scissor: 'scissor'
};

let container = document.querySelector(".container");
let container2 = document.querySelector(".container2");

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let tryAgainMsg = document.querySelector(".tryAgain");
let playAgainBtn = document.querySelector(".playAgainBtn");
let playerScoreMsg = document.querySelector(".playerScore");
let computerScoreMsg = document.querySelector(".computerScore");
let gameRules = document.querySelector(".gameRules");
let playerScore = 0;
let computerScore = 0;

playAgainBtn.addEventListener("click", () => {
  container.style.display = "flex";
  container2.style.display = "none";
});

let playerChoices = [rock, paper, scissor];
playerChoices.forEach((item) => {
  item.addEventListener("click", () => {
    tryAgainMsg.style.display = 'none';
    verdict(item.dataset.choice);
  })
});

function verdict(playerChoice) {
  let num = Math.floor(Math.random() * 3);
  let computerChoice = playerChoices[num].dataset.choice;

  if (playerChoice == computerChoice) {
    console.log("Draw");
    draw();
  } else if (playerChoice == PlayerOptions.Rock) {
    if (computerChoice == PlayerOptions.Scissor)
      display(playerChoice, computerChoice);
    else
      display(playerChoice, computerChoice, false);
  } else if (playerChoice == PlayerOptions.Scissor) {
    if (computerChoice == PlayerOptions.Rock)
      display(playerChoice, computerChoice, false);
    else
      display(playerChoice, computerChoice);
  } else if (playerChoice == PlayerOptions.Paper) {
    if (computerChoice == PlayerOptions.Rock)
      display(playerChoice, computerChoice);
    else
      display(playerChoice, computerChoice, false);
  }
}


function display(playerChoice, computerChoice, isWin = true) {
  let playerAction = document.querySelector(".playerAction");
  playerAction.src = `images/${playerChoice}.png`;

  let pcAction = document.querySelector(".pcAction");
  pcAction.src = `images/${computerChoice}.png`;

  let res = document.getElementById("resultTxt");
  if (isWin) {
    playerScore++;
    res.innerText = "YOU WON";
  } else {
    computerScore++;
    res.innerText = "YOU LOSE";
  }
  resultScreen();
}

function draw() {
  console.log("in blink");
  tryAgainMsg.style.display = 'block';
}

function resultScreen() {
  container.style.display = "none";
  container2.style.display = "flex";
  playerScoreMsg.innerText = playerScore;
  computerScoreMsg.innerText = computerScore;
}

let rulesBtn = document.querySelector(".rules");
rulesBtn.addEventListener("click", () => {
  gameRules.style.display = "block";

});
let closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", () => {
  gameRules.style.display = "none";
});
