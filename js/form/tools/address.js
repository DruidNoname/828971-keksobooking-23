import { decimalAdjust } from '../../utils/utils.js';

function getRoundedCoords(coords) {
  const coordsValueArray = Object.values(coords);

  return coordsValueArray.map((value) => decimalAdjust(value, 5));
}

function makeStringFromRoundedCoords(coords) {
  const coordsRoundedArray = getRoundedCoords(coords);

  return coordsRoundedArray.join(', ');
}

function setAddressField(coords, field) {
  field.value = makeStringFromRoundedCoords(coords);
}

export {
  setAddressField
};
