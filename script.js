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
const firstOperandDiv = document.querySelectorAll('#firstOperand')
const secondOperandDiv = document.querySelectorAll('#secondOperand')

let firstOperand = null;
let operator = null;
let secondOperand = null;
let result = null;
let decimalDotPresent = false;

//After pressing the + the firstOperand have to change to "1"
// Update them after I press the buttons

numberBtns.forEach(function(button) {
  button.addEventListener("click", (e) => {
    let firstOperand = e.target.value;
    if (e.target.innerText === "." && !decimalDotPresent) {
    decimalDotPresent = true;
    } else if (e.target.innerText === "." && decimalDotPresent) {
      return;
    } else if (display.innerText === "0") {
    display.innerText = "";
    decimalDotPresent = false;
    }
    firstOperand = e.target.innerText;
    display.innerText += firstOperand;
    console.log(button.value); 
  });
});

operatorBtns.forEach(function(button) {
  button.addEventListener("click", (e) => {
    let operator = e.target.value;
    decimalDotPresent = false;
    if (display.innerText === "0") {
      return;
    } else if (display.textContent.includes("÷") || 
    display.textContent.includes("x") || 
    display.textContent.includes("-") || 
    display.textContent.includes("+")) {
    return;
    } 
    // let buttonValue = operator.textContent;
    // let displayValue = display.textContent;
    display.textContent += operator;
    console.log(button.value);
  });
});

ceBtn.forEach(function(button) {
  button.addEventListener("click", () => {
    display.innerText = '0';
    console.log(button.value);
  });
});

memoryBtns.forEach(function(button) {
  button.addEventListener("click", () => {
    console.log("You clicked a memory-btn");
  });
});

equalsBtn.forEach(function(button) {
  button.addEventListener("click", (e) => {
    let firstOperand = e.target;
    let buttonValue = firstOperand.value;
    let displayValue = display.textContent;

    if (!displayValue === '0')
    displayValue = '';
    display.textContent = displayValue + buttonValue;
    console.log(button.value); 
    return;
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








// function calcMathOperation() {
//   if (operator === "+") {

//   }

// }


// let result = () => {

// }









// numberBtns.forEach(button => {
//   button.addEventListener('click', function(e) {
//     let clickedBtn = e.target;
//     if (clickedBtn.classList.contains('number-btn')) {;
//       console.log("You clicked " + clickedBtn.value);
//     }
//     if (clickedBtn.classList.contains('operator-btn')) {;
//       console.log("You clicked " + clickedBtn.value);
//     }
//     if (clickedBtn.classList.contains('decimal-btn')) {;
//       console.log("You clicked " + clickedBtn.value);
//     }
//     if (clickedBtn.classList.contains('equals-btn')) {;
//       console.log("You clicked " + clickedBtn.value);
//     }
//     if (clickedBtn.classList.contains('ce-btn')) {;
//       console.log("You clicked ce-btn " + clickedBtn.value);
//     }
//     if (clickedBtn.classList.contains('memory-btn')) {;
//       console.log("You clicked memory-btn" + clickedBtn.value);
//     }
//     // intDisplayContainer.innerText = clickedBtn.value;
//     // mathOperationDisplay.innerText = clickedBtn.value;
//   })
// });






// let displaySecondOperand = document.getElementById('secondOperand');
// document.querySelectorAll('.number-btn').forEach(item => {
//   item.addEventListener('click', e => {
//     let secondOperand = e.target;
//     let calcDisplaySecondOperand = document.getElementById("calcDisplayFirstOperand");
//     calcDisplaySecondOperand.innerText = firstOperand.value;
//     displaySecondOperand.innerText = firstOperand.value;
//   })
// });


// let calculatorDisplay = document.getElementById('intDisplayContainer');
// let calculatorDisplayTop = document.getElementById('mathOperationDisplay');
// let memoryDisplay = false;


// function displayMathOperation(e) {
//   const operator = e.target;
//   if (operator === divOperator) {
//     console.log("You clicked ÷")
//     } else if 
//     (operator === multOperator) {
//     console.log("You clicked x")
//     } else if
//     (operator === subtOperator) {
//     console.log("You clicked -")
//     } else if
//     (operator === sumOperator) {
//     console.log("You clicked +")
//   }   
// };

