import {coaches} from './modules/coaches.js';
import {i18Obj} from './modules/i18n.js';

function toggleMenu() {
  burger.classList.toggle('open');
  menuNav.classList.toggle('open');
  if(!isOpen) {
    isOpen = true; 
    logo.style.display = 'none'
    document.body.style.overflow = 'hidden'
    document.getElementsByClassName('shade')[0].style.display = 'block';
  } else {
    isOpen = false;
    logo.style.display = 'block'
    document.body.style.overflow = 'visible'
    document.getElementsByClassName('shade')[0].style.display = 'none';
  }
}

function closeMenu() {
  isOpen = false;
  burger.classList.remove('open');
  menuNav.classList.remove('open');
  document.body.style.overflow = 'visible';
  logo.style.display = 'block'
  document.getElementsByClassName('shade')[0].style.display = 'none';
}

function showDrop() {
  if (!isDrop) {
    isDrop = true;
    dropList.classList.add('show');
    if(menuLangActive.textContent === 'ru') {
      ru.style.display = 'none';
      en.style.display = 'block';
    }
    else if(menuLangActive.textContent === 'en') {
      en.style.display = 'none';
      ru.style.display = 'block';
    }
  } else {
    isDrop = false;
    dropList.classList.remove('show');
  }
}

function switchLang (lang) {
  isDrop = false;
  dropList.classList.remove('show');
  string.forEach((el) => el.textContent = i18Obj[lang][el.dataset.i18n]);
}

function togglePopup() {
  popup.classList.toggle('open');
  if (!isEn) {
    document.getElementsByClassName('popup__photo')[0].style.backgroundImage = coaches[btnId].photo;
    document.getElementsByClassName('popup__name')[0].textContent = coaches[btnId].name;
    document.getElementsByClassName('popup__rank')[0].textContent = coaches[btnId].rank;
    document.getElementsByClassName('popup__about')[0].textContent = coaches[btnId].about;
  } else {
    document.getElementsByClassName('popup__photo')[0].style.backgroundImage = coaches[btnId + 1].photo;
    document.getElementsByClassName('popup__name')[0].textContent = coaches[btnId + 1].name;
    document.getElementsByClassName('popup__rank')[0].textContent = coaches[btnId + 1].rank;
    document.getElementsByClassName('popup__about')[0].textContent = coaches[btnId + 1].about;
  }
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

function toggleModal() {
  modal.classList.toggle('open');
  if(!isOpen) {
    isOpen = true;
    document.body.style.overflow = 'hidden'
    document.getElementsByClassName('shade')[0].style.display = 'block';
  } else {
    isOpen = false;
    menuNav.style.zIndex = '1'
    document.body.style.overflow = 'visible'
    document.getElementsByClassName('shade')[0].style.display = 'none';
  }
}

//Variables

let btnId;
let isOpen = false;
let isEn = false;
let isDrop = false;
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const burger = document.querySelector('.burger');
const menuNav = document.querySelector('.menu__nav');
const menuItem = document.querySelectorAll('.menu__item');
const dropList = document.querySelector('.menu__droplist');
const menuLang = document.querySelector('.menu__lang');
const menuLangActive = document.querySelector('.menu__lang_active');
const string = document.querySelectorAll('[data-i18n]');
const ru = document.querySelector('.menu__lang_ru');
const en = document.querySelector('.menu__lang_en');
const btnMore = document.querySelectorAll('.button_more');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const btnJoin = document.querySelectorAll('.button_join');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const btnUp = document.querySelector('.up');

//Listeners

burger.addEventListener('click', toggleMenu);
menuItem.forEach((el) => el.addEventListener('click', closeMenu));
menuLangActive.addEventListener('click', showDrop);

ru.addEventListener('click', event => {
  isEn = false;
  switchLang("ru"); 
  menuLangActive.textContent = event.target.textContent;
});

en.addEventListener('click', event => { 
  isEn = true;
  switchLang("en");
  menuLangActive.textContent = event.target.textContent;
});

btnMore.forEach((el) => el.addEventListener('click', togglePopup));

btnMore.forEach((el) => el.addEventListener('mouseover', event => {
  let id = event.target.id;
  btnId = Number(id);
}));

popupClose.addEventListener('click', togglePopup);

btnJoin.forEach((el) => el.addEventListener('mouseover', () => {
  menuNav.style.zIndex = '0'
}));

btnJoin.forEach((el) => el.addEventListener('click', toggleModal));

modalClose.addEventListener('click', toggleModal);

window.addEventListener('wheel', () => {
  if (document.documentElement.scrollTop > 600) {
    btnUp.style.display = 'block';
  } else {
    btnUp.style.display = 'none';
  }
});

btnUp.addEventListener('click', () => {
  btnUp.style.display = 'none';
});

document.addEventListener("click", function(event) {
  if (event.target.id != 'active' && event.target.id != 'ru' && event.target.id != 'en') {
    if(isDrop) {
      isDrop = false;
      dropList.classList.remove('show');
    }
  }
});