/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 11/04/2025
 */
const RegisterPage = () => {
  const form = document.getElementById("registerForm") as HTMLFormElement;

  /**
 * This function is called when the login form is submitted
 * @param {Event} event
 */
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullname = form.fullname.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, email, password }),
        credentials: "include"
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful! You can now log in.");
        window.router.navigate("/login");
      } else {
        alert(data.message || "Registration failed.");
      }
    } catch (err) {
      console.error("Error registering:", err);
      alert("An error occurred.");
    }
  });  
}