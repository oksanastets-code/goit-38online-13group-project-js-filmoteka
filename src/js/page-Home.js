import refs from './get-refs';
import API from './apiService.js';
import { renderMovieCard } from './render-movie-card';
import { renderPaginationTrendMovies , renderPagination , usePagination } from './pagination';
// import { renderPaginationTrendMoviesForMobiles } from './pagination';
// import { renderPaginationTrendMoviesforTablet } from './pagination';
// import onScreenChange from './pagination';

refs.homeRef.addEventListener('click', onHomeClick);
refs.mediaTablet.addEventListener('change', onScreenChange);

function onScreenChange(e) {

   if (refs.mediaTablet.matches) {
    return 5;
  } return 9;
 
}
const getMovies = new API();
 getMovies.getTrendingMovies(1)
  .then(r => {
    renderMovieCard(r);
    // if (refs.mediaTablet.matches) {
    //  renderPagination('trends', getMovies.getTotalPages(), 20, 5, 1);
    // } renderPagination('trends', getMovies.getTotalPages(), 20, 9, 1);


    
    // нижче змінено кількість кнопок
    // renderPagination('trends', getMovies.getTotalPages(), 20, 12, 1);
    renderPagination('trends', getMovies.getTotalPages(), 20, onScreenChange(), 1);

    //  renderPagination('trends', getMovies.getTotalPages(), 20, onScreenChange, 1);
  } 
);

function onHomeClick(e) {
  e.preventDefault();
  refs.headerRef.classList.remove('library');
  refs.headerInputRef.classList.remove('visually-hidden');
  refs.headerBtnRef.classList.add('visually-hidden');
  refs.homeRef.classList.add('is-active-page');
  refs.libraryRef.classList.remove('is-active-page');
  refs.paginationContainer.classList.remove('visually-hidden');

  getMovies.getTrendingMovies(1)
    .then(r => {
      renderMovieCard(r);
       // нижче змінено кількість кнопок
      // renderPagination('trends', getMovies.getTotalPages(), 20, 12, 1);
      renderPagination('trends', getMovies.getTotalPages(), 20, 5, 1);

    } 
  );
}



 


