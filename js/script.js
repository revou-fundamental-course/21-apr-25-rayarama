const userInput = document.getElementById("user-input");
const convResult = document.getElementById("conversion-result");
const formulaExplain = document.getElementById("formula-explanation");
const convertBtn = document.getElementById("convert");
const resetBtn = document.getElementById("reset");
const reverseBtn = document.getElementById("reverse");

function celciusToFahrenheit() {
  let input = userInput.value;
  if (isNaN(input) || input.trim() === "") {
    convResult.value = "Masukkan angka yang valid!";
    return;
  }
  let fahrenheit = (parseFloat(input) * 9) / 5 + 32;
  convResult.value = fahrenheit.toFixed(2);
  formulaExplain.value = `${input} × (9 ÷ 5) + 32 = ${fahrenheit.toFixed(2)}`;
}

function fahrenheitToCelcius() {
  let input = userInput.value;
  if (isNaN(input) || input.trim() === "") {
    convResult.value = "Masukkan angka yang valid";
    return;
  }
  let celcius = ((parseFloat(input) - 32) * 5) / 9;
  convResult.value = celcius.toFixed(2);
  formulaExplain.value = `(${input} - 32) × (5 ÷ 9) = ${celcius.toFixed(2)}`;
}

convertBtn.addEventListener("click", function (event) {
  event.preventDefault();
  celciusToFahrenheit();
});
