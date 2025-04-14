/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 11/04/2025
 */
const EventPlanningPage = () => {
  const form = document.getElementById("eventForm") as HTMLFormElement;
  const eventsContainer = document.getElementById("eventsContainer") as HTMLDivElement;
  const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;

  async function fetchEvents() {
    const res = await fetch("/api/events", { credentials: "include" });
    const events = await res.json();
    renderEvents(events);
  }

  function renderEvents(events) {
    eventsContainer.innerHTML = "";
    events.forEach(event => {
      const col = document.createElement("div");
      col.className = "col-md-4";
      col.innerHTML = `
        <div class="card h-100 shadow-sm" data-id="${event._id}">
          ${event.image ? `<img src="${event.image}" class="card-img-top" alt="${event.title}">` : ""}
          <div class="card-body">
            <h5 class="card-title">${event.title}</h5>
            <p class="card-text">${event.description}</p>
            <p><strong>${event.date}</strong> at <strong>${event.time}</strong></p>
            <p><span class="badge bg-secondary">${event.category}</span></p>
            <button class="btn btn-sm btn-warning me-2 edit-btn">Edit</button>
            <button class="btn btn-sm btn-danger delete-btn">Delete</button>
          </div>
        </div>
      `;
      eventsContainer.appendChild(col);
    });
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      title: form.title.value,
      description: form.description.value,
      date: form.date.value,
      time: form.time.value,
      category: form.category.value,
      image: form.image.value,
    };

    const id = form.eventId.value;
    const method = id ? "PUT" : "POST";
    const url = id ? `/api/events/${id}` : "/api/events";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data)
    });

    if (res.ok) {
      alert(id ? "Event updated!" : "Event created!");
      form.reset();
      form.eventId.value = "";
      submitBtn.innerText = "Add Event";
      fetchEvents();
    } else {
      let msg = "Error saving event."
      try {
        const data = await res.json();
        msg = data.message || data.error || msg;
      } catch (er) {
      }
      alert(msg);
    }
  });

  // Event delegation for Edit and Delete buttons
  eventsContainer.addEventListener("click", async (e) => {
    const target = e.target;
    const card = (target as HTMLElement).closest(".card");
    const eventId = card?.getAttribute("data-id");

    if ((target as HTMLElement).classList.contains("edit-btn")) {
      const res = await fetch(`/api/events/${eventId}`, {
        credentials: "include"
      });
      const event = await res.json();
      form.eventId.value = event._id;
      form.title.value = event.title;
      form.description.value = event.description;
      form.date.value = event.date;
      form.time.value = event.time;
      form.category.value = event.category;
      form.image.value = event.image || "";
      submitBtn.innerText = "Update Event";
      form.scrollIntoView();
    }

    if ((target as HTMLElement).classList.contains("delete-btn")) {
      if (confirm("Delete this event?")) {
        const res = await fetch(`/api/events/${eventId}`, {
          method: "DELETE",
          credentials: "include"
        });
        if (res.ok) {
          alert("Event deleted");
          fetchEvents();
        } else {
          alert("Error deleting event.");
        }
      }
    }
  });

  // Initial load
  fetchEvents();
}