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
  const currentPage = window.location.href;
  if (!currentPage.includes("index.html")) {
    loadComponent("../../footer.html", "#footer");
    loadComponent("../../navigation.html", "#header");
  }
});

window.addEventListener("resize", () => {
  const openButton = document.getElementById("nav_open_button");
  const closeButton = document.getElementById("nav_close_button");
  const nav = document.getElementById("nav_list");
  if (window.innerWidth > 743) {
    openButton.style.display = "none";
    closeButton.style.display = "none";
    nav.style.display = "flex";
  } else {
    const isClosed =
      openButton.style.display === "none" ||
      (openButton.style.display === "block" &&
        closeButton.style.display === "none");
    if (isClosed) {
      openButton.style.display = "block";
      nav.style.display = "none";
      closeButton.style.display = "none";
    } else {
      openButton.style.display = "none";
      nav.style.display = "flex";
      closeButton.style.display = "block";
    }
  }
});

function openMenu() {
  document.getElementById("nav_open_button").style.display = "none";
  document.getElementById("nav_close_button").style.display = "block";

  document.getElementById("nav_list").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  document.body.style.overflow = "visible";
  document.getElementById("nav_open_button").style.display = "block";
  document.getElementById("nav_close_button").style.display = "none";
  document.getElementById("nav_list").style.display = "none";
}

function setActiveElement(elem) {
  if (document.getElementsByClassName("active")[0]) {
    document.getElementsByClassName("active")[0].classList.remove("active");
  }

  if (document.getElementsByClassName("nav_element").length === 0) {
    return;
  }

  switch (elem) {
    case "about":
      document.getElementsByClassName("nav_element")[0].classList.add("active");
      break;
    case "japan":
      document.getElementsByClassName("nav_element")[1].classList.add("active");
      break;
    case "laos":
      document.getElementsByClassName("nav_element")[2].classList.add("active");
      break;
    case "korea":
      document.getElementsByClassName("nav_element")[3].classList.add("active");
      break;
    case "nextTrips":
      document.getElementsByClassName("nav_element")[4].classList.add("active");
      break;
    default:
      document.getElementsByClassName("nav_element")[0].classList.add("active");
  }

  if (window.innerWidth <= 743) {
    document.getElementById("nav_list").style.display = "none";
  }
}

window.onscroll = function () {
  showOrHideBackToTopButton();
};

function showOrHideBackToTopButton() {
  const backToTopButton = document.getElementById("trip_back_to_top_button");
  // only show once user has scrolled a bit
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
