const randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.ReturnAns');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){

    submit.addEventListener( 'click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });

}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess < 1){
        alert('please enter a valid number')

    }
    else if(guess > 100){
        alert('please enter a valid number')
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game over. the number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage( `you guessed it right that number is ${randomNumber}`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`number is low`);
    }
    else if(guess > randomNumber){
        displayMessage(`number is high`);
    }
}

function displayGuess(guess){
 userInput.value = '';
 guessSlot.innerHTML += `${guess}, `;
 numGuess++;
 remaining.innerHTML = `${11 - numGuess}`;

}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message} </h3>`
}

function newGame(){
    const newGamebutton = document.querySelector('#newGame');
    newGamebutton.addEventListener('click', function(e){
        playGame = true;
        prevGuess = [];
        guessSlot.innerHTML = '';
        numGuess = 1;
        remaining.innerHTML =  `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
    })
    }

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
     p.classList.add('button');
     p.innerHTML = '<h3 id="newGame">Start new Game </h3>'
     playGame = false;
     startOver.appendChild(p);
     newGame();
}



