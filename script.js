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
let currentOperator;

// Number buttons functions
numBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (display.innerHTML.length < 10) {
      display.innerHTML += e.target.innerHTML;
      dispValue = display.innerHTML;

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
    dispValue = display.innerHTML;

    // Debugging
    console.log(dispValue);
    console.log(typeof dispValue);
  }
});

//Clear button functions
clearBtn.addEventListener('click', () => {
  display.innerHTML = '';
});

// Operator button functions
opBtns.forEach((button) =>
  button.addEventListener('click', (e) => {
    console.log(e.target.id);
  })
);

// Functions
const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

const operate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return add(a, b);
      break;
    case '-':
      return substract(a, b);
      break;
    case '/':
      return divide(a, b);
      break;
    case '*':
      return multiply(a, b);
      break;
  }
};
