import movieCardTmp from '../templates/movie-card.hbs';
import refs from './get-refs';
import loader from './spinner.js';

export default function renderMovieCard(film) {
  loader.spinner.show();
  refs.cardsContainerRef.insertAdjacentHTML('beforeend', movieCardTmp(film));
  loader.spinner.close();
}