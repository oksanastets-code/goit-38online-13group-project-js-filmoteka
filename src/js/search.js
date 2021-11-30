import ApiService from '../js/apiService.js';
import refs from '../js/get-refs.js';
import {renderMovieCard} from './render-movie-card';
import { renderPaginationQuery, renderPagination } from './pagination';

const searchMovies = new ApiService(); 
// new examplar
// const searchMovies = new ApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.searchForm.addEventListener('click', onSearchClick);

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
function onSearchClick(e) {
  e.preventDefault();
 // Quard Clause
  if (e.target.nodeName !== 'use') {
    console.log(e.target.nodeName);
        return;
    } console.log(e.target.nodeName);
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
     // нижче змінено кількість кнопок
    // renderPagination('query', searchMovies.getTotalPages(), 20, 12, 1, query);
    renderPagination('query', searchMovies.getTotalPages(), 20, 5, 1, query);
    
  });
}
