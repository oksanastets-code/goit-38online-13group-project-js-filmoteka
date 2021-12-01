import refs from './get-refs';
import API from './apiService.js';
import {renderMovieCardLibrary} from './render-movie-card';

refs.libraryRef.addEventListener('click', onLibraryClick);
refs.libraryQueueBtn.addEventListener('click', onQueueBtnClick);
refs.libraryWatchedBtn.addEventListener('click', onWatchedBtnClick);

const getMovies = new API();
let queueList = [];
let watchedList = [];

function onLibraryClick(e) {
  e.preventDefault();
  refs.headerRef.classList.add('library');
  refs.headerInputRef.classList.add('visually-hidden');
  refs.headerBtnRef.classList.remove('visually-hidden');
  refs.homeRef.classList.remove('is-active-page');
  refs.libraryRef.classList.add('is-active-page');

  onQueueBtnClick();
}

export function onQueueBtnClick() {
  refs.libraryQueueBtn.classList.add('is-active-btn');
  refs.libraryWatchedBtn.classList.remove('is-active-btn');
  refs.paginationContainer.classList.add('visually-hidden');
  refs.cardsContainerRef.innerHTML = '';
  getQueueList().forEach(movie => {
    getMovies.getMovieByIdForLibrary(movie)
      .then(renderMovieCardLibrary);
  });
}

export function onWatchedBtnClick() {
  refs.libraryWatchedBtn.classList.add('is-active-btn');
  refs.libraryQueueBtn.classList.remove('is-active-btn');
  refs.cardsContainerRef.innerHTML = '';
  getWatchedList().forEach(movie => {
    getMovies.getMovieByIdForLibrary(movie)
      .then(renderMovieCardLibrary);
  });
}

function getQueueList() {
    if (!(localStorage.getItem('queueList')) || JSON.parse(localStorage.getItem('queueList')).length === 0 ) {
      console.log('empty');
      return [];
    } else {
      return queueList = JSON.parse(localStorage.getItem('queueList'));
    }
}

function getWatchedList() {
    if (!(localStorage.getItem('watchedList')) || JSON.parse(localStorage.getItem('watchedList')).length === 0 ) {
      console.log('empty');
      return [];
    } else {
      return watchedList = JSON.parse(localStorage.getItem('watchedList'));
    }
}