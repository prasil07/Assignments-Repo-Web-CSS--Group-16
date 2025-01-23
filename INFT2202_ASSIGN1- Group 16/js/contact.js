/**
 * This function is called when the contact form is submitted
 * @param {Event} event 
 */
document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Display the thank you message
    const thankYouMessage = document.getElementById("thankYouMessage");
    thankYouMessage.classList.remove("d-none");

    // Clear the form fields
    document.getElementById("contactForm").reset();

    // Redirect to the home page after 5 seconds
    setTimeout(() => {
        window.location.href = "index.html";
    }, 5000);
});
