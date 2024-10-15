let a = 0;
let b = 0;
let operator = "";
let c = 0;

function add(a, b) {
  return (a + b).toFixed(4)*1;
}

function substract(a, b) {
  return (a - b).toFixed(4)*1;
}

function multiply(a, b) {
  return (a * b).toFixed(4)*1;
}

function divide(a, b) {
  return (a / b).toFixed(4)*1;
}

function operate(operator, a, b) {
  let result = 0;
 
  b = Number(displayedValue);
  
  if (operator === '/' && b === 0) {
    result = "Ask your Ex!"
  } else if (operator === '+') {
    result = add(a, b);
  } else if (operator === '-') {
    result = substract(a, b);
  } else if (operator === '*') {
    result = multiply(a, b);
  } else if (operator === '/') {
    result = divide(a, b);
  }

  if (!result || result === Infinity) {
    document.querySelector('.display')
    .innerHTML = '0';
  } else {
    document.querySelector('.display')
      .innerHTML = result.toString().substring(0, 12);
  }

  c = result;
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
  if (displayedValue === '' && value === '0') {
    displayedValue = '';
    display(displayedValue);
  } else {
    displayedValue += value;
    display(displayedValue);
  }
}

function addDecimal(value) {
  if (displayedValue.includes('.')) {
    return;
  } else {
    displayedValue += value;
    display(displayedValue);
  }
}

function backspace() {
  displayedValue = displayedValue.slice(0, -1);
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
  const activeButton = document.querySelector('.active');
  
  if (activeButton) {
    operator = oper;
  }else if (c && !displayedValue) {
    a = c;
    operator = oper;
  } else if (!a && !operator) {
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

function showOperator(oper) {
  displayedValue = oper;
  display();
  displayedValue = "";
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

function addActiveClass(eventKey) {
  let clickedButton = null;

  if (eventKey === '+') {
    clickedButton = document.querySelector('.plus');
  } else if (eventKey === '-') {
    clickedButton = document.querySelector('.minus');
  } else if (eventKey === '*') {
    clickedButton = document.querySelector('.multiply');
  } else if (eventKey === '/') {
    clickedButton = document.querySelector('.divide');
  }

  const activeButton = document.querySelector('.active');
    if (activeButton) {
      activeButton.classList.remove('active');
    }
    clickedButton.classList.add('active');
}

document.body.addEventListener('keydown', (event) => {
  if (event.key === '1') {
    addToDisplay('1');
    removeActive();
  } else if (event.key === '2') {
    addToDisplay('2');
    removeActive();
  } else if (event.key === '3') {
    addToDisplay('3');
    removeActive();
  } else if (event.key === '4') {
    addToDisplay('4');
    removeActive();
  } else if (event.key === '5') {
    addToDisplay('5');
    removeActive();
  } else if (event.key === '6') {
    addToDisplay('6');
    removeActive();
  } else if (event.key === '7') {
    addToDisplay('7');
    removeActive();
  } else if (event.key === '8') {
    addToDisplay('8');
    removeActive();
  } else if (event.key === '9') {
    addToDisplay('9');
    removeActive();
  } else if (event.key === '0') {
    addToDisplay('0');
    removeActive();
  } else if (event.key === '.') {
    addDecimal('.');
    removeActive();
  } else if (event.key === '+') {
    saveA('+');
    addActiveClass(event.key);
    showOperator('+');
  } else if (event.key === '-') {
    saveA('-');
    addActiveClass(event.key);
    showOperator('-');
  } else if (event.key === '*') {
    saveA('*');
    addActiveClass(event.key);
    showOperator('*');
  } else if (event.key === '/') {
    saveA('/');
    addActiveClass(event.key);
    showOperator('/');
  } else if (event.key === '=' || event.key === 'Enter') {
    operate(operator, a, b);
    clearData();
    removeActive();
  } else if (event.key === 'Escape') {
    clearDisplay();
    removeActive();
    clearData();
  } else if (event.key === 'Backspace' || key === 'Delete') {
    backspace();
    removeActive();
  }
})

display(displayedValue);