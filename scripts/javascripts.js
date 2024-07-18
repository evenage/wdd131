// getdates.js

import { RenderTemples } from "./filtered-temples.js";

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
//render temples
async function getTemples() {
    try {
        const respons = await fetch("data/temples.json")
        const data = await respons.json()
        RenderTemples(data)
    } catch (error) { console.log(error) }
}
getTemples()