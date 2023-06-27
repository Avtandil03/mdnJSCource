document.addEventListener("DOMContentLoaded", function() {

let randomNumber ;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton = document.createElement('button')
resetButton.innerHTML = 'Start new game';


const generateRandomNum = () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

generateRandomNum()

const activateResetBtn = () => {
  lowOrHi.parentNode.appendChild(resetButton)
}

const resetGame = () => {
  guessCount = 1
  generateRandomNum()
  lowOrHi.parentNode.removeChild(resetButton)
  guesses.innerHTML = ''
  lastResult.innerHTML = ''
  lastResult.style.backgroundColor = 'white'
  lowOrHi.innerHTML = ''
}

resetButton.addEventListener('click', resetGame)


const win = () => {
  lastResult.innerHTML = 'Congratulations! You got it right!'
  lastResult.style.backgroundColor = 'darkgreen'
  activateResetBtn()
}

const gameOver = () => {
  lastResult.innerHTML = 'Game over! Click reset to start new game.'
  lastResult.style.backgroundColor = 'darkred'
  lowOrHi.innerHTML = ''
}

const high = () => {
  lastResult.innerHTML = 'Wrong!'
  lastResult.style.backgroundColor = 'darkred'
  lowOrHi.innerHTML = 'Last guess was too high!'
}

const low = () => {
  lastResult.innerHTML = 'Wrong!'
  lastResult.style.backgroundColor = 'darkred'
  lowOrHi.innerHTML = 'Last guess was too low!'
}

const addNewGuess = (currGuess) => {
  if(!guesses.innerHTML){
    guesses.innerHTML = 'Previous guesses: ' + currGuess
    return
  }

  guesses.innerHTML += ` ${currGuess}`
}

const compareValues = () => {
  const currGuess = +guessField.value

  if(!currGuess) return

  guessField.value = ''

  if(guessCount > 10) {
    gameOver() 
    return
  }

  guessCount++
  addNewGuess(currGuess)

  if(currGuess === randomNumber){
    win()
    return
  }

  if(guessCount === 10){
    gameOver()
    return
  }

  if(currGuess > randomNumber){
    high()
    return
  }

  if(currGuess < randomNumber){
    low()
    return
  }
}


guessSubmit.addEventListener('click', compareValues)




});
