/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 11/04/2025
 */
const ContactPage = () => {
  /**
 * This function is called when the contact form is submitted
 * @param {Event} event
 */
  document.getElementById("contactForm")?.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Display the thank you message
    const thankYouMessage = document.getElementById("thankYouMessage");
    if (!thankYouMessage) return;

    thankYouMessage.classList.remove("d-none");

    // Clear the form fields
    if (event.currentTarget instanceof HTMLFormElement)
      event.currentTarget.reset();

    // Redirect to the home page after 5 seconds
    setTimeout(() => {
      window.router.navigate('/');
    }, 5000);
  });
}