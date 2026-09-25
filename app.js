const spaces = document.getElementsByClassName("space");
const message = document.getElementById("condition-message");
const resetBtn = document.getElementById("resetBtn");
const whoseturn = document.getElementById("whose-turn");
let computerWin = false;
let playerWin = false;
let playerTurn = false;
let computerTurn = false;

for (s of spaces) {
  s.addEventListener("click", handleSpaceClick);
}

resetBtn.addEventListener("click", resetBoard);

function handleSpaceClick() {
  playerTurn = true;
  this.innerHTML = "x";
  conditions();
  playerTurn = false;
}

function resetBoard() {
  for (sp of spaces) {
    sp.innerHTML = "";
  }
  message.innerHTML = "";
}

function conditions() {
  if (
    (spaces[0].textContent == "x" &&
      spaces[1].textContent == "x" &&
      spaces[2].textContent == "x") ||
    (spaces[3].textContent == "x" &&
      spaces[4].textContent == "x" &&
      spaces[5].textContent == "x") ||
    (spaces[6].textContent == "x" &&
      spaces[7].textContent == "x" &&
      spaces[8].textContent == "x")
  ) {
    message.innerHTML = "You win!";
    playerWin = true;
  } else if (
    (spaces[0].textContent == "x" &&
      spaces[4].textContent == "x" &&
      spaces[8].textContent == "x") ||
    (spaces[2].textContent == "x" &&
      spaces[4].textContent == "x" &&
      spaces[6].textContent == "x")
  ) {
    message.innerHTML = "You win!";
    playerWin = true;
  } else if (
    (spaces[0].textContent == "x" &&
      spaces[3].textContent == "x" &&
      spaces[6].textContent == "x") ||
    (spaces[1].textContent == "x" &&
      spaces[4].textContent == "x" &&
      spaces[7].textContent == "x") ||
    (spaces[2].textContent == "x" &&
      spaces[5].textContent == "x" &&
      spaces[8].textContent == "x")
  ) {
    message.innerHTML = "You win!";
    playerWin = true;
  }
}

function displayTurn(playerTurn, computerTurn) {
  if ((playerTurn = false)) {
    whoseturn.innerHTML = "Computer's turn";
  } else if ((computerTurn = false)) {
    whoseturn.innerHTML = "Player's turn";
  }
}

function computer(spaces) {
  displayTurn(playerTurn, computerTurn);
  playerTurn = true;
  if (!playerTurn) {
    playerTurn = false;
  }
  if (!playerTurn) {
    setTimeout((computer) => {
      spaces;
    }, 1000);
    let randomNum = Math.floor(Math.random() * 9);
    spaces[randomNum].innerHTML = "o";
  }
}

handleSpaceClick();
computer(spaces);

//Based on this starter code, write Tic Tac Toe
//Use at least 5 functions (check for win, tie, show win screen, show tie screen, reset, update turn
// (show whose turn it is))
//Do not allow clicking an element that has already been taken
//Style it all to look nice

//extension:
//use setTimeout() to simulate a 1 player vs computer game.
// set timeout for the cpu would be to simulate a pause before the computer goes.
