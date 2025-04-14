/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 11/04/2025
 */
interface EventData {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  category: string;
  image?: string; // Optional, since some events may not have images
}

interface Opportunity {
  id: number;
  title: string;
  description: string;
  category: string;
  location?: string; // Optional, if not all opportunities have a location
  image?: string;
}
interface Window {
  bootstrap: any;
}

async function init() {
  for (const key of ['nav', 'footer']) {
    const container = document.querySelector(key);
    if (container) {
      const res = await fetch(`/views/components/${key}.html`);
      const html = await res.text();
      container.innerHTML = html;
    }
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
    const node = navLinks[1].parentNode
    if (node instanceof HTMLElement)
      node.insertAdjacentElement("afterend", li);

    navLinks[1].textContent = "Volunteer Now.";

    navLinks.forEach((link) => {
      if (link.getAttribute('href') === location.pathname) {
        link.classList.add('active')
      }
      link.addEventListener("click", () => {
        navLinks.forEach((nav) => nav.classList.remove("active"));
        link.classList.add("active");
      });
    });
  }

  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const mainContainer = document.querySelector("main");

  let events: EventData[] = [];
  let opportunities: Opportunity[] = [];

  // Fetch events data
  function fetchEvents() {
    fetch("/api/events")
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

    mainContainer?.appendChild(resultsDiv);
    resultsDiv.scrollIntoView();
  }

  // Search Handler
  searchForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!(searchInput instanceof HTMLInputElement)) return;

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
}

async function logout() {
  const res = await fetch(`/api/auth/logout`);
  const data = await res.json();
  console.log(data);
}