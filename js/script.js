const userInput = document.getElementById("user-input");
const convResult = document.getElementById("conversion-result");
const formulaExplain = document.getElementById("formula-explanation");
const convertBtn = document.getElementById("convert");
const resetBtn = document.getElementById("reset");
const reverseBtn = document.getElementById("reverse");
const convLabel = document.getElementById("conversion-label");
const resultLabel = document.getElementById("result-label");

// * Function for conversion
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

function reverseCalc() {
  if (convLabel.textContent.includes("Celcius")) {
    convLabel.innerHTML = "Fahrenheit (&deg;F)";
    resultLabel.innerHTML = "Celcius (&deg;C)";
    formulaExplain.placeholder =
      "((Suhu dalam Fahrenheit) - 32) × (5 ÷ 9) = (Suhu dalam Celcius)";
    convertBtn.removeEventListener("click", handleCelcConv);
    convertBtn.addEventListener("click", handleFahrConv);
  } else if (convLabel.textContent.includes("Fahrenheit")) {
    convLabel.innerHTML = "Celcius (&deg;C)";
    resultLabel.innerHTML = "Fahrenheit (&deg;F)";
    formulaExplain.placeholder =
      "(Suhu dalam Celcius) × (9 ÷ 5) + 32 = (Suhu dalam Fahrenheit)";
    convertBtn.removeEventListener("click", handleFahrConv);
    convertBtn.addEventListener("click", handleCelcConv);
  }
}

function resetHandler() {
  userInput.value = "";
  convResult.value = "";
  formulaExplain.value = "";
}

// * Function for eventHandler
function handleCelcConv(event) {
  event.preventDefault();
  celciusToFahrenheit();
}

function handleFahrConv(event) {
  event.preventDefault();
  fahrenheitToCelcius();
}

// * Event Listener
convertBtn.addEventListener("click", handleCelcConv);

resetBtn.addEventListener("click", function (event) {
  event.preventDefault();
  resetHandler();
});

reverseBtn.addEventListener("click", function (event) {
  event.preventDefault();
  reverseCalc();
});
