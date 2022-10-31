const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const ceBtn = document.querySelectorAll(".ce-btn");
const equalsBtn = document.querySelectorAll(".equals-btn");
let display = document.querySelector("#display");
// const mAddBtn = document.querySelectorAll('#mAddBtn');
// const mSubtBtn = document.querySelectorAll('#mSubtBtn');
// const mReCallBtn = document.querySelectorAll('#mReCallBtn');
// const mClearBtn = document.querySelectorAll('#mClearBtn');
const memoryBtns = document.querySelectorAll(".memory-btn");
let firstOperandDiv = document.querySelector("#firstOperand");
let operatorDiv = document.querySelector("#operator");
let secondOperandDiv = document.querySelector("#secondOperand");
// let mathOperationDisplay = document.querySelector(".mathOperationDisplay");

let firstOperand = null;
let operator = null;
let secondOperand = null;
let result = null;
let decimalDotPresent = false;

//NUMBER BOTTONS FUNCTION

numberBtns.forEach(function (button) {
  button.addEventListener("click", () => {
    if ((firstOperand === null) && (operator === null) && (secondOperand === null)) {
      firstOperand = button.value;
      firstOperandDiv.innerText = firstOperand;
      display.innerText = firstOperand;
      operator = null;
      operatorDiv.innerText = "";
      secondOperand = null;
      secondOperandDiv.innerText = "";
      result = null;
      console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}, result: ${result}`);
    } else if (!(firstOperand === null) && (operator === null) && (secondOperand === null)) {
      appendSiblingFirstOperand = button.value;
      firstOperandDiv.innerText = (firstOperand) += (appendSiblingFirstOperand);
      display.innerText = firstOperand;
      console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}, result: ${result}`);
    } else if (!(firstOperand === null) && !(operator === null) && (secondOperand === null)) {
      secondOperand = button.value;
      secondOperandDiv.innerText = secondOperand;
      display.innerText = secondOperand;
      console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}, result: ${result}`);
    } else if (!(firstOperand === null) && !(operator === null) && !(secondOperand === null)) {
      appendSiblingSecondOperand = button.value;
      secondOperandDiv.innerText = (secondOperand) += (appendSiblingSecondOperand);
      display.innerText = secondOperand;
      console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}, result: ${result}`);
    // } else if (display.innerText === "0") {
    //   display.innerText = "";
    //   decimalDotPresent = true;
    // }
      }
  });
});

// function decimalPresent() {

//   for (i = 0; i )
//   // if (!(firstOperandDiv.textContent.includes("."))) {
//   //   decimalDotPresent = false;
//   // } else if (firstOperandDiv.textContent.includes(".")) {
//   //   decimalDotPresent = true;
//   // }
// }

// function appendSibling() {
//   if (!(firstOperand === null) && (operator === null) && (secondOperand === null)) {
//       appendSiblingFirstOperand = button.value;
//       firstOperandDiv.innerText = (firstOperand) += (appendSiblingFirstOperand);
//       display.innerText = firstOperand;
//       console.log(`firstOperand: ${firstOperand}, secondOperand: ${secondOperand}, operator: ${operator}`);
//   } else if (!(firstOperand === null) && !(operator === null) && !(secondOperand === null)) {
//       appendSiblingSecondOperand = button.value;
//       secondOperandDiv.innerText = (secondOperand) += (appendSiblingSecondOperand);
//       display.innerText = secondOperand;
//       console.log(`firstOperand: ${firstOperand}, secondOperand: ${secondOperand}, operator: ${operator}`);
//   }
// };

//OPERATORS FUNCTION

operatorBtns.forEach(function (button) {
  button.addEventListener("click", () => {
    if (firstOperand === 0 && secondOperand === 0) {
    console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}, result: ${result}`);
      return;
    }
    if (firstOperand === null && result === null) {
      return;
    } else if (!(firstOperand === null) && result === null) {
      operator = button.value;
      operatorDiv.innerText = operator;
      console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}, result: ${result}`);
    }
    if (!(result === null)) {
      operator = button.value;
      operatorDiv.innerText = operator;
      firstOperand = result;
      firstOperandDiv.innerText = (+firstOperand.toFixed(4));
      secondOperandDiv.innerText = "";
      result = null;
      console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}, result: ${result}`);
    if (!(firstOperand === null) && !(operator === null) && !(secondOperand === null) && result === null) {
      operator = button.value;
      operatorDiv.innerText = operator;
      firstOperand = result;
      firstOperandDiv.innerText = firstOperand;
      secondOperandDiv.innerText = "";
      console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}, result: ${result}`);
      } 
    if (firstOperand === null && operator === null && secondOperand === null && !(result === null)) {
      firstOperand = button.value;
      operatorDiv.innerText = "";
      secondOperandDiv.innerText = "";
      } 
    }
  });
});

//CLEAR FUNCTION

ceBtn.forEach(function (button) {
  button.addEventListener("click", () => {
    firstOperandDiv.innerText = "";
    operatorDiv.innerText = "";
    secondOperandDiv.innerText = "";
    display.innerText = "0";
    operandsAndOperatorNull ();
    result = null;
    console.log(button.value);
    console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}, result: ${result}`);
    return;
  });
});

// EQUALS BUTTON FUNCTION

function operandsAndOperatorNull() {
  firstOperand = null;
  operator = null;
  secondOperand = null;
}

function displayMaxPlaces() {
display.innerText = (+result.toFixed(4));
} 

function convertToNumbers() {
  firstOperand = Number(firstOperand);
  secondOperand = Number(secondOperand);
}

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
  });
  result = null;
});




// memoryBtns.forEach(function(button) {
//   button.addEventListener("click", () => {
//     console.log("You clicked a memory-btn");
//   })
// });