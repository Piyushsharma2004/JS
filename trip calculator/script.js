let billAmountInput = document.getElementById("billAmount");
let percentageTipInput = document.getElementById("percentageTip");
let tipAmountInput = document.getElementById("tipAmount");
let totalInput = document.getElementById("totalAmount");

let errorMessageElement = document.getElementById("errorMessage");
let errorMessage = "Please Enter a Valid Input Bro!";

function calculateTip() {
    let billAmountInputValue = billAmountInput.value;
    let percentageTipInputValue = percentageTipInput.value;

    if (billAmountInputValue === ""){
        errorMessageElement.textContent = errorMessage;
    }
    else if (percentageTipInputValue === ""){
        errorMessageElement.textContent = errorMessage;
    }
    else {
        errorMessageElement.textContent = "";
        let billAmount = parseInt(billAmountInputValue);
        let percentageTip = parseInt(percentageTipInputValue);

        let calculateTip = (percentageTip /100) * billAmount;
        let calculateTotal = calculateTip + billAmount;

        tipAmountInput.value = calculateTip
        totalInput.value = calculateTotal;
    }
}