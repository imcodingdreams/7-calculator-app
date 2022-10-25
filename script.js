const numberBtns = document.querySelectorAll('.number-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');
// const divOperator = document.getElementById("divisionBtn");
// const multOperator = document.getElementById("multiplyBtn");
// const subtOperator = document.getElementById("subtractBtn");
// const sumOperator = document.getElementById("sumBtn");
const ceBtn = document.querySelectorAll('.ce-btn');
const equalsBtn = document.querySelectorAll('.equals-btn');
const display = document.querySelector('#display');
// const mAddBtn = document.querySelectorAll('#mAddBtn');
// const mSubtBtn = document.querySelectorAll('#mSubtBtn');
// const mReCallBtn = document.querySelectorAll('#mReCallBtn');
// const mClearBtn = document.querySelectorAll('#mClearBtn');
const memoryBtns = document.querySelectorAll('.memory-btn');
let firstOperandDiv = document.querySelectorAll('#firstOperand');
let secondOperandDiv = document.querySelectorAll('#secondOperand');


let firstOperand = null;
let operator = null;
let secondOperand = null;
let result = null;
let decimalDotPresent = false;

//After pressing the + the firstOperand have to change to "1"
// Update them after I press the buttons

numberBtns.forEach(function(button) {
  button.addEventListener("click", (e) => {
    let firstOperand = e.target.innerText;
    if (firstOperand === "." && !decimalDotPresent) {
    decimalDotPresent = true;
    } else if (firstOperand === "." && decimalDotPresent) {
      return;
    } else if (display.innerText === "0") {
    display.innerText = "";
    decimalDotPresent = false;
    }
    firstOperand = e.target.innerText;
    mathOperationDisplay.innerText += firstOperand;
    display.innerText += firstOperand;
    console.log(button.value); 
  });
});

operatorBtns.forEach(function(button) {
  button.addEventListener("click", (e) => {
    let operator = e.target.innerText;
    decimalDotPresent = false;
    if (display.innerText === "0") {
      return;
    } else if (display.textContent.includes("÷") || 
    display.textContent.includes("x") || 
    display.textContent.includes("-") || 
    display.textContent.includes("+")) {
    return;
    } 
    //mathOperationDisplay.innerText += operator;
    display.innerText = firstOperand;
    mathOperationDisplay.innerText += operator;
    console.log(button.value);
  });
});

ceBtn.forEach(function(button) {
  button.addEventListener("click", () => {
    display.innerText = '0';
    mathOperationDisplay.innerText = "";
    //firstOperand.innerText = "";
    //operator.innerText = "";
    //secondOperand.innerText = "";
    console.log(button.value);
  });
});

memoryBtns.forEach(function(button) {
  button.addEventListener("click", () => {
    console.log("You clicked a memory-btn");
  });
});

equalsBtn.forEach(function(button) {
  button.addEventListener("click", () => {
  
  });
});

function calcMathOperation(firstOperand, secondOperand, operator) {
  if (operator === "÷") {
    return firstOperand / secondOperand;
    } else if 
    (operator === "x") {
    return firstOperand * secondOperand;
    } else if
    (operator === "-") {
    return firstOperand - secondOperand;
    } else if
    (operator === "+") {
    return firstOperand + secondOperand;
  }   
  return secondOperand;
};