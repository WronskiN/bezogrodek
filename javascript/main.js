// NAVIGATION - HAMBURGER
const btn = document.querySelector('.navigation__button');
const menuList = document.querySelector('.navigation__list');

btn.addEventListener('click', function() {
  btn.classList.toggle('navigation__active')
  menuList.classList.toggle('navigation__list--mb')
});

// NAVIGATION - OPACITY CHANGE ON SCROLL 
window.onscroll = function() {
  const navbar = document.getElementById("navigation");

  if (window.pageYOffset >= 100) {
    navbar.style.opacity = ".9";
  } else {
    navbar.style.opacity = "1";
  }
}
