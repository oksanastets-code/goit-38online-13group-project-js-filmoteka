import './sass/main.scss';
import './js/modalTeam.js';
import './js/spinner';
import './js/header-control.js';



// черновик запросов
import API from './js/apiService.js';
import imageCardTmp from './templates/movie-card.hbs';

const getFilm = new API();



const imagesGallery = document.querySelector('.card__container');


getFilm.fetchImages().then(renderImageCard).then(r => console.log(r));


function renderImageCard(film) {
  imagesGallery.insertAdjacentHTML('beforeend', imageCardTmp(film));
}
// черновик запросов