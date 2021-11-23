import refs from './get-refs';
import API from './apiService.js';
import renderMovieCard from './render-movie-card';

refs.libraryRef.addEventListener('click', onLibraryClick);

const getMovies = new API();

function onLibraryClick(e) {
  e.preventDefault();
  refs.headerRef.classList.add('library');
  refs.headerInputRef.classList.add('visually-hidden');
  refs.headerBtnRef.classList.remove('visually-hidden');
  refs.homeRef.classList.remove('is-active-page');
  refs.libraryRef.classList.add('is-active-page');
}