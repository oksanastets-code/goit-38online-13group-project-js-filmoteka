import ApiService from '../js/apiService.js';
import refs from '../js/get-refs.js';
import {renderMovieCard} from './render-movie-card';
import { renderPaginationQuery, renderPagination } from './pagination';

// import loader from './spinner.js';
  const searchMovies = new ApiService(); 
// new examplar
// const searchMovies = new ApiService();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
 
  searchMovies.Query = e.currentTarget.elements.query.value;
  let query = e.currentTarget.elements.query.value;
  // Verification on empty request
  if (!searchMovies.query.trim()) {
    refs.notificationText.style.opacity = '1';
    refs.searchIconEl.classList.add('visually-hidden');
    setTimeout(() => {
      refs.headerInputField.value = '';
      refs.notificationText.style.opacity = '0';
      refs.searchIconEl.classList.remove('visually-hidden');
    }, 2000);
    return;
  }

  onSearchMovies(e, query);
}

function onSearchMovies(e, query) {
  e.preventDefault();
  searchMovies.getMoviesByQuery().then(data => {
    //   if nothing is found
    if (data.length === 0) {
      refs.notificationText.style.opacity = '1';
      refs.searchIconEl.classList.add('visually-hidden');
      setTimeout(() => {
        refs.headerInputField.value = '';
        refs.notificationText.style.opacity = '0';
        refs.searchIconEl.classList.remove('visually-hidden');
      }, 2000);
      return;
    }
    renderMovieCard(data);
    refs.headerInputField.value = '';
    renderPagination('query', searchMovies.getTotalPages(), 20, 12,1, query);

  });
}
