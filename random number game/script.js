let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random()*100) ;

function checkGuess(){
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNumber){
        gameResult.textContent="Too high! Try Again .";
        gameResult.style.backgroundColor="red";
    }
    else if (guessedNumber < randomNumber){
        gameResult.textContent="Too low! Try Again .";
        gameResult.style.backgroundColor="blue";
    }
    else if (guessedNumber === randomNumber){
        gameResult.textContent="You got it right! Congratulation .";
        gameResult.style.backgroundColor="green";
    }
    else {
        gameResult.textContent="Please provide a valid input .";
        gameResult.style.backgroundColor="red";
    }
}