import refs from './get-refs';
import API from './apiService.js';
import { renderMovieCard } from './render-movie-card';
import { renderPaginationTrendMovies } from './pagination';
// import { renderPaginationTrendMoviesForMobiles } from './pagination';
// import { renderPaginationTrendMoviesforTablet } from './pagination';
import onScreenChange from './pagination';
refs.homeRef.addEventListener('click', onHomeClick);

const getMovies = new API();

 getMovies.getTrendingMovies(1)
  .then(r => {
    renderMovieCard(r);
    // if (refs.mediaTablet.matches) {
    //   renderPaginationTrendMoviesForMobiles(getMovies.getTotalPages(), 1, 20)
    // } renderPaginationTrendMoviesforTablet(getMovies.getTotalPages(), 1, 20);

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
  refs.paginationMobile.classList.remove('visually-hidden');
  refs.paginationTablet.classList.remove('visually-hidden');

  getMovies.getTrendingMovies(1)
    .then(r => {
      renderMovieCard(r);
      renderPaginationTrendMovies(getMovies.getTotalPages(), 1, 20, refs.mediaTablet.addEventListener('change', onScreenChange));
    } 
  );
}



 


