import movieCardTmp from '../templates/movie-card.hbs';
import refs from './get-refs';

export default function renderMovieCard(film) {
  refs.cardsContainerRef.insertAdjacentHTML('beforeend', movieCardTmp(film));
}