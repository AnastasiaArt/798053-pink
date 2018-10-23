var button = document.querySelector('.main-nav__button');
var nav = document.querySelector('.main-nav');
var header = document.querySelector('.main-header--opened');

nav.classList.remove('main-nav--nojs');
header.classList.remove('main-header--opened');
nav.classList.remove('main-nav--opened');

button.addEventListener('click', openNav);
 function openNav() {
   if (nav.classList.contains('main-nav--closed')) {
     header.classList.add('main-header--opened');
     nav.classList.remove('main-nav--closed');
     nav.classList.add('main-nav--opened');
   } else {
     header.classList.remove('main-header--opened');
     navMain.classList.add('main-nav--closed');
     navMain.classList.remove('main-nav--opened');
   }
 }
