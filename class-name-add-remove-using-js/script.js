let h1Element = document.createElement("h1");
h1Element.textContent = "Piyush Sharma";

let containerElement = document.getElementById("mycontainer");
containerElement.appendChild(h1Element);

let btnElement = document.createElement("button");
btnElement.textContent = "Change Heading and Add Style";
containerElement.appendChild(btnElement);

btnElement.onclick = function () {
 h1Element.textContent = "Ramprasad Sharma";
 h1Element.classList.add("heading");
}

let removeStyleButton = document.createElement("button");
removeStyleButton.textContent = "Remove Style";
containerElement.appendChild(removeStyleButton);

removeStyleButton.onclick = function () {
  h1Element.classList.remove("heading");
};