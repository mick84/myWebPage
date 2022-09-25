const buttonMenu = document.getElementById("btn-menu");
const mobileMenu = document.getElementById("mobile-menu");
buttonMenu.onclick = function () {
  // console.log(this);
  this.classList.toggle("active");
  mobileMenu.classList.toggle("active");
};
