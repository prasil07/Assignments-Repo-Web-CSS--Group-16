const opportunities = [
    {
        title: "Beach Cleanup",
        description: "Help clean up the local beach to protect marine life.",
        date: "2025-02-10",
        time: "10:00 AM",
    },
    {
        title: "Community Garden",
        description: "Assist in planting and maintaining a community garden.",
        date: "2025-02-15",
        time: "9:00 AM",
    },
    {
        title: "Food Drive",
        description: "Collect and organize donations for the local food bank.",
        date: "2025-02-20",
        time: "11:00 AM",
    },
];

/**
 * This function loads the opportunities on the page
 */
function loadOpportunities() {
    const container = document.getElementById("opportunities");
    opportunities.forEach((opp, index) => {
        const card = document.createElement("div");
        card.classList.add("col-md-4");

        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${opp.title}</h5>
                    <p class="card-text">${opp.description}</p>
                    <p><strong>Date:</strong> ${opp.date}</p>
                    <p><strong>Time:</strong> ${opp.time}</p>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signUpModal" onclick="populateModal(${index})">
                        Sign Up
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

/**
 * This function populates the modal with the opportunity details
 * @param {Number} index  The index of the opportunity
 */
function populateModal(index) {
    const opportunity = opportunities[index];
    document.getElementById("signUpModalLabel").innerText = `Sign Up for ${opportunity.title}`;
}

/**
 * This function is called when the sign-up form is submitted
 * @param {Event} event 
 */
document.getElementById("signUpForm").addEventListener("submit", (event) => {
    event.preventDefault();
    // validate form
    const formData = new FormData(event.target);
    if (!formData.get("name") || !formData.get("email") || !formData.get("email").includes("@") || !formData.get("role")) {
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you for signing up! We'll be in touch soon.");
    document.getElementById("signUpForm").reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById("signUpModal"));
    modal.hide();
});

window.onload = loadOpportunities;
