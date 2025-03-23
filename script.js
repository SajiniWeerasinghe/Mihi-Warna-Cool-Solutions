const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu"); //show menu toggle
});
// close menu when clicked
menuCloseButton.addEventListener("click",() => menuOpenButton.click()); //close toggle open menu when clicked

// close nav links when clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
});
  





 