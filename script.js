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
    if (firstOperand === null && operator === null) {
      firstOperand = button.value;
      firstOperandDiv.innerText = firstOperand;
      display.innerText = firstOperand;
      console.log(`firstOperand: ${firstOperand}, secondOperand: ${secondOperand}, operator: ${operator}`);
    } else {
      appendSibling = button.value;
      firstOperandDiv.innerText = firstOperand += appendSibling;
      display.innerText = firstOperand;
      console.log(`firstOperand: ${firstOperand}, secondOperand: ${secondOperand}, operator: ${operator}`);
    }
    if (!firstOperand === null && !operator === null) {
    getSecondOperand(button);
    }
  })
});

function getSecondOperand(button) {
    decimalDotPresent = true;
    secondOperand = button.value;
    secondOperandDiv.innerText = secondOperand;
    display.innerText = secondOperand;
    console.log(`firstOperand: ${firstOperand}, secondOperand: ${secondOperand}, operator: ${operator}`);
};
// function getSecondOperand(button) {
// // if (!firstOperand === null && operator === null && secondOperand === null) {
//     secondOperand = button.value;
//     secondOperandDiv.innerText = secondOperand;
//     display.innerText = secondOperand;
//     console.log(`firstOperand: ${firstOperand}, secondOperand: ${secondOperand}, operator: ${operator}`);
//   // }
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
      `firstOperand: ${firstOperand}, secondOperand: ${secondOperand}, operator: ${operator}`
    );
  });
  // operatorDiv.innerText = "";
  // secondOperandDiv.innerHTML = "";
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
    firstOperand = parseInt(firstOperand);
    secondOperand = parseInt(secondOperand);
    if (operator === "÷") {
      result = firstOperand / secondOperand;
      display.innerText = result;
      console.log(`firstOperand: ${firstOperand}, secondOperand: ${secondOperand}, operator: ${operator}`);
      return;
    } else if (operator === "x") {
      result = firstOperand * secondOperand;
      display.innerText = result;
      console.log(`firstOperand: ${firstOperand}, secondOperand: ${secondOperand}, operator: ${operator}`);
      return;
    } else if (operator === "-") {
      result = firstOperand - secondOperand;
      display.innerText = result;
      console.log(`firstOperand: ${firstOperand}, secondOperand: ${secondOperand}, operator: ${operator}`);
      return;
    } else if (operator === "+") {
      result = firstOperand + secondOperand;
      display.innerText = result;
      console.log(`firstOperand: ${firstOperand}, secondOperand: ${secondOperand}, operator: ${operator}`);
    }
    firstOperand = null;
    operator = null;
    secondOperand = null;
    return;
      // return secondOperand;
  });
});


function appendSibling() {
  if (!(firstOperand === null) && (operator === null) && (secondOperand === null)) {
      appendSibling = button.value;
      firstOperandDiv.innerText = firstOperand += appendSibling;
      display.innerText = firstOperand;
      console.log(`firstOperand: ${firstOperand}, secondOperand: ${secondOperand}, operator: ${operator}`);
  } else if ((!(firstOperand === null) && !(operator === null) && (!secondOperand === null))) {
      appendSibling = button.value;
      firstOperandDiv.innerText = firstOperand += appendSibling;
      display.innerText = firstOperand;
  }
}

//After pressing the + the firstOperand have to change to "1"
// Update them after I press the buttons
// Make firstOperand a sring to append
// Display maximum numbers

//After clicking the equalsBtn:
//secondOperand = null;
// If user clicks operatorBtn
// Once the user clicks any operatorBtn
// operatorBtn= button.value


// firstOperandDiv.innerText = firstOperand
// secondOperand = button.value


// TEST CASE: 2 + 3 = 5 

// STEP 1: Press 2 button
// EXPECTED: Show 2 in the display
// ACTUAL: ???

// STEP 2: Press + button
// EXPECTED: Show 2 in the display
// ACTUAL: ???

// STEP 3: Press 3 button
// EXPECTED: Show 3 in the display
// ACTUAL: ???

// STEP 4: Press = button
// EXPECTED: Show 5 in the display
// ACTUAL: ???


// memoryBtns.forEach(function(button) {
//   button.addEventListener("click", () => {
//     console.log("You clicked a memory-btn");
//   })
// });

//After pressing the + the firstOperand have to change to "1"
// Update them after I press the buttons
// Make firstOperand a sring to append
// Display maximum numbers

//NUMBERS BUTTONS

//else {
    // secondOperand = button.value;
    // }

    // if (firstOperand === "." && !decimalDotPresent) {
    // decimalDotPresent = true;
    // } else if (firstOperand === "." && decimalDotPresent) {
    //   return;
    // } else if (display.innerText === "0") {
    // display.innerText = "";
    // decimalDotPresent = false;
    // }
    // firstOperand = e.target.innerText;
    // firstOperand.innerText += firstOperand;
    // display.innerText += firstOperand;
    // console.log(`firstOperand: ${firstOperand}, secondOperand: ${secondOperand}, operator: ${operator}`);
    // console.log(`secondOperand: ${secondOperand}`);
    // console.log(`operator: ${operator}`);

    // OPERATOR BUTTONS
    // decimalDotPresent = false;
    // if (display.innerText === "0") {
    //   return;
    // } else if (display.textContent.includes("÷") ||
    // display.textContent.includes("x") ||
    // display.textContent.includes("-") ||
    // display.textContent.includes("+")) {
    //   return;
    // }
    // //mathOperationDisplay.innerText += operator;
    // display.innerText = firstOperand;
    // firstOperandDiv.innerText += operator;
