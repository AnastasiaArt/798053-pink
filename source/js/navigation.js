var button = document.querySelector('.main-nav__button');
var nav = document.querySelector('.main-nav');
var header = document.querySelector('.main-header--opened');

nav.classList.remove('main-nav--nojs');
header.classList.remove('main-header--opened');

button.addEventListener('click', openNav);

function openNav() {
  if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove('main-nav--closed');
    nav.classList.add('main-nav--opened');
    header.classList.add('main-header--opened');
<<<<<<< HEAD
=======
    button.blur();
>>>>>>> a6f7d2b745bfda00a33f6f1bdcfe9d31dec1fe33
  } else {
    nav.classList.add('main-nav--closed');
    nav.classList.remove('main-nav--opened');
    header.classList.remove('main-header--opened');
<<<<<<< HEAD
=======
    button.blur();
>>>>>>> a6f7d2b745bfda00a33f6f1bdcfe9d31dec1fe33
  }
}
