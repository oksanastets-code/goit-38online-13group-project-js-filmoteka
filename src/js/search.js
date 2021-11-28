import ApiService from '../js/apiService.js';
import refs from '../js/get-refs.js';
import {renderMovieCard} from './render-movie-card';
import { getMovies } from './page-Home.js';
// import loader from './spinner.js';

// new examplar
const searchMovies = new ApiService();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  searchMovies.Query = e.currentTarget.elements.query.value;
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
   searchMovies.nullifyPage();

  onSearchMovies(e);
}

function onSearchMovies(e) {
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
  });
}
