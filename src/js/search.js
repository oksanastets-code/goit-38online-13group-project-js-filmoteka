import ApiService from '../js/apiService.js';
import refs from '../js/get-refs.js';
import renderMovieCard from './render-movie-card';
import { getMovies } from './page-Home.js';

// new examplar
const searchMovies = new ApiService();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  // console.log('submit');
  clearCardsContainer();
  searchMovies.Query = e.currentTarget.elements.query.value;
  console.log(e.currentTarget.elements.query.value);
  
  // Verification on empty request
  if (!searchMovies.query.trim()) {
    getMovies.getTrendingMovies().then(renderMovieCard);
    refs.notification.classList.remove('visually-hidden');
    refs.searchIconEl.classList.add('visually-hidden');
    setTimeout(() => {
      refs.notification.classList.add('visually-hidden');
      refs.searchIconEl.classList.remove('visually-hidden');
    }, 2000);

    return;
  }
  // refs.notification.classList.add('visually-hidden');
   searchMovies.nullifyPage();

  onSearchMovies();
}
//  By start searching
function clearCardsContainer() {
  refs.cardsContainerRef.innerHTML = '';
}
function onSearchMovies() {
  searchMovies.getMoviesByQuery().then(data => {
    //   if nothing is found
    if (data.length === 0) {
      getMovies.getTrendingMovies().then(renderMovieCard);
      refs.notification.classList.remove('visually-hidden');
      refs.searchIconEl.classList.add('visually-hidden');
      setTimeout(() => {
        refs.notification.classList.add('visually-hidden');
        refs.searchIconEl.classList.remove('visually-hidden');
        window.location.reload(true);
      }, 2000);
      return;
    }
    renderMovieCard(data);
  });
}
