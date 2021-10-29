// sticky navbar on-scroll
window.addEventListener("scroll", function () {
    const flexNav = document.querySelector(".flexNav");
    flexNav.classList.toggle("sticky", window.scrollY > 1);
});

// Toggle navMenu on-click of sandwich icon
const navToggle = document.querySelector("#nav-toggle");
const nav = document.querySelector("#nav-links");

navToggle.addEventListener("click", function () {
    nav.classList.toggle("navOpen");
});