const checkIn = document.querySelector('#timein');
const checkOut = document.querySelector('#timeout');

function equalizeTimes(changedField, staticField) {
  staticField.selectedIndex = changedField.selectedIndex;
}

checkIn.addEventListener('change', (event) => {
  equalizeTimes(event.target, checkOut);
});

checkOut.addEventListener('change', (event) => {
  equalizeTimes(event.target, checkIn);
});
