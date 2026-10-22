let darkmode = localStorage.getItem("darkmode");
const darkmodeToggle = document.getElementById("theme-switch");

darkmodeToggle.addEventListener("click", function() {
  darkmode = localStorage.getItem("darkmode");
  if (darkmode === "enabled") {
    localStorage.setItem("darkmode", "active");
  } else {
    localStorage.setItem("darkmode", "enabled");
  }
  document.body.classList.toggle("darkmode");
});