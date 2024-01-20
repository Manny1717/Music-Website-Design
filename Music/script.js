const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const sideBar = document.querySelector(".container .sidebar");

menuOpen.addEventListener("click", () => (sideBar.style.left = "0"));
menuClose.addEventListener("click", () => (sideBar.style.left = "-100%"));
