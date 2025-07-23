function loadComponent(url, selector) {
  fetch(url)
    .then((r) => (r.ok ? r.text() : Promise.reject(r.statusText)))
    .then((html) => (document.querySelector(selector).innerHTML = html))
    .catch((err) => console.error("Component load failed:", err));
}

window.addEventListener("DOMContentLoaded", () => {
  loadComponent("../../footer.html", "#footer");
});

function openMenu() {
  document.getElementById("nav_open_button").style.display = "none";
  document.getElementById("nav_close_button").style.display = "block";

  document.getElementById("nav_list").style.display = "flex";
}

function closeMenu() {
  document.getElementById("nav_open_button").style.display = "block";
  document.getElementById("nav_close_button").style.display = "none";
  document.getElementById("nav_list").style.display = "none";
}
