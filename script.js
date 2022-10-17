const numberBtns = document.querySelectorAll('.number-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');
const decimalBtn = document.querySelectorAll('#dotBtn');
const ceBtn = document.querySelectorAll('.ce-btn');
const equalsBtn = document.querySelectorAll('.equals-btn');
// const mAddBtn = document.querySelectorAll('#mAddBtn');
// const mSubtBtn = document.querySelectorAll('#mSubtBtn');
// const mReCallBtn = document.querySelectorAll('#mReCallBtn');
// const mClearBtn = document.querySelectorAll('#mClearBtn');
const memoryBtns = document.querySelectorAll('.memory-btn');
const firstOperandDiv = document.querySelectorAll('#firstOperand')
const secondOperandDiv = document.querySelectorAll('#secondOperand')

// let firstOperand = null;
// let operator = null;
// let secondOperand = null;
// let result = null;

//After pressing the + the firstOperand have to change to "1"
// Update them after I press the buttons

//const intDisplayContainer = document.getElementById('intDisplayContainer');
const mathOperationDisplay = document.getElementById('mathOperationDisplay');

numberBtns.forEach(function(button) {
  button.addEventListener("click", () => {
    firstOperandDiv.innerText = button.value;
    mathOperationDisplay.innerText = button.value;
    if (!firstOperandDiv.innerText === '') {
      firstOperand.innerText + button.value;
    }
    
    console.log(button.value);
  });
});

operatorBtns.forEach(function(button) {
  button.addEventListener("click", () => {
    let operator = button.value;
    intDisplayContainer.innerText = operator;
    mathOperationDisplay.innerText = operator;
    console.log(button.value);
  });
});

decimalBtn.forEach(function(button) {
  button.addEventListener("click", () => {
    console.log(button.value);
  });
});

equalsBtn.forEach(function(button) {
  button.addEventListener("click", () => {
    console.log(button.value);
  });
});

ceBtn.forEach(function(button) {
  button.addEventListener("click", () => {
    console.log("You clicked ce-btn");
  });
});

memoryBtns.forEach(function(button) {
  button.addEventListener("click", () => {
    console.log("You clicked a memory-btn");
  });
});






// intDisplayContainer.innerText = clickedBtn.value;
    // mathOperationDisplay.innerText = clickedBtn.value;



function displayOperation() {
  mathOperationDisplay.innerText = numberBtns.value
}

function calcMathOperation() {

}

function appendNumber () {
  
}











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


// let displayFirstOperand = document.getElementById('firstOperand');
// document.querySelectorAll('.number-btn').forEach(item => {
//   item.addEventListener('click', e => {
//     let firstOperand = e.target;
//     let calcDisplayFirstOperand = document.getElementById("calcDisplayFirstOperand");
//     calcDisplayFirstOperand.innerText = firstOperand.value;
//     displayFirstOperand.innerText = firstOperand.value;
//   })
// });

// let displayOperator = document.getElementById('operator');
// document.querySelectorAll('.operator-btn').forEach(item => {
//   item.addEventListener('click', e => {
//     let operator = e.target;
//     let calcDisplayOperator = document.getElementById("calcDisplayOperator");
//     calcDisplayOperator.innerText = operator.value;
//     displayOperator.innerText = operator.value;
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

// const numberOne = document.getElementById("1Btn").value;
// const numberTwo = document.getElementById("2Btn").value;
// const numberThree = document.getElementById("3Btn").value;
// const numberFour = document.getElementById("4Btn").value;
// const numberFive = document.getElementById("5Btn").value;
// const numberSix = document.getElementById("6Btn").value;
// const numberSeven = document.getElementById("7Btn").value;
// const numberEight = document.getElementById("8Btn").value;
// const numberNine = document.getElementById("9Btn").value;
// const numberCero = document.getElementById("0Btn").value;

// let firstOperand = null;
// let operator = null;
// let secondOperand = null;
// let result = null;

