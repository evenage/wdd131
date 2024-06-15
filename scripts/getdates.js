// getdates.js

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

// Call the functions to update the dates
updateCurrentYear();
updateLastModified();
