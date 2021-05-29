// источник - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

function generateRandomNumber(minValue, maxValue){
  if (minValue >= 0 && minValue < maxValue){
    return Math.round(Math.random( ) * (maxValue - minValue)) + minValue;
  }
  return 'Функция работает только для целых положительных чисел, а также первое число должно быть строго меньше второго.';
}

generateRandomNumber(10, 24);

function generateRandomDecimalNumber(minValue, maxValue,decimalPlaces){
  if (minValue >= 0 && minValue.toFixed(decimalPlaces) < maxValue.toFixed(decimalPlaces)){
    return  (Math.fround((Math.random( ) * (maxValue - minValue)) + minValue)).toFixed(decimalPlaces);
  }
  return 'Функция работает только для положительных чисел, а также первое число должно быть строго меньше второго в указанном десятичном диапазоне значений.';
}

generateRandomDecimalNumber(0.025, 0.026, 4);
