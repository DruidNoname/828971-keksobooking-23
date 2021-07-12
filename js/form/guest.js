const roomsNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');

function equalizeGuestsToRooms(changedField, staticField) {
  const changedOptionValue = changedField.options[changedField.selectedIndex].value;

  for (const item of staticField.options) {
    if (changedOptionValue === '100') {
      if (item.value === '0') {
        item.removeAttribute('disabled');
      } else {
        item.setAttribute('disabled', true);
      }
    } else {
      if (item.value > changedOptionValue || item.value === '0') {
        item.setAttribute('disabled', true);
      } else {
        item.removeAttribute('disabled');
      }
    }
  }
}

roomsNumber.addEventListener('change', () => {
  equalizeGuestsToRooms(roomsNumber, capacity);
});

export {
  equalizeGuestsToRooms,
  roomsNumber,
  capacity
};
