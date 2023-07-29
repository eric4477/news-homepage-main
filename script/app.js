const navMenu = document.querySelector("#nav-primary");
const closeNavBtn = document.querySelector("#menu-close");
const hamburgerIcon = document.querySelector("#menu-icon");

hamburgerIcon.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});

closeNavBtn.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});
