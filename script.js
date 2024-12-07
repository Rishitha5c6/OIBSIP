const degreesInput = document.getElementById('degrees');
const unitSelect = document.getElementById('unit');
const convertButton = document.getElementById('convert');
const resultDisplay = document.getElementById('result');

convertButton.addEventListener('click',   
 () => {
  const degrees = parseFloat(degreesInput.value);
  const inputUnit = unitSelect.value;

  if (isNaN(degrees)) {
    resultDisplay.textContent = 'Please enter a valid number.';
    return;
  }

  let convertedTemperature;
  let outputUnit;

  switch (inputUnit) {
    case 'fahrenheit':
      convertedTemperature = (degrees - 32) * 5/9;
      outputUnit = 'Celsius';
      break;
    case 'celsius':
      convertedTemperature = (degrees * 9/5) + 32;
      outputUnit = 'Fahrenheit';
      break;
    case 'kelvin':
      convertedTemperature = degrees - 273.15;
      outputUnit = 'Celsius';
      break;
  }

  resultDisplay.textContent = `${degrees} ${inputUnit} is ${convertedTemperature.toFixed(2)} ${outputUnit}`;
});
