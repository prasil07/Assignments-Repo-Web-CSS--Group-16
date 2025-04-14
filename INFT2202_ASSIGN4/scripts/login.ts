/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 11/04/2025
 */
const LoginPage = () => {
  const form = document.getElementById("loginForm") as HTMLFormElement;
  if (!form) return;
  
  /**
 * This function is called when the login form is submitted
 * @param {Event} event
 */
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include"
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        // Clear the form fields
        if (form instanceof HTMLFormElement)
          form.reset();

        // Redirect to the home page after 5 seconds
        setTimeout(() => {
          window.router.navigate('/');
        }, 500);
      } else {
        alert(data.message || "Login failed.");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      alert("An error occurred.");
    }
  });
}