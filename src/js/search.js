import ApiService from '../js/apiService.js';
import refs from '../js/get-refs.js';
import renderMovieCard from './render-movie-card';

// new examplar
const searchMovies = new ApiService();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDefault();
    console.log('submit');
  clearCardsContainer();
    searchMovies.Query = e.currentTarget.elements.query.value;
    console.log(e.currentTarget.elements.query.value);
  // Verification on empty request
//   if (!searchApiService.query.trim()) {
//     myError('Please, enter keyword!');
//     // reloadOnError();
//     return;
//   }
//   loadMoreBtn.show();
  searchMovies.nullifyPage();

  onSearchMovies();
}
//  By start searching
function clearCardsContainer() {
  refs.cardsContainerRef.innerHTML = '';
}
function onSearchMovies() {
//   loadMoreBtn.disable();
  searchMovies
    .getMoviesByQuery()
    .then(data => {
    //   if (data.length === 0) {
    //     myError('Wrong request!');
    //     loadMoreBtn.hide();
    //     reloadOnError();
    //     return;
    //   }
      renderMovieCard(data);
      // when it is a last picture in collection
    //   if (articles.length < 12) {
    //     loadMoreBtn.hide();
    //     }
        // loadMoreBtn.enable();
    })
    // .then(handlerScroll)
    // .catch((error)=> 'error');
}
