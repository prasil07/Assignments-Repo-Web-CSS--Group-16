/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 10/03/2025
 */
const LogoutPage = async () => {

    try {
      const response = await fetch(SERVER_URL + "/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      });

      const data = await response.json();

      if (response.ok) {
        alert("Logout successful!");

        // Redirect to the home page after 5 seconds
        setTimeout(() => {
          window.location.href = "/";
        }, 5000);
      } else {
        alert(data.message || "Logout failed.");
      }
    } catch (err) {
      console.error("Error logging out:", err);
      alert("An error occurred.");
    }
}