
const tempElement = document.getElementById('temp');
const windElement = document.getElementById('wind');
const windChillElement = document.getElementById('windchill');

const temperature = parseFloat(tempElement.textContent);
const windSpeed = parseFloat(windElement.textContent);

function calculateWindChill(temp, wind) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
}

if (temperature <= 10 && windSpeed > 4.8) {
    let chill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${chill.toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}