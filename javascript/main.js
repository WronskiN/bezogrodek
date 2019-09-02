// NAVIGATION - HAMBURGER
const btn = document.querySelector('.navigation__button');
const menuList = document.querySelector('.navigation__list');

btn.addEventListener('click', function() {
  btn.classList.toggle('navigation__active')
  menuList.classList.toggle('navigation__list--mb')
});

// NAVIGATION - 
window.onscroll = function() {
  const navbar = document.getElementById("navigation");

  if (window.pageYOffset >= 100) {
    navbar.classList.add("sticky")
    navbar.style.opacity = ".9";
  } else {
    navbar.classList.remove("sticky");
    navbar.style.opacity = "1";
  }
}
