var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 10/03/2025
 */
var ContactPage = function () {
    var _a;
    /**
   * This function is called when the contact form is submitted
   * @param {Event} event
   */
    (_a = document.getElementById("contactForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        // Display the thank you message
        var thankYouMessage = document.getElementById("thankYouMessage");
        if (!thankYouMessage)
            return;
        thankYouMessage.classList.remove("d-none");
        // Clear the form fields
        if (event.currentTarget instanceof HTMLFormElement)
            event.currentTarget.reset();
        // Redirect to the home page after 5 seconds
        setTimeout(function () {
            window.location.href = "/";
        }, 5000);
    });
};
var _this = this;
/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 10/03/2025
 */
var EventPlanningPage = function () {
    var form = document.getElementById("eventForm");
    var eventsContainer = document.getElementById("eventsContainer");
    var submitBtn = document.getElementById("submitBtn");
    function fetchEvents() {
        return __awaiter(this, void 0, void 0, function () {
            var res, events;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(SERVER_URL + "/api/events", { credentials: "include" })];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        events = _a.sent();
                        renderEvents(events);
                        return [2 /*return*/];
                }
            });
        });
    }
    function renderEvents(events) {
        eventsContainer.innerHTML = "";
        events.forEach(function (event) {
            var col = document.createElement("div");
            col.className = "col-md-4";
            col.innerHTML = "\n        <div class=\"card h-100 shadow-sm\" data-id=\"".concat(event._id, "\">\n          ").concat(event.image ? "<img src=\"".concat(event.image, "\" class=\"card-img-top\" alt=\"").concat(event.title, "\">") : "", "\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(event.title, "</h5>\n            <p class=\"card-text\">").concat(event.description, "</p>\n            <p><strong>").concat(event.date, "</strong> at <strong>").concat(event.time, "</strong></p>\n            <p><span class=\"badge bg-secondary\">").concat(event.category, "</span></p>\n            <button class=\"btn btn-sm btn-warning me-2 edit-btn\">Edit</button>\n            <button class=\"btn btn-sm btn-danger delete-btn\">Delete</button>\n          </div>\n        </div>\n      ");
            eventsContainer.appendChild(col);
        });
    }
    form.addEventListener("submit", function (e) { return __awaiter(_this, void 0, void 0, function () {
        var data, id, method, url, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    data = {
                        title: form.title.value,
                        description: form.description.value,
                        date: form.date.value,
                        time: form.time.value,
                        category: form.category.value,
                        image: form.image.value,
                    };
                    id = form.eventId.value;
                    method = id ? "PUT" : "POST";
                    url = id ? "/api/events/".concat(id) : "/api/events";
                    return [4 /*yield*/, fetch(SERVER_URL + url, {
                            method: method,
                            headers: { "Content-Type": "application/json" },
                            credentials: "include",
                            body: JSON.stringify(data)
                        })];
                case 1:
                    res = _a.sent();
                    if (res.ok) {
                        alert(id ? "Event updated!" : "Event created!");
                        form.reset();
                        form.eventId.value = "";
                        submitBtn.innerText = "Add Event";
                        fetchEvents();
                    }
                    else {
                        alert("Error saving event.");
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    // Event delegation for Edit and Delete buttons
    eventsContainer.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
        var target, card, eventId, res, event_1, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    target = e.target;
                    card = target.closest(".card");
                    eventId = card === null || card === void 0 ? void 0 : card.getAttribute("data-id");
                    if (!target.classList.contains("edit-btn")) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetch(SERVER_URL + "/api/events/".concat(eventId), {
                            credentials: "include"
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    event_1 = _a.sent();
                    form.eventId.value = event_1._id;
                    form.title.value = event_1.title;
                    form.description.value = event_1.description;
                    form.date.value = event_1.date;
                    form.time.value = event_1.time;
                    form.category.value = event_1.category;
                    form.image.value = event_1.image || "";
                    submitBtn.innerText = "Update Event";
                    _a.label = 3;
                case 3:
                    if (!target.classList.contains("delete-btn")) return [3 /*break*/, 5];
                    if (!confirm("Delete this event?")) return [3 /*break*/, 5];
                    return [4 /*yield*/, fetch(SERVER_URL + "/api/events/".concat(eventId), {
                            method: "DELETE",
                            credentials: "include"
                        })];
                case 4:
                    res = _a.sent();
                    if (res.ok) {
                        alert("Event deleted");
                        fetchEvents();
                    }
                    else {
                        alert("Error deleting event.");
                    }
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); });
    // Initial load
    fetchEvents();
};
/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 10/03/2025
 */
var EventsPage = function () {
    var _a;
    var events = [];
    /**
     * Fetch events from JSON file and load them
     * @param {String} filter used to filter events
     */
    function loadEvents(filter) {
        if (filter === void 0) { filter = "all"; }
        var container = document.getElementById("events");
        if (!container)
            return;
        container.innerHTML = "<p>Loading events...</p>"; // Display loading message
        var xhr = new XMLHttpRequest();
        xhr.open("GET", SERVER_URL + "/api/events", true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                events = JSON.parse(xhr.responseText); // Update events array
                var filteredEvents = filter === "all"
                    ? events
                    : events.filter(function (event) { return event.category === filter; });
                container.innerHTML = ""; // Clear loading message
                filteredEvents.forEach(function (event) {
                    var card = document.createElement("div");
                    card.classList.add("col-md-4");
                    card.innerHTML = "\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">".concat(event.title, "</h5>\n                            <p class=\"card-text\">").concat(event.description, "</p>\n                            <p><strong>Date:</strong> ").concat(event.date, "</p>\n                            <p><strong>Time:</strong> ").concat(event.time, "</p>\n                            <p><strong>Category:</strong> ").concat(event.category, "</p>\n                        </div>\n                    </div>\n                ");
                    container.appendChild(card);
                });
                if (filteredEvents.length === 0) {
                    container.innerHTML = "<p>No events found for this category.</p>";
                }
            }
            else {
                container.innerHTML = "<p>Error loading events. Status: ".concat(xhr.status, "</p>");
            }
        };
        xhr.onerror = function () {
            container.innerHTML =
                "<p>Failed to load events. Please check your connection.</p>";
        };
        xhr.send();
    }
    // Event listener for the filter dropdown
    (_a = document.getElementById("eventFilter")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", function (e) {
        if (e.target instanceof HTMLInputElement)
            loadEvents(e.target.value);
    });
    // Load all events on page load
    loadEvents();
};
/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 10/03/2025
 */
