/**
 * Calculator functions
 *  - addition
 *  - substraction
 *  - divison
 *  - multiplication
 *  - operate function
 */

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
