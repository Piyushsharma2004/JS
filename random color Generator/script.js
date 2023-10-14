let bgContainerElement = document.getElementById("bgContainer");
let buttonElement = document.getElementById("button");

let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b", "#FF5733", "#DBFF33", "#75FF33", "#33FFBD" ];

bgContainerElement.style.backgroundColor = bgColorsArray[0];

function onChangeBgColor(){
    let numberOfBgColors = bgColorsArray.length;
    let randomBgColorIndex = Math.ceil(Math.random() * numberOfBgColors);

    if(randomBgColorIndex === numberOfBgColors){
        randomBgColorIndex = numberOfBgColors - 1;

    }
    let randomBgcolor = bgColorsArray[randomBgColorIndex];
    bgContainerElement.style.backgroundColor = randomBgcolor;
}