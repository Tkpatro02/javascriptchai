let randomnumber = parseInt(Math.random() * 100 + 1);
const submits = document.querySelector(".subt");
const userInput = document.querySelector(".guessField");
const gues = document.querySelector(".guess");
const result = document.querySelector(".lastresult");
const lowhigh = document.querySelector(".loworHigh");
const mainresult = document.querySelector(".mainresult");

const p = document.createElement("p");
let previousGuess = [];
let numberguess = 1;

let playGame = true;
if (playGame) {
  submits.addEventListener("click", function (e) {
    e.preventDefault();

    const guesss = parseInt(userInput.value);
    console.log(guesss);
    validateGuess(guesss);
  });
}
function validateGuess(guesss) {
  if (isNaN(guesss)) {
    alert("please enter valid number");
  } else if (guesss < 1) {
    alert("please enter valid number");
  } else if (guesss > 100) {
    alert("please enter valid number");
  } else {
    previousGuess.push(guesss);
    if (numberguess === 11) {
      dislayguess(guesss, "game over", `random no was ${randomnumber}`);
      endGame();
    } else {
      dislayguess(guesss);
      checkGuess(guesss);
    }
  }
}

function checkGuess(guesss) {
  if (guesss === randomnumber) {
    displaymesaage("the number is right");
    endGame();
  } else if (guesss < randomnumber) {
    displaymesaage("the number is too low");
  } else if (guesss > randomnumber) {
    displaymesaage("the number is too High");
  }
}

function dislayguess(guesss) {
  userInput.value = "";
  gues.innerHTML += `${guesss}   `;
  numberguess++;
  result.innerHTML = `${11 - numberguess}`;
}

function displaymesaage(message) {
  lowhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="New Game>Start new game </h2>`;
  mainresult.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomnumber = parseInt.apply(Math.random() * 100 + 1);
    previousGuess = [];
    numberguess = 1;
    gues.innerHTML = "";
    result.innerHTML = `${11 - numberguess}`;
    userInput.removeAttribute("disabled");
    mainresult.removeChild(p);
    playGame = true;
  });
}
