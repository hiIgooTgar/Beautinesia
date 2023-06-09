// navbar sticky
window.addEventListener("scroll", function () {
  var navSticky = document.querySelector(".navbar");
  navSticky.classList.toggle("sticky", window.scrollY > 0);
});

// navbar responsive
const navbar = document.getElementById("click");

function showMenu() {
  click.style.right = "0";
}

function hideMenu() {
  click.style.right = "-250px";
}

// jika navbar klik diluar maka navbar nya akan hilang
const navList = document.querySelector(".navbar-list");
const ham = document.querySelector("#hamburger");

document.addEventListener("click", function (e) {
  if (!ham.contains(e.target) && !navList.contains(e.target)) {
    click.style.right = "-250px";
  }
});
