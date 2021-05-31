// источник - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

function generateRandomIntegerNumberFromInterval(minValue, maxValue) {
  const rangeOfNumbers = maxValue - minValue;
  const integerRangeOfNumbers = Math.floor(maxValue) - Math.ceil(minValue);
  const randomArea = Math.random() * (integerRangeOfNumbers + 1) + Math.ceil(minValue);
  if (typeof minValue !== 'number' || typeof maxValue !== 'number') {
    return 'Аргументы функции должны быть числами';
  }
  if (rangeOfNumbers <= 0) {
    return 'Некорректный интервал';
  }
  if (integerRangeOfNumbers < 0) {
    return 'В указанном интервале отсутствуют целые числа';
  }
  if (minValue < 0) {
    return 'На границах интервала не могут быть отрицательные числа';
  }
  return Math.floor(randomArea);
}

generateRandomIntegerNumberFromInterval(10, 24);

function generateRandomDecimalNumberFromInterval(minValue, maxValue, decimalPlaces) {
  const rangeOfNumbers = maxValue - minValue;
  const multiplyerForValueCutting = Math.pow(10, decimalPlaces);
  const maxValueRounded = Math.floor(maxValue * multiplyerForValueCutting) / multiplyerForValueCutting;
  const minValueRounded = Math.ceil(minValue * multiplyerForValueCutting) / multiplyerForValueCutting;
  const rangeOfNumbersWithDecimal = maxValueRounded - minValueRounded;
  const randomArea = Math.random() * (rangeOfNumbersWithDecimal + (1 / multiplyerForValueCutting)) + minValueRounded;
  if (typeof minValue !== 'number' || typeof maxValue !== 'number' || typeof decimalPlaces !== 'number') {
    return 'Аргументы функции должны быть числами';
  }
  if (rangeOfNumbers <= 0) {
    return 'Некорректный интервал';
  }
  if (minValue < 0) {
    return 'На границах интервала не могут быть отрицательные числа';
  }
  if (!Number.isInteger(decimalPlaces)) {
    return 'Количество знаков после запятой не может быть дробным числом';
  }
  if (decimalPlaces < 0) {
    return 'Количество знаков после запятой не может быть отрицательным числом';
  }
  if (rangeOfNumbersWithDecimal < 0) {
    return 'В указанном интервале отсутствуют числа с заданным количеством знаков после запятой';
  }
  return Number((Math.floor(randomArea * multiplyerForValueCutting) / multiplyerForValueCutting).toFixed(decimalPlaces));
}

generateRandomDecimalNumberFromInterval(0.025, 0.026, 4);
generateRandomDecimalNumberFromInterval(1.026, 1.026, 4);
generateRandomDecimalNumberFromInterval(1.026, 'селёдка', 4);
