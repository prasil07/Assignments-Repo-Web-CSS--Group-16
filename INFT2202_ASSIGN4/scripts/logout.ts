/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 11/04/2025
 */
const LogoutPage = async () => {

    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      });

      if (response.ok) {
        alert("Logout successful!");

        // Redirect to the home page after 5 seconds
        setTimeout(() => {
          window.router.navigate('/');
        }, 500);
      } else {
        alert("Logout failed.");
      }
    } catch (err) {
      console.error("Error logging out:", err);
      alert("An error occurred.");
    }
}