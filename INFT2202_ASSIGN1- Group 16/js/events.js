const events = [
    {
        title: "Charity Run",
        category: "Fundraiser",
        date: "2025-03-10",
        time: "8:00 AM",
        description: "Join our charity run to raise funds for local shelters.",
    },
    {
        title: "Coding Workshop",
        category: "Workshop",
        date: "2025-03-15",
        time: "10:00 AM",
        description: "Learn web development skills in this hands-on workshop.",
    },
    {
        title: "Park Cleanup",
        category: "Cleanup",
        date: "2025-03-20",
        time: "9:00 AM",
        description: "Help clean up the park and make it a better place for everyone.",
    },
];

/**
 * This function loads the events on the page
 * @param {String} filter used to filter events
 */
function loadEvents(filter = "all") {
    const container = document.getElementById("events");
    container.innerHTML = ""; // Clear previous content

    const filteredEvents = filter === "all" ? events : events.filter(event => event.category === filter);

    filteredEvents.forEach(event => {
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
}

document.getElementById("eventFilter").addEventListener("change", (e) => {
    loadEvents(e.target.value);
});

window.onload = () => loadEvents();