var GalleryPage = function () {
    var galleryContainer = document.getElementById('gallery');
    if (!galleryContainer)
        return;
    galleryContainer.innerHTML = "<p>Loading images...</p>";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/data/events.json", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var events = JSON.parse(xhr.responseText);
            // Clear loading message
            galleryContainer.innerHTML = "";
            events.forEach(function (event) {
                if (event.image) {
                    var colDiv = document.createElement("div");
                    colDiv.classList.add("col-md-4");
                    colDiv.innerHTML = "\n              <div class=\"card\">\n                <img src=\"".concat(event.image, "\" class=\"card-img-top\" alt=\"").concat(event.title, "\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">").concat(event.title, "</h5>\n                  <p class=\"card-text\">").concat(event.description, "</p>\n                  <p><strong>Date:</strong> ").concat(event.date, "</p>\n                  <p><strong>Time:</strong> ").concat(event.time, "</p>\n                  <p><strong>Category:</strong> ").concat(event.category, "</p>\n                </div>\n              </div>\n            ");
                    galleryContainer.appendChild(colDiv);
                }
            });
            if (galleryContainer.innerHTML === "") {
                galleryContainer.innerHTML = "<p>No images to display.</p>";
            }
        }
        else {
            galleryContainer.innerHTML =
                "<p>Error loading gallery. Please try again later.</p>";
        }
    };
    xhr.onerror = function () {
        galleryContainer.innerHTML =
            "<p>Network error. Please check your connection.</p>";
    };
    xhr.send();
};
var HomePage = function () {
    var feedBackForm = document.getElementById("feedback-form");
    if (feedBackForm) {
        feedBackForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var form = e.currentTarget;
            var nameInput = form.querySelector("#name");
            var feedbackInput = form.querySelector("#feedback");
            console.log('sd', form, nameInput, feedbackInput);
            var isValid = true;
            if (!(nameInput instanceof HTMLInputElement) || !(feedbackInput instanceof HTMLTextAreaElement) || !(form instanceof HTMLFormElement))
                return;
            // Custom validation logic
            if (nameInput.value.trim().length < 3) {
                nameInput.classList.add("is-invalid");
                isValid = false;
            }
            else {
                nameInput.classList.remove("is-invalid");
                nameInput.classList.add("is-valid");
            }
            if (feedbackInput.value.trim().length < 10) {
                feedbackInput.classList.add("is-invalid");
                isValid = false;
            }
            else {
                feedbackInput.classList.remove("is-invalid");
                feedbackInput.classList.add("is-valid");
            }
            // If valid, show modal and log form data
            if (isValid) {
                var formData = new FormData(form);
                console.log("Name:", formData.get("name"));
                console.log("Feedback:", formData.get("feedback"));
                // Show the Bootstrap modal
                var feedbackModal = new window.bootstrap.Modal(document.getElementById("feedbackModal"));
                feedbackModal.show();
                // Clear form fields and validation styles
                form.reset();
                form.querySelectorAll(".is-valid, .is-invalid").forEach(function (input) {
                    input.classList.remove("is-valid", "is-invalid");
                });
            }
        });
    }
    var getInvolved = document.getElementById("getInvolved");
    if (getInvolved) {
        getInvolved.addEventListener("click", function () {
            // to Opportunities page
            window.router.navigate("/opportunities");
        });
    }
};
var _this = this;
/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 10/03/2025
 */
