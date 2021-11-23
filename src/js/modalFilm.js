
import modalFilmTmp from '../templates/modalFilm.hbs';
import ApiService from '../js/apiService.js';

const openModalEl = document.querySelector('.card__container');
const closeModalEl = document.querySelector('.js-close-modal');
const modalEl = document.querySelector('.js-modal');
const bodyEl = document.querySelector('body');
const modalFilmCardEl = document.querySelector('.js-film');

// open/close modal
openModalEl.addEventListener('click', onClick);


function onClick (event) {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG' && event.target.nodeName !== 'P') {
        return;
    }
    openModal ();  
}
  
function openModal () {
    modalEl.classList.remove('visually-hidden');
    if (!modalEl.classList.contains('visually-hidden')) {
        bodyEl.classList.add('overflow-hidden');
    } 
    closeModalEl.addEventListener('click', closeModal);
    modalEl.addEventListener('click', closeModal);
    window.addEventListener('keydown', closeModalByEsc);
}

function closeModal (event) {
    if (event.target == this) {
    modalEl.classList.add('visually-hidden');
    bodyEl.classList.remove('overflow-hidden');
    clearFilmCard();
    removeModalListener();
    }
    // console.log('my request:', modalEl);
    
}
  
function closeModalByEsc (event) {
    if (event.code === 'Escape') {
        modalEl.classList.add('visually-hidden');
        bodyEl.classList.remove('overflow-hidden');
        removeModalListener();
    }
};
    
function removeModalListener () {
    closeModalEl.removeEventListener('click', closeModal);
    modalEl.removeEventListener('click', closeModal);
    window.removeEventListener('keydown', closeModalByEsc);
  
};


// // render modal with film


let idFilm;

openModalEl.addEventListener('click', renderModal);


function renderModal(event) {
    idFilm = event.target.dataset.id;
    console.log('my request:', idFilm);

    const getInfoFilm = new ApiService();
    getInfoFilm.getMovieById(idFilm).then(renderFilmCard);        
        
} 
// // console.log('my request:', r)

function renderFilmCard(film) {
    modalFilmCardEl.insertAdjacentHTML('beforeend', modalFilmTmp(film));
};

function clearFilmCard() {
    modalFilmCardEl.innerHTML = '';
}