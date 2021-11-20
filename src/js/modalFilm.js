import modalFilmTmp from '../templates/modalFilm.hbs';

// modal open

const openModalEl = document.querySelector('.card__container');
const closeModalEl = document.querySelector('.js-close-modal');
const modalEl = document.querySelector('.js-modal');
const bodyEl = document.querySelector('body');

openModalEl.addEventListener('click', onClick);


function onClick (event) {
    event.preventDefault();
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

function closeModal () {
    modalEl.classList.add('visually-hidden');
    bodyEl.classList.remove('overflow-hidden');
    removeModalListener();
}
  
function closeModalByEsc (event) {
    if (event.code === 'Escape') {
    closeModal ();
    }
};
  
  
function removeModalListener () {
    closeModalEl.removeEventListener('click', closeModal);
    modalEl.removeEventListener('click', closeModal);
    window.removeEventListener('keydown', closeModalByEsc);
  
};




// console.log('my request:', );