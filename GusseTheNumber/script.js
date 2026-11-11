let randomNo = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector("#subt")
const userInput = document.querySelector('#guessField');
const gussesSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGus = [];
let numGuess = 1;

let playGame = true;


// Checking for user in Allowed to play game or not.......
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);

        validGuess(guess);
    });
}

//
function validGuess(guess) {
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess < 1){
        alert('Please enter a more then 1 number')
    }else if(guess > 100){
        alert('Please enter a less then 100 number')
    }else{
        prevGus.push(guess);

        //for last attempt checking
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over. The Random number was ${randomNo}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}

// checking for checks that random value and user enter value............
function checkGuess(guess) {
    if(guess === randomNo){
        displayMessage(`Congratulation you guess it right`)
        endGame();
    } else if(guess < randomNo){
        displayMessage(`Higher`);
    }else if(guess > randomNo){
        displayMessage(`Lower`);
    }
}

//Clean-up method..........
function displayGuess(guess) {
    userInput.value= '';
    gussesSlot.innerHTML += `${guess}, `; 
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

//showing the message in page.............
function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame"> Start new Game</h2>`
    startOver.append(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGus = [];
    numGuess = 1;
    gussesSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });

}