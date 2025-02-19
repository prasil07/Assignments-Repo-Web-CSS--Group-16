/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 16/02/2025
 */
document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery");

  function loadGallery() {
    galleryContainer.innerHTML = "<p>Loading images...</p>";

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/data/events.json", true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        const events = JSON.parse(xhr.responseText);

        // Clear loading message
        galleryContainer.innerHTML = "";

        events.forEach((event) => {
          if (event.image) {
            const colDiv = document.createElement("div");
            colDiv.classList.add("col-md-4");

            colDiv.innerHTML = `
              <div class="card">
                <img src="${event.image}" class="card-img-top" alt="${event.title}">
                <div class="card-body">
                  <h5 class="card-title">${event.title}</h5>
                  <p class="card-text">${event.description}</p>
                  <p><strong>Date:</strong> ${event.date}</p>
                  <p><strong>Time:</strong> ${event.time}</p>
                  <p><strong>Category:</strong> ${event.category}</p>
                </div>
              </div>
            `;

            galleryContainer.appendChild(colDiv);
          }
        });

        if (galleryContainer.innerHTML === "") {
          galleryContainer.innerHTML = "<p>No images to display.</p>";
        }
      } else {
        galleryContainer.innerHTML =
          "<p>Error loading gallery. Please try again later.</p>";
      }
    };

    xhr.onerror = function () {
      galleryContainer.innerHTML =
        "<p>Network error. Please check your connection.</p>";
    };

    xhr.send();
  }

  // Load gallery on page load
  loadGallery();
});
