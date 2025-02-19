/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 16/02/2025
 */
const getInvolved = document.getElementById("getInvolved");

if (getInvolved) {
  getInvolved.addEventListener("click", () => {
    // to Opportunities page
    window.location.href = "opportunities.html";
  });
}

// active page
const navLinks = document.querySelectorAll(".nav-link");
if (navLinks.length > 0) {
  const li = document.createElement("li");
  li.classList.add("nav-item");
  const a = document.createElement("a");
  a.classList.add("nav-link");
  a.href = "#";
  a.textContent = "Donate";
  li.appendChild(a);
  navLinks[1].parentNode.insertAdjacentElement("afterend", li);

  navLinks[1].textContent = "Volunteer Now.";

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((nav) => nav.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

const feedBackForm = document.getElementById("feedback-form");

if (feedBackForm) {
  feedBackForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const form = this;
    const nameInput = form.querySelector("#name");
    const feedbackInput = form.querySelector("#feedback");

    let isValid = true;

    // Custom validation logic
    if (nameInput.value.trim().length < 3) {
      nameInput.classList.add("is-invalid");
      isValid = false;
    } else {
      nameInput.classList.remove("is-invalid");
      nameInput.classList.add("is-valid");
    }

    if (feedbackInput.value.trim().length < 10) {
      feedbackInput.classList.add("is-invalid");
      isValid = false;
    } else {
      feedbackInput.classList.remove("is-invalid");
      feedbackInput.classList.add("is-valid");
    }

    // If valid, show modal and log form data
    if (isValid) {
      const formData = new FormData(form);
      console.log("Name:", formData.get("name"));
      console.log("Feedback:", formData.get("feedback"));

      // Show the Bootstrap modal
      const feedbackModal = new bootstrap.Modal(
        document.getElementById("feedbackModal")
      );
      feedbackModal.show();

      // Clear form fields and validation styles
      form.reset();
      form.querySelectorAll(".is-valid, .is-invalid").forEach((input) => {
        input.classList.remove("is-valid", "is-invalid");
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const mainContainer = document.querySelector("main");

  let events = [];
  let opportunities = [];

  // Fetch events data
  function fetchEvents() {
    fetch("/data/events.json")
      .then((response) => response.json())
      .then((data) => (events = data))
      .catch((error) => console.error("Error loading events:", error));
  }

  // Fetch opportunities data
  function fetchOpportunities() {
    fetch("/data/opportunities.json")
      .then((response) => response.json())
      .then((data) => (opportunities = data))
      .catch((error) => console.error("Error loading opportunities:", error));
  }

  // Display search results
  function displayResults(results) {
    // Remove previous results if any
    const existingResultsDiv = document.getElementById("searchResults");
    if (existingResultsDiv) {
      existingResultsDiv.remove();
    }

    const resultsDiv = document.createElement("div");
    resultsDiv.id = "searchResults";
    resultsDiv.classList.add("container", "mt-4");

    if (results.length === 0) {
      resultsDiv.innerHTML = `<p class="text-muted">No results found.</p>`;
    } else {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row", "g-4");

      results.forEach((item) => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-md-4");

        let cardContent = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}</p>
        `;

        if (item.date) {
          cardContent += `<p><strong>Date:</strong> ${item.date}</p>`;
        }

        if (item.time) {
          cardContent += `<p><strong>Time:</strong> ${item.time}</p>`;
        }

        if (item.category) {
          cardContent += `<p><strong>Category:</strong> ${item.category}</p>`;
        }

        if (item.image) {
          cardContent =
            `<img src="${item.image}" class="card-img-top" alt="${item.title}">` +
            cardContent;
        }

        cardContent += `
            </div>
          </div>
        `;

        colDiv.innerHTML = cardContent;
        rowDiv.appendChild(colDiv);
      });

      resultsDiv.appendChild(rowDiv);
    }

    mainContainer.appendChild(resultsDiv);
    resultsDiv.scrollIntoView();
  }

  // Search Handler
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === "") return;

    const filteredEvents = events.filter(
      (event) =>
        event.title.toLowerCase().includes(searchTerm) ||
        event.description.toLowerCase().includes(searchTerm) ||
        (event.category && event.category.toLowerCase().includes(searchTerm))
    );

    const filteredOpportunities = opportunities.filter(
      (opportunity) =>
        opportunity.title.toLowerCase().includes(searchTerm) ||
        opportunity.description.toLowerCase().includes(searchTerm)
    );

    const combinedResults = [...filteredEvents, ...filteredOpportunities];

    displayResults(combinedResults);
  });

  // Initial Data Fetch
  fetchEvents();
  fetchOpportunities();
});
