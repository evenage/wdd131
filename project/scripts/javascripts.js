// getdates.js

import { RenderSiteplan } from "./siteplan.js";

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

const currentTimeElement = document.getElementById("current-time");

setInterval(() => {
  const currentTime = new Date().toLocaleTimeString();
  currentTimeElement.textContent = currentTime;
}, 1000);

function openHomePage() {
    windows.location.href="#home";
}

function openAboutPage() {
    windows.location.href="#about";
}

function openContactPage() {
    windows.location.href="#contact";
}

function openLoginPage() {
    windows.location.href="#login";
}

// Call the functions to update the dates
updateCurrentYear();
updateLastModified();
//render siteplan
async function getArtwork() {
    try {
        const respons = await fetch("data/siteplan.js")
        const data = await respons.js()
        RenderSiteplan(data)
    } catch (error) { console.log(error) }
}
getSiteplan()