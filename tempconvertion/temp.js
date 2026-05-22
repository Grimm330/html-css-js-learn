const tempInput = document.getElementById("tempInput");
const tempUnit = document.getElementById("tempUnit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", function(event) {
    event.preventDefault();

    let temp = Number(tempInput.value);
    let unit = tempUnit.value;

    if (tempInput.value === "") {
        result.textContent = "Please enter a temperature.";
        return;
    }

    let output = "";

    if (unit === "celsius") {
        let fahrenheit = (temp * 9 / 5) + 32;
        let kelvin = temp + 273.15;

        output = `
            Fahrenheit: ${fahrenheit.toFixed(2)} °F <br>
            Kelvin: ${kelvin.toFixed(2)} K
        `;
    }

    else if (unit === "fahrenheit") {
        let celsius = (temp - 32) * 5 / 9;
        let kelvin = celsius + 273.15;

        output = `
            Celsius: ${celsius.toFixed(2)} °C <br>
            Kelvin: ${kelvin.toFixed(2)} K
        `;
    }

    else if (unit === "kelvin") {
        let celsius = temp - 273.15;
        let fahrenheit = (celsius * 9 / 5) + 32;

        output = `
            Celsius: ${celsius.toFixed(2)} °C <br>
            Fahrenheit: ${fahrenheit.toFixed(2)} °F
        `;
    }

    result.innerHTML = output;
});