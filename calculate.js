function userNumber(promptText) {
  let result = prompt(`Введите ${promptText}`);
  if (!isNaN(result) && result !== '') {
    return parseInt(result);
  } else {
    return parseInt(userNumber('число'));
  }
}

function getMathSymbol() {
  let result = prompt(
    `Введите символ математической операции ' + ' ' - ' ' * ' ' / ' `
  );
  if (result === '+' || result === '-' || result === '*' || result === '/') {
    return result;
  } else {
    alert(`такого символа нет "${result}" \nПовторите ввод`);
    return getMathSymbol();
  }
}
function calculate(firstNumber, secondNumber, mathSymbol) {
  let resCalculate = 0;
  switch (mathSymbol) {
    case '+':
      resCalculate = firstNumber + secondNumber;
      break;
    case '-':
      resCalculate = firstNumber - secondNumber;
      break;
    case '*':
      resCalculate = firstNumber * secondNumber;
      break;
    case '/':
      resCalculate = firstNumber / secondNumber;
      break;
    default:
      return null;
  }
  return resCalculate;
}

function main() {
  let firstNumber = userNumber('первое значение');
  let secondNumber = userNumber('второе значение');
  let mathSymbol = getMathSymbol();
  let calculateResult = calculate(firstNumber, secondNumber, mathSymbol);
  alert('Результат вычисление:  ' + calculateResult);
}

main();
