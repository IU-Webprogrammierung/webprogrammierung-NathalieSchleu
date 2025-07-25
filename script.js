function loadComponent(url, selector) {
  fetch(url)
    .then((r) => (r.ok ? r.text() : Promise.reject(r.statusText)))
    .then((html) => (document.querySelector(selector).innerHTML = html))
    .then(() => {
      const currentPage = window.location.href;
      const elem = currentPage.split("/").slice(-1)[0].split(".")[0];
      setActiveElement(elem);
    })
    .catch((err) => console.error("Component load failed:", err));
}

window.addEventListener("DOMContentLoaded", () => {
  loadComponent("../../footer.html", "#footer");
  loadComponent("../../navigation.html", "#header");
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

function setActiveElement(elem) {
  if (document.getElementsByClassName("active")[0]) {
    document.getElementsByClassName("active")[0].classList.remove("active");
  }

  switch (elem) {
    case "about":
      document.getElementsByClassName("nav_element")[0].classList.add("active");
      return;
    case "japan":
      document.getElementsByClassName("nav_element")[1].classList.add("active");
      return;
    case "laos":
      document.getElementsByClassName("nav_element")[2].classList.add("active");
      return;
    case "korea":
      document.getElementsByClassName("nav_element")[3].classList.add("active");
      return;
    case "nextTrips":
      document.getElementsByClassName("nav_element")[4].classList.add("active");
      return;
    default:
      document.getElementsByClassName("nav_element")[0].classList.add("active");
  }
}
