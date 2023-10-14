let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let successMessage = "Congratulations! You guessed the right number!";
let tryAgainMessage = "Sorry! Please try again!";

function restartGame(){
    let firstRandomNumber = Math.random()*100;
    let secondRandomNumber = Math.random()*100;

    firstNumberElement.textContent = Math.ceil(firstRandomNumber);
    secondNumberElement.textContent = Math.ceil(secondRandomNumber);
    gameResultElement.textContent = "";
    userInputElement.value = "";

}
restartGame();

function checkResult(){
    let firstRandomInteger = parseInt(firstNumberElement.textContent);
    let secondRandomInteger = parseInt(secondNumberElement.textContent);
    let userEnteredSum = parseInt(userInputElement.value);

    let sumOfTwoRandomNumbers = firstRandomInteger + secondRandomInteger;

    if (userEnteredSum === sumOfTwoRandomNumbers){
        gameResultElement.textContent = successMessage;
        gameResultElement.style.color =  "green";

    }
    else {
        gameResultElement.textContent = tryAgainMessage;
        gameResultElement.style.color = "red";
    }
}