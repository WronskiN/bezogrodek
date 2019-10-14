/////////////////////////////////////////////////////////////////////
//////////////// NAVIGATION - HAMBURGER
const btn = document.querySelector('.navigation__button');
const menuList = document.querySelector('.navigation__list');

btn.addEventListener('click', function() {
  btn.classList.toggle('navigation__active');
  menuList.classList.toggle('navigation__list--mb');
});

/////////////////////////////////////////////////////////////////////
///////////////// NAVIGATION FOR MOBILE - HIDE THE NAV MENU AFTER CLICK
const items = [...document.querySelectorAll('.navigation__item--link')];

items.forEach(function(e) {
  e.addEventListener('click', () => {
    menuList.classList.remove('navigation__list--mb');
    btn.classList.toggle('navigation__active');
  }, 1000);
});

/////////////////////////////////////////////////////////////////////
//////////////// NAVIGATION - OPACITY CHANGE ON SCROLL 
window.onscroll = function() {
  const navbar = document.getElementById("navigation");

  if (window.pageYOffset >= 100) {
    navbar.style.opacity = ".9";
  } else {
    navbar.style.opacity = "1";
  }
};

//////////////////////////////////////////////////////////////////////
////////////// JQuery trigger animation onscroll
$(document).on('scroll', function() {
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();
  const $sectionProduct = $('.product');
  const $sectionIcon = $('.product__box--icon');

  const sectionFromTop = $sectionProduct.offset().top;
  const sectionHeight = $sectionProduct.outerHeight();

  if(scrollValue < sectionFromTop + sectionHeight - windowHeight) {  
    $sectionIcon.addClass('product__box--animation');
  }

});

///////////////////////////////////////////////////////////////////////
//////////////// JQuery Smooth Scroll (Nav)
$('.navigation a').on('click', function(e) {
  if(this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800);
  }
});