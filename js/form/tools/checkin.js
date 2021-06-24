function equalizeTimes(changedField, staticField) {
  staticField.selectedIndex = changedField.selectedIndex;
}

document.getElementById('timein').addEventListener('change', (event) => {
  equalizeTimes(event.target, document.getElementById('timeout'));
});

document.getElementById('timeout').addEventListener('change', (event) => {
  equalizeTimes(event.target, document.getElementById('timein'));
});
