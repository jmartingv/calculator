/**
 * Calculator functions
 *  - addition
 *  - substraction
 *  - divison
 *  - multiplication
 *  - operate function
 */

// Variables
const display = document.querySelector('.display');
const numBtns = document.querySelectorAll('.number');
const opBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equality');
const delBtn = document.querySelector('#delete');
const clearBtn = document.querySelector('#clear');

let dispValue;
let storedNumber;
let currentOperator = '';
let newDisplay;

// Number buttons functions
numBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (newDisplay) {
      display.innerHTML = '';
      newDisplay = false;
    }
    if (display.innerHTML.length < 10) {
      display.innerHTML += e.target.innerHTML;
      dispValue = Number(display.innerHTML);

      // Debugging
      console.log(dispValue);
      console.log(typeof dispValue);
    }
  });
});

// Delete button functions
delBtn.addEventListener('click', () => {
  if (display.innerHTML.length > 0) {
    display.innerHTML = display.innerHTML.slice(0, -1);
    dispValue = Number(display.innerHTML);

    // Debugging
    console.log(dispValue);
    console.log(typeof dispValue);
  }
});

//Clear button functions
clearBtn.addEventListener('click', () => {
  display.innerHTML = '';
  dispValue = Number(display.innerHTML);
  storedNumber = undefined;
  currentOperator = '';
});

// Operator button functions
opBtns.forEach((button) =>
  button.addEventListener('click', (e) => {
    if (currentOperator == '') {
      currentOperator = e.target.id;
      storedNumber = Number(dispValue);
      newDisplay = true;
    } else {
      storedNumber = operate(storedNumber, dispValue, currentOperator);
      display.innerHTML = storedNumber;
      currentOperator = e.target.id;
      newDisplay = true;
    }
  })
);

equalBtn.addEventListener('click', () => {
  if (currentOperator == '') {
    return;
  }

  if (dispValue == 0 && currentOperator == 'divide') {
    display.innerHTML = "Can't divide by 0!";
    dispValue = 0;
    storedNumber = 0;
    currentOperator = '';
    return;
  }

  if (Number.isInteger(operate(storedNumber, dispValue, currentOperator))) {
    display.innerHTML = `${operate(
      storedNumber,
      dispValue,
      currentOperator
    ).toFixed(0)}`;

    storedNumber = Number(display.innerHTML);
    dispValue = storedNumber;
    newDisplay = true;
  } else {
    display.innerHTML = `${operate(
      storedNumber,
      dispValue,
      currentOperator
    ).toFixed(2)}`;

    storedNumber = Number(display.innerHTML);
    dispValue = storedNumber;
    newDisplay = true;
  }
});

// Functions
const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

const operate = (a, b, operator) => {
  switch (operator) {
    case 'add':
      return add(a, b);
      break;
    case 'substract':
      return substract(a, b);
      break;
    case 'divide':
      return divide(a, b);
      break;
    case 'multiply':
      return multiply(a, b);
      break;
  }
};
