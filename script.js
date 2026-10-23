/** Dark Mode Toggle **/
let darkmode = localStorage.getItem("darkmode");
const darkmodeToggle = document.getElementById("theme-switch");

const enableDarkmode = () => { 
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
}

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

menuToggle.addEventListener("click", () => {
  const menuIsOpen = navbar.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", menuIsOpen);
});

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