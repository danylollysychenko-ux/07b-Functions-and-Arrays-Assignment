const spaces = document.getElementsByClassName("space");
const message = document.getElementById("condition-message");
const resetBtn = document.getElementById("resetBtn");
const whoseturn = document.getElementById("whose-turn");
let computerWin = false;
let playerWin = false;
let playerTurn = true;

for (s of spaces) {
  s.addEventListener("click", handleSpaceClick);
}

resetBtn.addEventListener("click", resetBoard);
displayTurn();
function handleSpaceClick() {
  if (!playerTurn) return;
  this.innerHTML = "x";
  conditions();
  playerTurn = false;
  //make sure there's spaces left and game is not won
  computer();
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
  } else if (
    (spaces[0].textContent == "x" &&
      spaces[4].textContent == "x" &&
      spaces[8].textContent == "x") ||
    (spaces[2].textContent == "x" &&
      spaces[4].textContent == "x" &&
      spaces[6].textContent == "x")
  ) {
    message.innerHTML = "You win!";
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
  }
  return true;
}

function displayTurn() {
  if (!playerTurn) {
    whoseturn.innerHTML = "Computer's turn";
  } else {
    whoseturn.innerHTML = "Player's turn";
  }
}

function checkForSpaces() {
  for (ch of spaces) {
    if (ch.innerHTML !== "x") {
      setTimeout(() => {
        let randomNum = Math.floor(Math.random() * 9);
        spaces[randomNum].innerHTML = "o";
        playerTurn = true;
      }, 1000);
    } else {
      let randomNum = Math.floor(Math.random() * 9);
    }
  }
}

function computer() {
  displayTurn();
  checkForSpaces();
}

//Based on this starter code, write Tic Tac Toe
//Use at least 5 functions (check for win, tie, show win screen, show tie screen, reset, update turn
// (show whose turn it is))
//Do not allow clicking an element that has already been taken
//Style it all to look nice

//extension:
//use setTimeout() to simulate a 1 player vs computer game.
// set timeout for the cpu would be to simulate a pause before the computer goes.
