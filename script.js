/** Dark Mode Toggle **/
let darkmode = localStorage.getItem("darkmode");
const darkmodeToggle = document.getElementById("theme-switch");

// Applies the dark theme and saves the user's preference.
const enableDarkmode = () => { 
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
}

// Removes the dark theme and saves the light-mode preference.
const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
}

if (darkmode === "active") enableDarkmode();

darkmodeToggle.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

/** navigation toggle **/
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const navigationLinks = document.querySelectorAll(".navbar a");

// Opens or closes the navigation menu when the toggle is clicked.
menuToggle.addEventListener("click", () => {
  const menuIsOpen = navbar.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", menuIsOpen);
});

// Closes the menu when the user clicks somewhere outside it.
document.addEventListener("click", (event) => {
  const clickedOutsideMenu =
    !navbar.contains(event.target) &&
    !menuToggle.contains(event.target);

  if (clickedOutsideMenu) {
    navbar.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 600) {
    navbar.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

/** dynamic content from an array **/
const reviews = [
  {
    restaurant: "The Golden Wok",
    cuisine: "Szechuan",
    dish: "Mapo Tofu",
    rating: "4.8 / 5.0",
    verdict: "Must Visit"
  },
  {
    restaurant: "Lucia's Trattoria",
    cuisine: "Italian",
    dish: "Truffle Cacio e Pepe",
    rating: "4.2 / 5.0",
    verdict: "Worth It"
  },
  {
    restaurant: "Velvet & Smoke",
    cuisine: "BBQ / Fusion",
    dish: "Smoked Brisket Bao",
    rating: "2.5 / 5.0",
    verdict: "Overpriced"
  }
];

const reviewsBody = document.getElementById("reviews-body");

// Creates review rows from the review array.
function renderReviews() {
  if (reviews.length === 0) {
    reviewsBody.innerHTML = `
      <tr>
        <td colspan="5">No reviews available.</td>
      </tr>
    `;
    return;
  }

  reviewsBody.innerHTML = reviews.map((review) => `
    <tr>
      <td>${review.restaurant || "N/A"}</td>
      <td>${review.cuisine || "N/A"}</td>
      <td>${review.dish || "N/A"}</td>
      <td>${review.rating || "N/A"}</td>
      <td>${review.verdict || "N/A"}</td>
    </tr>
  `).join("");
}
renderReviews();

/** contact-form validation **/
const contactForm = document.querySelector("form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const subjectError = document.getElementById("subject-error");
const messageError = document.getElementById("message-error");
const formSuccess = document.getElementById("form-success");

// Clears previous validation messages and invalid-field styling.
function clearFormFeedback() {
  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";
  formSuccess.textContent = "";

  nameInput.classList.remove("invalid");
  emailInput.classList.remove("invalid");
  subjectInput.classList.remove("invalid");
  messageInput.classList.remove("invalid");
}

// Checks form fields and displays specific validation messages.
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearFormFeedback();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

  let isValid = true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
    nameError.textContent = "Name is required.";
    nameInput.classList.add("invalid");
    isValid = false;
  }

  if (email === "") {
    emailError.textContent = "Email is required.";
    emailInput.classList.add("invalid");
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    emailInput.classList.add("invalid");
    isValid = false;
  }

  if (subject === "") {
    subjectError.textContent = "Subject is required.";
    subjectInput.classList.add("invalid");
    isValid = false;
  }

  if (message === "") {
    messageError.textContent = "Message cannot be blank.";
    messageInput.classList.add("invalid");
    isValid = false;
  }

  if (isValid) {
    formSuccess.textContent = "Your message is ready to be sent.";
    contactForm.reset();
  }
});