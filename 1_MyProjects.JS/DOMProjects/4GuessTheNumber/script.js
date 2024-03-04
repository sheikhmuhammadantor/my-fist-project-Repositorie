let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

const userInput = document.getElementById('guessField');
const submit = document.querySelector('#submit');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('#lowOrHi');
const startOver = document.querySelector('#startOver');

let playGame = true;
let numGuess = 10;


submit.addEventListener('click', function(e) {
    e.preventDefault()
    if(playGame) {
        const gusse = parseInt(userInput.value);
        validateGuess(gusse);
    }});


function validateGuess(gusse) {
    if(isNaN(gusse)) {
        alert('Enter A Valid Number.');
    }else if(gusse < 1) {
        alert('Enter a Number More Than 1');
    }else if(gusse > 100) {
        alert('Enter a Number Less Than 100');
    }else {
        checkGuess(gusse);
        displayGuess(gusse);
    }};

function checkGuess(guess) {
    if(guess > randomNumber) {
        lowOrHi.innerHTML = `The Number Is TOOO Low`
    }else if(guess < randomNumber) {
        lowOrHi.innerHTML = `The Number Is TOOO High`
    }else if(guess === randomNumber) {
        endGame()
        lowOrHi.innerHTML = `You Guessed Right : ${randomNumber}`;
    }
}

function displayGuess(gusse) {
    if(numGuess > 1) {
        guessSlot.innerHTML += `${gusse}, `
        numGuess --
        remaining.innerHTML = numGuess;
    }else{
        guessSlot.innerHTML += `${gusse}, `
        numGuess --
        remaining.innerHTML = numGuess;
        endGame();
    }
    userInput.value = ''
}

function displayMessage(message) {
    lowOrHi.innerHTML = `${message}` 
}

function endGame() {
    playGame = false;
    userInput.setAttribute('disabled', '');
    displayMessage(`The Number Is: ${randomNumber}`);
}

startOver.addEventListener('click', function() {
    playGame = true;
    userInput.value = '';
    userInput.removeAttribute('disabled');
    guessSlot.innerHTML = '';
    remaining.innerHTML = 10;
});