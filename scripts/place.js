// Footer: year and last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Wind chill: static values that match the displayed weather
const temperature = 28;
const windSpeed = 12;

function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16;
}

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
  windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
}

document.getElementById("windchill").textContent = windChill;