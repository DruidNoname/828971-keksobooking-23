import {
  USER_MARKER_COORDS
} from '../../map/map.js';

const address = document.querySelector('#address');

function getRoundedCoords(coords) {
  const coordsValueArray = Object.values(coords);
  return coordsValueArray.map((value) => value.toFixed(5));
}

function makeStringFromRoundedCoords(coords) {
  const coordsRoundedArray = getRoundedCoords(coords);

  return coordsRoundedArray.join(', ');
}

function setAddressField(coords, field) {
  field.value = makeStringFromRoundedCoords(coords);
}

const setCustomCoords = () => {
  setAddressField(USER_MARKER_COORDS, address);
};

setCustomCoords();

export {
  setCustomCoords,
  setAddressField
};
