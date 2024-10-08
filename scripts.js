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
 
  b = Number(displayedValue);
  
  if (operator === '+') {
    result = add(a, b);
  } else if (operator === '-') {
    result = substract(a, b);
  } else if (operator === '*') {
    result = multiply(a, b);
  } else if (operator === '/') {
    result = divide(a, b);
  }

  if (!result) {
    document.querySelector('.display')
    .innerHTML = '0';
  } else {
    document.querySelector('.display')
      .innerHTML = result.toString().substring(0, 12);
  }

  displayedValue = "";
  
  return result;
}

function clearData() {
  a = 0;
  b = 0;
  operator = "";
}

let displayedValue = "";

function addToDisplay(value) {
  displayedValue += value;
  display(displayedValue);
}

function display() {
  if (displayedValue) {
    document.querySelector('.display')
      .innerHTML = displayedValue.substring(0, 12);
  } else {
    document.querySelector('.display')
      .innerHTML = '0';
  }
}

function saveA(oper) {
  if (!operator) {
    a = Number(displayedValue);
    operator = oper;
    displayedValue = "";
  } else {
    a = operate(operator, a, b);
    operator = oper;
  }
}

function removeActive() {
  const activeButton = document.querySelector(".active");
  if (activeButton) {
    activeButton.classList.remove('active');
  }
}

function clearDisplay() {
  displayedValue = "";
  display();
}

function show() {
  console.log(`sa${a}`);
  console.log(operator);
  console.log(`sb${b}`);
  
}

const operatorButtons = document.querySelectorAll('.orange');

operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener('click', () => {
    const activeButton = document.querySelector('.active');
    if (activeButton) {
      activeButton.classList.remove('active');
    }
    operatorButton.classList.add('active');
  })
});

display(displayedValue);