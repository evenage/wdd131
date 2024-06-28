document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent= currentYear;

    document.getElementById("lastModified").textContent= "Last Modified: " + document.lastModified;

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        // Toggle between hamburger and 'X' icon
        if (hamburger.textContent === '\u2630') {
            hamburger.textContent = '\u2715';
        } else {
            hamburger.textContent = '\u2630';
        }
    });
});