var LoginPage = function () {
    var form = document.getElementById("loginForm");
    if (!form)
        return;
    /**
   * This function is called when the login form is submitted
   * @param {Event} event
   */
    form.addEventListener("submit", function (e) { return __awaiter(_this, void 0, void 0, function () {
        var email, password, response, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    email = form.email.value;
                    password = form.password.value;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(SERVER_URL + "/api/auth/login", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ email: email, password: password }),
                            credentials: "include"
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    if (response.ok) {
                        alert("Login successful!");
                        // Clear the form fields
                        if (form instanceof HTMLFormElement)
                            form.reset();
                        // Redirect to the home page after 5 seconds
                        setTimeout(function () {
                            window.location.href = "/";
                        }, 5000);
                    }
                    else {
                        alert(data.message || "Login failed.");
                    }
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.error("Error logging in:", err_1);
                    alert("An error occurred.");
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); });
};
var _this = this;
/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 10/03/2025
 */
var LogoutPage = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(SERVER_URL + "/api/auth/login", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        credentials: "include"
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                if (response.ok) {
                    alert("Logout successful!");
                    // Redirect to the home page after 5 seconds
                    setTimeout(function () {
                        window.location.href = "/";
                    }, 5000);
                }
                else {
                    alert(data.message || "Logout failed.");
                }
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.error("Error logging out:", err_2);
                alert("An error occurred.");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var SERVER_URL = ''; // 'http://localhost:3000'
function init() {
    return __awaiter(this, void 0, void 0, function () {
        // Fetch events data
        function fetchEvents() {
            fetch("/data/events.json")
                .then(function (response) { return response.json(); })
                .then(function (data) { return (events = data); })
                .catch(function (error) { return console.error("Error loading events:", error); });
        }
        // Fetch opportunities data
        function fetchOpportunities() {
            fetch("/data/opportunities.json")
                .then(function (response) { return response.json(); })
                .then(function (data) { return (opportunities = data); })
                .catch(function (error) { return console.error("Error loading opportunities:", error); });
        }
        // Display search results
        function displayResults(results) {
            // Remove previous results if any
            var existingResultsDiv = document.getElementById("searchResults");
            if (existingResultsDiv) {
                existingResultsDiv.remove();
            }
            var resultsDiv = document.createElement("div");
            resultsDiv.id = "searchResults";
            resultsDiv.classList.add("container", "mt-4");
            if (results.length === 0) {
                resultsDiv.innerHTML = "<p class=\"text-muted\">No results found.</p>";
            }
            else {
                var rowDiv_1 = document.createElement("div");
                rowDiv_1.classList.add("row", "g-4");
                results.forEach(function (item) {
                    var colDiv = document.createElement("div");
                    colDiv.classList.add("col-md-4");
                    var cardContent = "\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">".concat(item.title, "</h5>\n              <p class=\"card-text\">").concat(item.description, "</p>\n        ");
                    if (item.date) {
                        cardContent += "<p><strong>Date:</strong> ".concat(item.date, "</p>");
                    }
                    if (item.time) {
                        cardContent += "<p><strong>Time:</strong> ".concat(item.time, "</p>");
                    }
                    if (item.category) {
                        cardContent += "<p><strong>Category:</strong> ".concat(item.category, "</p>");
                    }
                    if (item.image) {
                        cardContent =
                            "<img src=\"".concat(item.image, "\" class=\"card-img-top\" alt=\"").concat(item.title, "\">") +
                                cardContent;
                    }
                    cardContent += "\n            </div>\n          </div>\n        ";
                    colDiv.innerHTML = cardContent;
                    rowDiv_1.appendChild(colDiv);
                });
                resultsDiv.appendChild(rowDiv_1);
            }
            mainContainer === null || mainContainer === void 0 ? void 0 : mainContainer.appendChild(resultsDiv);
            resultsDiv.scrollIntoView();
        }
        var _i, _a, key, container, res, html, navLinks, li, a, node, searchForm, searchInput, mainContainer, events, opportunities;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _i = 0, _a = ['nav', 'footer'];
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 5];
                    key = _a[_i];
                    container = document.querySelector(key);
                    if (!container) return [3 /*break*/, 4];
                    return [4 /*yield*/, fetch("/views/components/".concat(key, ".html"))];
                case 2:
                    res = _b.sent();
                    return [4 /*yield*/, res.text()];
                case 3:
                    html = _b.sent();
                    container.innerHTML = html;
                    _b.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 1];
                case 5:
                    navLinks = document.querySelectorAll(".nav-link");
                    if (navLinks.length > 0) {
                        li = document.createElement("li");
                        li.classList.add("nav-item");
                        a = document.createElement("a");
                        a.classList.add("nav-link");
                        a.href = "#";
                        a.textContent = "Donate";
                        li.appendChild(a);
                        node = navLinks[1].parentNode;
                        if (node instanceof HTMLElement)
                            node.insertAdjacentElement("afterend", li);
                        navLinks[1].textContent = "Volunteer Now.";
                        navLinks.forEach(function (link) {
                            if (link.getAttribute('href') === location.pathname) {
                                link.classList.add('active');
                            }
                            link.addEventListener("click", function () {
                                navLinks.forEach(function (nav) { return nav.classList.remove("active"); });
                                link.classList.add("active");
                            });
                        });
                    }
                    searchForm = document.getElementById("searchForm");
                    searchInput = document.getElementById("searchInput");
                    mainContainer = document.querySelector("main");
                    events = [];
                    opportunities = [];
                    // Search Handler
                    searchForm === null || searchForm === void 0 ? void 0 : searchForm.addEventListener("submit", function (e) {
                        e.preventDefault();
                        if (!(searchInput instanceof HTMLInputElement))
                            return;
                        var searchTerm = searchInput.value.trim().toLowerCase();
                        if (searchTerm === "")
                            return;
                        var filteredEvents = events.filter(function (event) {
                            return event.title.toLowerCase().includes(searchTerm) ||
                                event.description.toLowerCase().includes(searchTerm) ||
                                (event.category && event.category.toLowerCase().includes(searchTerm));
                        });
                        var filteredOpportunities = opportunities.filter(function (opportunity) {
                            return opportunity.title.toLowerCase().includes(searchTerm) ||
                                opportunity.description.toLowerCase().includes(searchTerm);
                        });
                        var combinedResults = __spreadArray(__spreadArray([], filteredEvents, true), filteredOpportunities, true);
                        displayResults(combinedResults);
                    });
                    // Initial Data Fetch
                    fetchEvents();
                    fetchOpportunities();
                    return [2 /*return*/];
            }
        });
    });
}
var opportunities = [
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
 * This function populates the modal with the opportunity details
 * @param {Number} index  The index of the opportunity
 */
function populateModal(index) {
    var opportunity = opportunities[index];
    var signupLabel = document.getElementById("signUpModalLabel");
    if (signupLabel)
        signupLabel.innerText = "Sign Up for ".concat(opportunity.title);
}
var OpportunitiesPage = function () {
    var _a;
    /**
     * This function loads the opportunities on the page
     */
    function loadOpportunities() {
        var container = document.getElementById("opportunities");
        if (!container)
            return;
        opportunities.forEach(function (opp, index) {
            var card = document.createElement("div");
            card.classList.add("col-md-4");
            card.innerHTML = "\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">".concat(opp.title, "</h5>\n                    <p class=\"card-text\">").concat(opp.description, "</p>\n                    <p><strong>Date:</strong> ").concat(opp.date, "</p>\n                    <p><strong>Time:</strong> ").concat(opp.time, "</p>\n                    <button class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#signUpModal\" onclick=\"populateModal(").concat(index, ")\">\n                        Sign Up\n                    </button>    \n                </div>    \n            </div>    \n        ");
            container.appendChild(card);
        });
    }
    /**
     * This function is called when the sign-up form is submitted
     * @param {Event} event
     */
    (_a = document.getElementById("signUpForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!(event.currentTarget instanceof HTMLFormElement))
            return;
        // validate form
        var formData = new FormData(event.currentTarget);
        var email = formData.get("email");
        if (!formData.get("name") || !email || typeof email !== 'string' || !email.includes("@") || !formData.get("role")) {
            alert("Please fill in all fields.");
            return;
        }
        alert("Thank you for signing up! We'll be in touch soon.");
        event.currentTarget.reset();
        var modal = window.bootstrap.Modal.getInstance(document.getElementById("signUpModal"));
        modal.hide();
    });
    loadOpportunities();
};
var _this = this;
/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 10/03/2025
 */
