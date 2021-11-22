import refs from './get-refs';
import API from './apiService.js';
import renderMovieCard from './render-movie-card';

refs.homeRef.addEventListener('click', onHomeClick);

const getMovies = new API();

getMovies.getTrendingMovies().then(renderMovieCard);

function onHomeClick(e) {
  e.preventDefault();
  refs.headerRef.classList.remove('library');
  refs.headerInputRef.classList.remove('visually-hidden');
  refs.headerBtnRef.classList.add('visually-hidden');
  refs.homeRef.classList.add('is-active-page');
  refs.libraryRef.classList.remove('is-active-page');
}





