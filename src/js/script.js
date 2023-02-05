import {coaches} from './modules/coaches.js';
import {i18Obj} from './modules/i18n.js';

function toggleMenu() {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
  if(!isOpen) {
    isOpen = true; 
    document.body.style.overflow = 'hidden'
  } else {
    isOpen = false;
    document.body.style.overflow = 'visible'
  }
}

function switchLang (lang) {
  document.getElementsByClassName('menu__lang_active')[0].textContent = event.target.textContent;
  menuDrop.classList.remove('hover');
  string.forEach((el) => el.textContent = i18Obj[lang][el.dataset.i18n]);
}

function togglePopup() {
  popup.classList.toggle('open');
  document.getElementsByClassName('popup__photo')[0].style.backgroundImage = coaches[btnId].photo;
  document.getElementsByClassName('popup__name')[0].textContent = coaches[btnId].name;
  document.getElementsByClassName('popup__about')[0].textContent = coaches[btnId].about;
  document.getElementsByClassName('popup__age')[0].textContent = coaches[btnId].age;
  document.getElementsByClassName('popup__rank')[0].textContent = coaches[btnId].rank;
  document.getElementsByClassName('popup__rate')[0].textContent = coaches[btnId].elo;
  document.getElementsByClassName('popup__link')[0].textContent = coaches[btnId].link;
  if(!isOpen) {
    isOpen = true; 
    document.body.style.overflow = 'hidden'
    document.getElementsByClassName('shade')[0].style.display = 'block';
  } else {
    isOpen = false;
    document.body.style.overflow = 'visible'
    document.getElementsByClassName('shade')[0].style.display = 'none';
  }
}

function closeMenu() {
  isOpen = false;
  burger.classList.remove('open');
  nav.classList.remove('open');
  document.body.style.overflow = 'visible';
}

//Variables

let isOpen = false;
let btnId;
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const menuItem = document.querySelectorAll('.menu__item');
const menuDrop = document.querySelector('.menu__drop');
const string = document.querySelectorAll('[data-i18n]');
const ru = document.querySelector('.menu__lang_ru');
const en = document.querySelector('.menu__lang_en');
const btnPerson = document.querySelectorAll('.button_person');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
// const dropList = document.querySelector('.menu__droplist');
// const menuLang = document.querySelectorAll('.menu__lang');
// const menuLangActive = document.querySelectorAll('.menu__lang_active');
// const ua = document.querySelector('.menu__lang_ua');

//Listeners

burger.addEventListener('click', toggleMenu);
menuItem.forEach((el) => el.addEventListener('click', closeMenu));
menuDrop.addEventListener('mouseover', () => {
  menuDrop.classList.add('hover');
});
ru.addEventListener('click', () => { switchLang("ru"); });
// ua.addEventListener('click', () => { switchLang("ua"); });
en.addEventListener('click', () => { switchLang("en"); });
btnPerson.forEach((el) => el.addEventListener('click', togglePopup));
btnPerson.forEach((el) => el.addEventListener('mouseover', (event) => {
  let id = event.target.id;
  btnId = id;
}));
popupClose.addEventListener('click', togglePopup);