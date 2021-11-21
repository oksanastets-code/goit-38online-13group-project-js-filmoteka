
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
    removeModalListener();}
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

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// openModalEl.addEventListener('click', renderModal);




// // function renderModal(event) {
// //     const idQ = event.target.dataset.id;
// //     console.log('my request:', idQ);

// //     const getFilm = new ApiService();
// //     getFilm.fetchImages()
// //         .then((r.filter(x)) => {x.id === idQ}; )
// //          renderFilmCard;
// //            {
        
// // } 
// // console.log('my request:', r)

// function renderFilmCard(film) {
//     modalFilmCardEl.insertAdjacentHTML('beforeend', modalFilmTmp(film));
// };