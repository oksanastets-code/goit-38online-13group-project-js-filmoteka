import { setToLocalStorage, getFromLocalStorage } from './localStorageLang';

import langJson from '../JSON/langJson.json';
// import langModalJson from '../JSON/langModalJson.json';

const enRef = document.querySelector('#englishLink');
const ruRef = document.querySelector('#russianLink');
const ukRef = document.querySelector('#ukrainianLink');

enRef.addEventListener('click', changeEnLanguage);
ruRef.addEventListener('click', changeRuLanguage);
ukRef.addEventListener('click', changeUkLanguage);

function changeEnLanguage() {
  let lang = 'en';
  setLanguageData(lang);
  setToLocalStorage('lang', lang);
}
function changeRuLanguage() {
  let lang = 'ru';
  setLanguageData(lang);
  setToLocalStorage('lang', lang);
}
function changeUkLanguage() {
  let lang = 'uk';
  setLanguageData(lang);
  setToLocalStorage('lang', lang);
}
let langLS = getFromLocalStorage('lang');
if (langLS === 'uk') {
  setLanguageData('uk');
}
if (langLS === 'ru') {
  setLanguageData('ru');
}
if (langLS === 'en') {
  setLanguageData('en');
}

function setLanguageData(lang) {
  for (let key in langJson) {
    document.querySelector('.lang-' + key).textContent = `${langJson[key][`${lang}`]}`;
    document.querySelector('.lang-input').placeholder = `${langJson.input[`${lang}`]}`;
  }
}
