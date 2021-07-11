const INITIAL_COORDS = L.latLng(35.6825, 139.75276);

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

const setInitialCoords = () => {
  setAddressField(INITIAL_COORDS, address);
};

setInitialCoords();

export {
  INITIAL_COORDS,
  setInitialCoords,
  setAddressField
};
