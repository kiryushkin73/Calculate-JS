function userNumber(promptText) {
  let result = prompt(`Введите ${promptText}`);
  if (!isNaN(result) && result !== '') {
    return parseFloat(result);
  } else {
    alert(`это не число ${result} \nпример: 1 или 10  `);
    return parseFloat(userNumber('повторно  значение'));
  }
}
function getMathSymbol(mathSymbol) {
  let result = prompt(`Введите ${mathSymbol}`);
  if (result === '+' || result === '-' || result === '*' || result === '/') {
    return result;
  } else if (result === null) {
    return;
  } else {
    alert(`Ошибка это не символ ${result}`);
    return getMathSymbol('повторно математический символ');
  }
}
function calculate(firstNumber, secondNumber, mathSymbol) {
  let resultCalculate = 0;
  switch (mathSymbol) {
    case '+':
      resultCalculate = firstNumber + secondNumber;
      break;
    case '-':
      resultCalculate = firstNumber - secondNumber;
      break;
    case '*':
      resultCalculate = firstNumber * secondNumber;
      break;
    case '/':
      resultCalculate = firstNumber / secondNumber;
      break;
    default:
      alert('Упс...что-то пошло не так');
  }
  if (
    resultCalculate === NaN ||
    resultCalculate === null ||
    resultCalculate === ''
  ) {
    alert('Вычисление не успешно');
  } else if (resultCalculate) {
    alert('Результат вычисления: ' + resultCalculate);
  }
}
function main() {
  let firstNumber = userNumber('первое значение');
  let secondNumber = userNumber('Второе значение');
  let mathSymbol = getMathSymbol(
    "символ математической операции \nдопустимые символы: ' + ' ' - ' ' * ' ' / '"
  );
  let fullCalculate = calculate(firstNumber, secondNumber, mathSymbol);
}
main();
