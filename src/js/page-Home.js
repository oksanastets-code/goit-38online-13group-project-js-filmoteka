import refs from './get-refs';
import API from './apiService.js';
import { renderMovieCard } from './render-movie-card';
import { renderPaginationTrendMovies } from './pagination';

refs.homeRef.addEventListener('click', onHomeClick);

const getMovies = new API();
getMovies.getTrendingMovies(1)
  .then(r => {
    renderMovieCard(r);
    renderPaginationTrendMovies(getMovies.getTotalPages(), 1, 20);
  } 
);


function onHomeClick(e) {
  e.preventDefault();
  refs.headerRef.classList.remove('library');
  refs.headerInputRef.classList.remove('visually-hidden');
  refs.headerBtnRef.classList.add('visually-hidden');
  refs.homeRef.classList.add('is-active-page');
  refs.libraryRef.classList.remove('is-active-page');

  getMovies.getTrendingMovies(1).then(renderMovieCard);
  renderPaginationTrendMovies(getMovies.totalPages , 1);
  // refs.notification.classList.add('visually-hidden');
}




