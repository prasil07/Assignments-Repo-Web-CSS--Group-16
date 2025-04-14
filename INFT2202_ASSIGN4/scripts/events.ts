/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 11/04/2025
 */
const EventsPage = () => {
  let events: EventData[] = [];

  /**
   * Fetch events from JSON file and load them
   * @param {String} filter used to filter events
   */
  function loadEvents(filter = "all") {
    const container = document.getElementById("events");
    if (!container) return;

    container.innerHTML = "<p>Loading events...</p>"; // Display loading message

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/events", true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        events = JSON.parse(xhr.responseText); // Update events array

        const filteredEvents =
          filter === "all"
            ? events
            : events.filter((event) => event.category === filter);
        container.innerHTML = ""; // Clear loading message

        filteredEvents.forEach((event) => {
          const card = document.createElement("div");
          card.classList.add("col-md-4");

          card.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${event.title}</h5>
                            <p class="card-text">${event.description}</p>
                            <p><strong>Date:</strong> ${event.date}</p>
                            <p><strong>Time:</strong> ${event.time}</p>
                            <p><strong>Category:</strong> ${event.category}</p>
                        </div>
                    </div>
                `;
          container.appendChild(card);
        });

        if (filteredEvents.length === 0) {
          container.innerHTML = "<p>No events found for this category.</p>";
        }
      } else {
        container.innerHTML = `<p>Error loading events. Status: ${xhr.status}</p>`;
      }
    };

    xhr.onerror = function () {
      container.innerHTML =
        "<p>Failed to load events. Please check your connection.</p>";
    };

    xhr.send();
  }

  // Event listener for the filter dropdown
  document.getElementById("eventFilter")?.addEventListener("change", (e) => {
    if (e.target instanceof HTMLInputElement)
      loadEvents(e.target.value);
  });

  // Load all events on page load
  loadEvents();
}