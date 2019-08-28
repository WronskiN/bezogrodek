const btn = document.querySelector('.navigation__button');
const menuList = document.querySelector('.navigation__list');

btn.addEventListener('click', function() {
  btn.classList.toggle('navigation__active')
  menuList.classList.toggle('navigation__list--mb')
});