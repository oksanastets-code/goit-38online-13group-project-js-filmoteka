import movieCardTmp from '../templates/movie-card.hbs';
import movieCardLibraryTmp from '../templates/movie-card-library.hbs';
import refs from './get-refs';

export function renderMovieCard(film) {
  refs.cardsContainerRef.innerHTML = '';
  refs.cardsContainerRef.insertAdjacentHTML('beforeend', movieCardTmp(film));
}
export function renderMovieCardLibrary(film) {
  refs.cardsContainerRef.insertAdjacentHTML('beforeend', movieCardLibraryTmp(film));
}