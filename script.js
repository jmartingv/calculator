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
const delBtn = document.querySelector('#delete');

let dispValue;

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

delBtn.addEventListener('click', () => {
  display.innerHTML = display.innerHTML.slice(0, -1);
  dispValue = display.innerHTML;

  // Debugging
  console.log(dispValue);
  console.log(typeof dispValue);
});

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
