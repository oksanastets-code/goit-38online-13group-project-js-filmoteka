import { setToLocalStorage, getFromLocalStorage } from './localStorageLang';

import langJson from '../JSON/langJson.json';
import langModalJson from '../JSON/langModalJson.json';

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
let langs = getFromLocalStorage('lang');
if (langs === 'uk') {
  setLanguageData('uk');
}
if (langs === 'ru') {
  setLanguageData('ru');
}
if (langs === 'en') {
  setLanguageData('en');
}

function setLanguageData(lang) {
  for (let key in langJson) {
    document.querySelector('.lang-' + key).textContent = `${langJson[key][`${lang}`]}`;
    document.querySelector('.lang-input').placeholder = `${langJson.input[`${lang}`]}`;
  }
}

export function changeModalLanguage() {
  // const watchedBtn = document.querySelector('.lang-addWatched');
  // const queueBtn = document.querySelector('.lang-addQueue');
  const popularity = document.querySelector('.lang-popularity');
  const genres = document.querySelector('.lang-genres');
  const votes = document.querySelector('.lang-votes');
  const title = document.querySelector('.lang-titleOriginal');
  const about = document.querySelector('.lang-about');
  switch (langs) {
    case 'ru':
      // console.log('ru');
      // watchedBtn.textContent = `${langModalJson.addWatched.ru}`;
      // queueBtn.textContent = `${langModalJson.addQueue.ru}`;
      popularity.textContent = `${langModalJson.popularity.ru}`;
      genres.textContent = `${langModalJson.genres.ru}`;
      votes.textContent = `${langModalJson.votes.ru}`;
      title.textContent = `${langModalJson.titleOriginal.ru}`;
      about.textContent = `${langModalJson.about.ru}`;
      break;
    case 'uk':
      // console.log('ua');
      // watchedBtn.textContent = `${langModalJson.addWatched.uk}`;
      // queueBtn.textContent = `${langModalJson.addQueue.uk}`;
      popularity.textContent = `${langModalJson.popularity.uk}`;
      genres.textContent = `${langModalJson.genres.uk}`;
      votes.textContent = `${langModalJson.votes.uk}`;
      title.textContent = `${langModalJson.titleOriginal.uk}`;
      about.textContent = `${langModalJson.about.uk}`;
      break;

    case 'en':
      // console.log('en');
      // watchedBtn.textContent = `${langModalJson.addWatched.en}`;
      // queueBtn.textContent = `${langModalJson.addQueue.en}`;
      popularity.textContent = `${langModalJson.popularity.en}`;
      genres.textContent = `${langModalJson.genres.en}`;
      votes.textContent = `${langModalJson.votes.en}`;
      title.textContent = `${langModalJson.titleOriginal.en}`;
      about.textContent = `${langModalJson.about.en}`;
      break;
  }
}
// changeModalLanguage();
// switch (langs) {
//   case 'ru':
//     btn.textContent = 'видалити з черги';
//   case 'uk':
//     btn.textContent = 'удалить из очереди';
//   case 'en':
//     btn.textContent = 'remove from queue';
// }
