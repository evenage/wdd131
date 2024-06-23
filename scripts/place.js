// place.js

// Function to update the current year
function updateCurrentYear() {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

// Function to update the last modified date
function updateLastModified() {
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = 'Last Modified: ' + document.lastModified;
    }
}

// Function to calculate windchill
function calculateWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

// Function to update windchill
function updateWindChill() {
    const tempElement = document.getElementById('temperature');
    const windSpeedElement = document.getElementById('windSpeed');
    const windChillElement = document.getElementById('windChill');

    const temp = parseFloat(tempElement.textContent);
    const windSpeed = parseFloat(windSpeedElement.textContent);

    if (temp <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temp, windSpeed);
        windChillElement.textContent = windChill.toFixed(2) + '°C';
    } else {
        windChillElement.textContent = 'N/A';
    }
}

// Call the functions to update the dates and windchill
updateCurrentYear();
updateLastModified();
updateWindChill();
