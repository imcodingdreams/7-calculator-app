const numberBtns = document.querySelectorAll('.number-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');
const ceBtn = document.querySelectorAll('.ce-btn');
const decimalBtn = document.querySelectorAll('.decimal-btn');
const equalsBtn = document.querySelectorAll('.equals-btn');
let display = document.querySelector('#display');
let mAddBtn = document.querySelectorAll('#mAddBtn');
let mSubtBtn = document.querySelectorAll('#mSubtBtn');
let mReCallBtn = document.querySelectorAll('#mReCallBtn');
let mClearBtn = document.querySelectorAll('#mClearBtn');
let memoryBtns = document.querySelectorAll('.memory-btn');
let memoryDisplay = document.querySelector('#memoryDisplay');
let firstOperandDiv = document.querySelector('#firstOperand');
let operatorDiv = document.querySelector('#operator');
let secondOperandDiv = document.querySelector('#secondOperand');

let firstOperand = null;
let operator = null;
let secondOperand = null;
let result = null;
let memoryValue = null;

decimalBtn.forEach(function (button) {
  button.addEventListener("click", () => {
    if (firstOperand === null && !(firstOperandDiv.textContent.includes('.')) && secondOperand === null && operator === null && result === null) {
      firstOperand = button.value;
      firstOperandDiv.innerText = firstOperand;
      display.innerText = firstOperand;
      operatorDiv.innerText = "";
      secondOperandDiv.innerText = "";
      console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}, result: ${result}`);
    } else if (!(firstOperand === null) && !(firstOperandDiv.textContent.includes('.')) && operator === null && result === null) {
      firstOperand += button.value;
      display.innerText = firstOperand;
      firstOperandDiv.innerText = firstOperand;
      secondOperandDiv.innerText = secondOperand;
      console.log(
        `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}, result: ${result}`); 
    } else if (secondOperand === null && !(secondOperandDiv.textContent.includes('.')) && !(operator === null)) {
      secondOperand = button.value;
      secondOperandDiv.innerText = secondOperand;
      display.innerText = secondOperand;
      console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}, result: ${result}`);
    } else if (!(secondOperand === null) && !(secondOperandDiv.textContent.includes('.')) && !(operator === null)) {
      secondOperand += button.value;
      display.innerText = secondOperand;
      secondOperandDiv.innerText = secondOperand;
      console.log(
        `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}, result: ${result}`);
    }
  })
});

function operandsAndOperatorNull() {
  firstOperand = null;
  operator = null;
  secondOperand = null;
};

numberBtns.forEach(function (button) {
  button.addEventListener("click", () => {
    if (firstOperand === null && operator === null && secondOperand === null) {
      firstOperand = button.value;
      firstOperandDiv.innerText = firstOperand;
      display.innerText = firstOperand;
      operator = null;
      operatorDiv.innerText = "";
      secondOperand = null;
      secondOperandDiv.innerText = "";
      result = null
    } else if (!(firstOperand === null) && operator === null && secondOperand === null) {
      appendSiblingFirstOperand = button.value;
      firstOperandDiv.innerText = (firstOperand) += (appendSiblingFirstOperand);
      display.innerText = firstOperand;
    } else if (!(firstOperand === null) && !(operator === null) && secondOperand === null) {
      secondOperand = button.value;
      secondOperandDiv.innerText = secondOperand;
      display.innerText = secondOperand;
    } else if (!(firstOperand === null) && !(operator === null) && !(secondOperand === null)) {
      appendSiblingSecondOperand = button.value;
      secondOperandDiv.innerText = (secondOperand) += (appendSiblingSecondOperand);
      display.innerText = secondOperand;
    }
  });
});

operatorBtns.forEach(function (button) {
  button.addEventListener("click", () => {
    if (firstOperand === 0 && secondOperand === 0 || firstOperand === ".") {
      return;
    }
    if (firstOperand === null && result === null) {
      return;
    } else if (!(firstOperand === null) && result === null) {
      operator = button.value;
      operatorDiv.innerText = operator;
    }
    if (!(result === null)) {
      operator = button.value;
      operatorDiv.innerText = operator;
      firstOperand = result;
      firstOperandDiv.innerText = (+firstOperand.toFixed(4));
      secondOperandDiv.innerText = "";
      result = null;
    if (!(firstOperand === null) && !(operator === null) && !(secondOperand === null) && result === null) {
      operator = button.value;
      operatorDiv.innerText = operator;
      firstOperand = result;
      firstOperandDiv.innerText = firstOperand;
      secondOperandDiv.innerText = "";
    } 
    if (firstOperand === null && operator === null && secondOperand === null && !(result === null)) {
      firstOperand = button.value;
      operatorDiv.innerText = "";
      secondOperandDiv.innerText = "";
      } 
    }
  });
});

ceBtn.forEach(function (button) {
  button.addEventListener("click", () => {
    firstOperandDiv.innerText = "";
    operatorDiv.innerText = "";
    secondOperandDiv.innerText = "";
    display.innerText = "0";
    operandsAndOperatorNull ();
    result = null;
    return;
  });
});

function displayMaxPlaces() {
  display.innerText = (+result.toFixed(4));
}; 

function convertToNumbers() {
  firstOperand = Number(firstOperand);
  secondOperand = Number(secondOperand);
};

equalsBtn.forEach(function (button) {
  button.addEventListener("click", () => {
    if (operator === "÷") {
      convertToNumbers();
      result = firstOperand / secondOperand;
      displayMaxPlaces();
      operandsAndOperatorNull();
      console.log(
        `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}, result: ${result}`);
    } else if (operator === "x") {
      convertToNumbers();
      result = firstOperand * secondOperand;
      displayMaxPlaces();
      operandsAndOperatorNull();
      console.log(
        `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}, result: ${result}`);
    } else if (operator === "-") {
      convertToNumbers();
      result = firstOperand - secondOperand;
      displayMaxPlaces();
      operandsAndOperatorNull();
      console.log(
        `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}, result: ${result}`);
    } else if (operator === "+") {
      convertToNumbers();
      result = firstOperand + secondOperand;
      displayMaxPlaces();
      operandsAndOperatorNull();
      console.log(
        `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}, result: ${result}`);
    }
    result = null;
  });
});

memoryBtns.forEach(function(button) {
  button.addEventListener("click", () => {
    if (button.id == "mAddBtn" && memoryValue === null) {
      memoryValue = (+result.toFixed(4));
      memoryDisplay.innerText = memoryValue;
    } else if (button.id == "mAddBtn" && !(memoryValue === "null")) {
      memoryValue = memoryValue + (+result.toFixed(4));
      memoryDisplay.innerText = memoryValue;
    } else if (button.id == "mSubtBtn" && memoryValue === null) {
      return;
    } else if (button.id == "mSubtBtn" && !(memoryValue === "null")) {
      memoryValue = memoryValue - (+result.toFixed(4));
      memoryDisplay.innerText = memoryValue;
    } else if (button.id == "mReCallBtn") {
      display.innerText = memoryValue;
    } else if (button.id == "mClearBtn") {
      memoryDisplay.innerText = "No memory";
    }
  })
});