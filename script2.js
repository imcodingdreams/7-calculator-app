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
let mathOperationDisplay = document.querySelector(".mathOperationDisplay");

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
      console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}`);
    } else if (!(firstOperand === null) && (operator === null) && (secondOperand === null)) {
      appendSiblingFirstOperand = button.value;
      firstOperandDiv.innerText = (firstOperand) += (appendSiblingFirstOperand);
      display.innerText = firstOperand;
      console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}`);
    } else if (!(firstOperand === null) && !(operator === null) && (secondOperand === null)) {
      secondOperand = button.value;
      secondOperandDiv.innerText = secondOperand;
      display.innerText = firstOperand;
      console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}`);
    } else if (!(firstOperand === null) && !(operator === null) && !(secondOperand === null)) {
      appendSiblingSecondOperand = button.value;
      secondOperandDiv.innerText = (secondOperand) += (appendSiblingSecondOperand);
      display.innerText = secondOperand;
      console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}`);
    // } else if (firstOperand === "." && !decimalDotPresent) {
    // decimalDotPresent = true;
    // } else if (firstOperand.textContent "." && decimalDotPresent) {
    //   return;
    // } else if (display.innerText === "0") {
    // display.innerText = "";
    // decimalDotPresent = false;
    // }
      return;
    }
  })
});


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
    if (firstOperand === null) {
      return;
    } else {
      operator = button.value;
      operatorDiv.innerText = operator;
    }
    console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}`);
  });
});

//CLEAR FUNCTION

ceBtn.forEach(function (button) {
  button.addEventListener("click", () => {
    firstOperandDiv.innerText = "";
    operatorDiv.innerText = "";
    secondOperandDiv.innerText = "";
    display.innerText = "0";
    firstOperand = null;
    operator = null;
    secondOperand = null;

    console.log(button.value);
    return;
  });
});

// EQUALS BUTTON FUNCTION

equalsBtn.forEach(function (button) {
  button.addEventListener("click", () => {
    firstOperand = Number(firstOperand);
    secondOperand = Number(secondOperand);
    if (operator === "÷") {
      result = firstOperand / secondOperand;
      display.innerText = (+result.toFixed(4));
      console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}`);
      return;
    } else if (operator === "x") {
      result = firstOperand * secondOperand;
      display.innerText = (+result.toFixed(4));
      console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}`);
      return;
    } else if (operator === "-") {
      result = firstOperand - secondOperand;
      display.innerText = (+result.toFixed(4));
      console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}`);
      return;
    } else if (operator === "+") {
      result = firstOperand + secondOperand;
      display.innerText = (+result.toFixed(4));
      console.log(
      `firstOperand: ${firstOperand}, operator: ${operator}, secondOperand: ${secondOperand}`);
    firstOperand = null;
    operator = null;
    secondOperand = null;
    return;
    }
  });
});

// memoryBtns.forEach(function(button) {
//   button.addEventListener("click", () => {
//     console.log("You clicked a memory-btn");
//   })
// });


