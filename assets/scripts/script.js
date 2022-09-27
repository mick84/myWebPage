const buttonMenu = document.getElementById("btn-menu");
const mobileMenu = document.getElementById("mobile-menu");
const form = document.getElementById("form");
buttonMenu.onclick = function () {
  // console.log(this);
  this.classList.toggle("active");
  mobileMenu.classList.toggle("active");
};
mobileMenu.onclick = function () {
  setTimeout(() => {
    this.classList.toggle("active");
    buttonMenu.classList.toggle("active");
  }, 500);
};

form.onsubmit = function (e) {
  e.preventDefault();
};
