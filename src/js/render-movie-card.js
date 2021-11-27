import movieCardTmp from '../templates/movie-card.hbs';
import movieCardLibraryTmp from '../templates/movie-card-library.hbs';
import refs from './get-refs';
import loader from './spinner.js';


export function renderMovieCardLibrary(film) {
  loader.spinner.show();
  refs.cardsContainerRef.insertAdjacentHTML('beforeend', movieCardLibraryTmp(film));
  loader.spinner.close();
}

export function renderMovieCard(film) {
  loader.spinner.show();
  refs.cardsContainerRef.innerHTML = '';
  refs.cardsContainerRef.insertAdjacentHTML('beforeend', movieCardTmp(film));
  loader.spinner.close();
}