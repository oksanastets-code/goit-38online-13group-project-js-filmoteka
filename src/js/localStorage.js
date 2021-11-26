import { success } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

// const refs = {
//   gallery: document.querySelector('.movies__list'),
//   libraryBtn: document.querySelector('#library-button'),
//   libraryBtnsContainer: document.querySelector('.button-container'),
//   watchedBtn: document.querySelector('.btn__watched'),
//   queueBtn: document.querySelector('.btn__queue'),
// };

function searchLinks() {
  return {
    dataId: document.querySelector('.modal'),
    dataRelease: document.querySelector('.modal'),
    dataImg: document.querySelector('.film__img'),
    dataPopularity: document.querySelector('.card__item-count'),
    dataOriginal: document.querySelector('.card__item-original-title'),
    dataGenres: document.querySelector('.card__item-genres'),
    dataOverview: document.querySelector('.card__text'),
    btnWatched: document.querySelector('.btn__watched'),
    btnQueue: document.querySelector('.btn__queue'),
  };
}

//  localStorage
function updateStorage(datalocalStorage, keyStorage) {
  const dataStorage = [];
  dataStorage.push(datalocalStorage);
  localStorage[keyStorage] = JSON.stringify(dataStorage);
}

// слушатель
export function listenerModalBtn() {
  const btnAddWatched = document.querySelector('.btn__watched');
  btnAddWatched.addEventListener('click', addsWatched);

  const btnAddQueue = document.querySelector('.btn__queue');
  btnAddQueue.addEventListener('click', addsQueue);
  storageСheckWatched();
  storageСheckQueue();
}
const buttonLabelWatchedAdd = 'add to Watched';
const buttonLabelWatchedRemove = 'remove from Watched';
const buttonLabelQueuedAdd = 'add to Queue';
const buttonLabelQueueRemove = 'remove from Queue';

// actions with btn
function storageСheckWatched() {
  const film = searchLinks();
  const idCard = film.dataId.getAttribute('data-action'); 
  const movieStorageData = JSON.parse(localStorage.getItem(idCard)); 
  if (movieStorageData === null) {
    return;
  }
  if (movieStorageData[0].id === idCard && movieStorageData[0].librarySection === watched) {
    film.btnWatched.textContent = buttonLabelWatchedRemove;
  } else {
    film.btnWatched.textContent = buttonLabelWatchedAdd;
  }
}

function storageСheckQueue() {
  const film = searchLinks();
  const idCard = film.dataId.getAttribute('data-action'); 
  const movieStorageData = JSON.parse(localStorage.getItem(idCard)); 
  if (movieStorageData === null) {
    return;
  }
  if (movieStorageData[0].id === idCard && movieStorageData[0].librarySection === queue) {
    film.btnQueue.textContent = buttonLabelQueueRemove;
  } else {
    film.btnQueue.textContent = buttonLabelQueuedAdd;
  }
}


function addsWatched() {
  const film = searchLinks();
  let genresStrong = film.dataGenres.textContent;
  genresStrong = genresStrong.replace(/\s+/g, ' ').trim().split(' ').join(', ');

  const datalocalStorage = {
    id: film.dataId.getAttribute('data-action'),
    release_date: yearData,
    title: film.dataImg.getAttribute('alt'),
    poster_path: film.dataImg.getAttribute('src'),
      popularity: film.dataPopularity.textContent,
    original_title: film.dataOriginal.textContent,
    overview: film.dataOverview.textContent,
    librarySection: watched,
  };

  const keyStorage = datalocalStorage.id;
  if (film.btnWatched.textContent != buttonLabelWatchedRemove) {
    updateStorage(datalocalStorage, keyStorage);
  } else {
    deleteStoragData();
    film.btnWatched.textContent = buttonLabelWatchedAdd;
  }
  storageСheckWatched();
  storageСheckQueue();
}

function addsQueue() {
  const linsk = searchLinks();
  let genresStrong = linsk.dataGenres.textContent;
  genresStrong = genresStrong.replace(/\s+/g, ' ').trim().split(' ').join(', ');
  const datalocalStorage = {
    id: linsk.dataId.getAttribute('data-action'),
    release_date: yearData,
    title: linsk.dataImg.getAttribute('alt'),
    poster_path: linsk.dataImg.getAttribute('src'),
    popularity: linsk.dataPopularity.textContent,
    original_title: linsk.dataOriginal.textContent,
    genres: { name: genresStrong },
    overview: linsk.dataOverview.textContent,
    librarySection: queue,
  };

  const keyStorage = datalocalStorage.id;
  if (linsk.btnQueue.textContent != buttonLabelQueueRemove) {
    updateStorage(datalocalStorage, keyStorage);
  } else {
    deleteStoragData();
    linsk.btnQueue.textContent = buttonLabelQueuedAdd;
  }
  storageСheckQueue();
  storageСheckWatched();
}

function deleteStoragData() {
  const linsk = searchLinks();
  const idCard = linsk.dataId.getAttribute('data-action'); // id  в карточке
  if (
    linsk.btnWatched.textContent === buttonLabelWatchedRemove ||
    linsk.btnQueue.textContent === buttonLabelQueueRemove
  ) {
    localStorage.removeItem(idCard);
  }
}