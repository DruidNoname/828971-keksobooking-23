// источник - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

function generateRandomIntegerNumberFromInterval(minValue, maxValue) {
  const RANGE_OF_NUMBERS = maxValue - minValue;
  const INTEGER_RANGE_OF_NUMBERS = Math.floor(maxValue) - Math.ceil(minValue);
  if (typeof minValue !== 'number' && typeof minValue !== 'number') {
    return 'Аргументы функции должны быть числами';
  } else if (RANGE_OF_NUMBERS <= 0) {
    return 'Меньшее число должно быть меньше большего числа';
  } else if (INTEGER_RANGE_OF_NUMBERS < 0) {
    return 'В указанном интервале отсутствуют целые числа';
  } else if (minValue < 0) {
    return 'На границах интервала не могут быть отрицательные числа';
  }
  return (Math.round((Math.random() * INTEGER_RANGE_OF_NUMBERS) + Math.ceil(minValue)).toFixed(0));
}

generateRandomIntegerNumberFromInterval(10, 24);

function generateRandomDecimalNumberFromInterval(minValue, maxValue, decimalPlaces) {
  const RANGE_OF_NUMBERS = maxValue - minValue;
  const MULTIPLYER_FOR_VALUE_CUTTING = Math.pow(10, decimalPlaces);
  const RANGE_OF_NUMBERS_WITH_DECIMAL_PLACES_GRANTING = (Math.floor(maxValue*MULTIPLYER_FOR_VALUE_CUTTING))/MULTIPLYER_FOR_VALUE_CUTTING - (Math.ceil(minValue*MULTIPLYER_FOR_VALUE_CUTTING))/MULTIPLYER_FOR_VALUE_CUTTING;
  if (typeof minValue !== 'number' && typeof minValue !== 'number' && typeof decimalPlaces !== 'number') {
    return 'Аргументы функции должны быть числами';
  } else if (RANGE_OF_NUMBERS <= 0) {
    return 'Меньшее число должно быть меньше большего числа';
  } else if (minValue < 0) {
    return 'На границах интервала не могут быть отрицательные числа';
  } else if (!Number.isInteger(decimalPlaces)) {
    return 'Количество знаков после запятой не может быть дробным числом';
  } else if (decimalPlaces < 0) {
    return 'Количество знаков после запятой не может быть отрицательным числом';
  } else if (RANGE_OF_NUMBERS_WITH_DECIMAL_PLACES_GRANTING < 0) {
    return 'В указанном интервале отсутствуют числа с заданным количеством знаков после запятой';
  }
  return (Math.fround((Math.random() * RANGE_OF_NUMBERS_WITH_DECIMAL_PLACES_GRANTING) + (Math.ceil(minValue*MULTIPLYER_FOR_VALUE_CUTTING))/MULTIPLYER_FOR_VALUE_CUTTING)).toFixed(decimalPlaces);
}

generateRandomDecimalNumberFromInterval(0.025, 0.026);

