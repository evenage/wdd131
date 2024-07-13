document.addEventListener('DOMContentLoaded', () => {
    // Check if the counter exists in localStorage
    let reviewCounter = localStorage.getItem('reviewCounter');
    
    // If it doesn't exist or is not a number, initialize it to 0
    if (isNaN(reviewCounter) || reviewCounter === null) {
        reviewCounter = 0;
    } else {
        // Convert the string to an integer
        reviewCounter = parseInt(reviewCounter, 10);
    }
    
    // Increment the counter (this should be done when a new review is submitted, not here)
    // reviewCounter += 1; // Remove or comment out this line to avoid incrementing on page load
    
    // Save the updated counter back to localStorage (only needed if incrementing)
    // localStorage.setItem('reviewCounter', reviewCounter); // Remove or comment out this line

    // Display the counter value to the user
    const reviewCountElement = document.getElementById('reviewCount');
    if (reviewCountElement) {
        reviewCountElement.textContent = reviewCounter;
    } else {
        console.error('Element with ID "reviewCount" not found.');
    }
});

// After updating the review counter and submitting the form programmatically
// Show the confirmation message
const confirmationMessage = document.getElementById('confirmationMessage');
if (confirmationMessage) {
    confirmationMessage.style.display = 'block';
}


document.addEventListener('DOMContentLoaded', (event) => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;


    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;
});