// document.querySelectorAll('.number-btn').forEach(occurence => {
//   let firstOperand = occurence.getAttribute('value');
//   occurence.addEventListener('click', function() {
//     if (firstOperand === "0" ||
//         firstOperand === "1" ||
//         firstOperand === "2" ||
//         firstOperand === "3" ||
//         firstOperand === "4" ||
//         firstOperand === "5" ||
//         firstOperand === "6" ||
//         firstOperand === "7" ||
//         firstOperand === "8" ||
//         firstOperand === "9" ||
//         firstOperand === ".") {
//     const displayNumParent = document.getElementById("displayIntContainer");
//     let displayNumChild = document.createElement("p");
//     displayNumChild.innerText = firstOperand;
//     displayNumParent.appendChild(displayNumChild);
//     console.log('Button ' + firstOperand + ' was clicked!');
//     }
//   })  
// });


// document.querySelectorAll('.operator-btn').forEach(occurence => {
//   const operator = occurence.getAttribute('value');
//   occurence.addEventListener('click', function() {
//   if (operator === "÷" ||
//       operator === "x" || 
//       operator === "-" ||
//       operator === "+") {
//     const displayOperationParent = document.getElementById("displayMathOperation");
//     const displayOperationChild = document.createElement("p");
//     displayOperationChild.innerText = operator;
//     displayOperationParent.appendChild(displayOperationChild);
//     console.log('Button ' + operator + ' was clicked!');
//     }
//   })
// });

// let displayFirstOperand = document.getElementById('firstOperand');
// let firstOperand = document.querySelectorAll('.number-btn');
// firstOperand.addEventListener('click', event => {

// })

// forEach(ocurrance => {
//   ocurrance.addEventListener('click', function() {
//     displayFirstOperand.innerText = firstOperand;
//   })
// });




// function display() {
//   displayFirstOperand.innerText = firstOperand.value;
// }



// document.querySelectorAll('.operator-btn').forEach(occurence => {
// //   const operator = occurence.getAttribute('value');
// }

// const divOperator = document.getElementById("divisionBtn");
// const multOperator = document.getElementById("multiplyBtn");
// const subtOperator = document.getElementById("subtractBtn");
// const sumOperator = document.getElementById("sumBtn");

// document.querySelectorAll('button').forEach(occurence => {
//   const value = occurence.getAttribute('value');
//   occurence.addEventListener('click', function() {
//     if (value === "0" ||
//         value === "1" ||
//         value === "2" ||
//         value === "3" ||
//         value === "4" ||
//         value === "5" ||
//         value === "6" ||
//         value === "7" ||
//         value === "8" ||
//         value === "9" ||
//         value === ".") {
//     const displayNumParent = document.getElementById("displayIntContainer");
//     const displayNumChild = document.createElement("p");
//     displayNumChild.innerText = value;
//     displayNumParent.appendChild(displayNumChild);
//     console.log('Button ' + value + ' was clicked!')
//     }
//   })
// });

// document.querySelectorAll('button').forEach(occurence => {
//   const value = occurence.getAttribute('value');
//   occurence.addEventListener('click', function() {
//     if (value === "÷" ||
//         value === "x" || 
//         value === "-" ||
//         value === "+") {
//     const displayOperationParent = document.getElementById("displayMathOperation");
//     const displayOperationChild = document.createElement("p");
//     displayOperationChild.innerText = value;
//     displayOperationParent.appendChild(displayOperationChild);
//     console.log('Button ' + value + ' was clicked!')
//     }
//   })
// });

// let topDisplayNumChild = value + 
// const divOperatorValue = divOperator.value;
// divOperator.addEventListener("click", displayMathOperation);
// const multOperatorValue = multOperator.value;
// multOperator.addEventListener("click", displayMathOperation);
// const subtOperatorValue = subtOperator.value;
// subtOperator.addEventListener("click", displayMathOperation);
// const sumOperatorValue = sumOperator.value;
// sumOperator.addEventListener("click", displayMathOperation);

// function displayMathOperation(e) {
// const operator = e.target; 
//   const displayOperationParent = document.getElementById("displayMathOperation");
//   const displayOperationChild = document.createElement("p");
//   displayOperationParent.appendChild(displayOperationChild);
//   if (operator === divOperator) {
//     displayOperationChild.innerText = divOperatorValue;
//     } else if 
//     (operator === multOperator) {
//     displayOperationChild.innerText = multOperatorValue;
//     } else if
//     (operator === subtOperator) {
//     displayOperationChild.innerText = subtOperatorValue;
//     } else if
//     (operator === sumOperator) {
//     displayOperationChild.innerText = sumOperatorValue;
//   }   
// };

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

