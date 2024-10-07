let a = 0;
let b = 0;
let operator = "";

function add(a, b) {
  return (a + b);
}

function substract(a, b) {
  return (a - b);
}

function multiply(a, b) {
  return (a * b);
}

function divide(a, b) {
  return (a / b);
}

function operate(operator, a, b) {
  let result = 0;
  console.log(a);
  
  console.log(operator);
  b = Number(displayedValue);
  console.log(b);

  if (operator === 'plus') {
    result = add(a, b);
  } else if (operator === 'minus') {
    result = substract(a, b);
  } else if (operator === 'multiply') {
    result = multiply(a, b);
  } else if (operator === 'divide') {
    result = divide(a, b);
  }

  document.querySelector('.display')
    .innerHTML = (result);

  console.log(result);
  displayedValue = "";
}

let displayedValue = "";

function addToDisplay(value) {
  displayedValue += value;

  console.log(displayedValue);
  
  display(displayedValue);
}

function display() {
  if (displayedValue) {
    document.querySelector('.display')
      .innerHTML = displayedValue;
  } else {
    document.querySelector('.display')
      .innerHTML = '0';
  }
}

display(displayedValue);

function saveA(oper) {
  a = Number(displayedValue);
  operator = oper;
  displayedValue = "";
}

function clear() {
  displayedValue = "";
}