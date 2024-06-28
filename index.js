let number, secondInput, operator, result;

const add = (firstInput, secondInput) => firstInput + secondInput;

const subtract = (firstInput, secondInput) => firstInput - secondInput;

const multiply = (firstInput, secondInput) => firstInput * secondInput;

const divide = (firstInput, secondInput) => secondInput !== 0 ? firstInput / secondInput : 'Error';

// Calculator operation variables
firstInput = 3;
secondInput = 5;
operator = "+";

function operate(operator, firstInput, secondInput) {
  switch (operator) {
    case "+":
      return add(firstInput, secondInput);
    case "-":
      return subtract(firstInput, secondInput);
    case "*":
      return multiply(firstInput, secondInput);
    case "/":
      return divide(firstInput, secondInput);
    default:
      console.log("Invalid Operator");
      return; // Exit the function if invalid operator
  }
}

console.log(operate('+', 5, 3));