var RegisterPage = function () {
    var form = document.getElementById("registerForm");
    /**
   * This function is called when the login form is submitted
   * @param {Event} event
   */
    form.addEventListener("submit", function (e) { return __awaiter(_this, void 0, void 0, function () {
        var fullname, email, password, response, data, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    fullname = form.fullname.value;
                    email = form.email.value;
                    password = form.password.value;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(SERVER_URL + "/api/auth/register", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ fullname: fullname, email: email, password: password }),
                            credentials: "include"
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    if (response.ok) {
                        alert("Registration successful! You can now log in.");
                        window.location.href = "/login";
                    }
                    else {
                        alert(data.message || "Registration failed.");
                    }
                    return [3 /*break*/, 5];
                case 4:
                    err_3 = _a.sent();
                    console.error("Error registering:", err_3);
                    alert("An error occurred.");
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); });
};
/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 10/03/2025
 */
var contentKeys = {
    '/': 'home.html',
    '/gallery': 'gallery.html',
    '/opportunities': 'opportunities.html',
    '/contact': 'contact.html',
    '/events': 'events.html',
    '/login': 'login.html',
    '/register': 'register.html',
    '/event-planning': 'event-planning.html',
    '/logout': 'index.html',
};
var Router = /** @class */ (function () {
    function Router() {
        var _this = this;
        this.routes = {};
        window.onpopstate = function () { return _this.loadRoute(location.pathname); };
    }
    Router.prototype.addRoute = function (path, action) {
        this.routes[path] = action;
    };
    Router.prototype.navigate = function (url) {
        var path = url.startsWith('/') ? url : new URL(url).pathname;
        history.pushState({}, "", url);
        this.loadRoute(path);
    };
    Router.prototype.loadRoute = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var mainContainer, key, res, html, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.routes[path]) return [3 /*break*/, 6];
                        mainContainer = document.getElementsByTagName('main')[0];
                        if (!mainContainer) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        key = contentKeys[path];
                        return [4 /*yield*/, fetch('/views/content/' + key)];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.text()];
                    case 3:
                        html = _a.sent();
                        mainContainer.innerHTML = html;
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        return [3 /*break*/, 5];
                    case 5:
                        this.routes[path]();
                        return [3 /*break*/, 7];
                    case 6:
                        console.error("Route ".concat(path, " not found"));
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return Router;
}());
var router = window.router = new Router();
router.addRoute('/', HomePage);
router.addRoute('/gallery', GalleryPage);
router.addRoute('/opportunities', OpportunitiesPage);
router.addRoute('/contact', ContactPage);
router.addRoute('/events', EventsPage);
router.addRoute('/login', LoginPage);
router.addRoute('/logout', LogoutPage);
router.addRoute('/register', RegisterPage);
router.addRoute('/event-planning', EventPlanningPage);
init().then(function () {
    router.navigate(location.href.replace('.html', ''));
    document.addEventListener('click', function (e) {
        if (e.target instanceof HTMLAnchorElement) {
            e.preventDefault();
            router.navigate(e.target.href);
        }
    });
});
