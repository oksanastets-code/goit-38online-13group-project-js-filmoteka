
import refs from './get-refs.js';
import modalFilmTmp from '../templates/modal-film.hbs';
import ApiService from './apiService.js';
import { upBtn } from './up-btn.js';



// open/close modal
refs.openModalEl.addEventListener('click', onClick);


function onClick (event) {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG' && event.target.nodeName !== 'P') {
        return;
    }
    openModal ();  
}
  
function openModal () {
    refs.modalEl.classList.remove('visually-hidden');
    if (!refs.modalEl.classList.contains('visually-hidden')) {
        refs.bodyEl.classList.add('overflow-hidden');
    } 
    refs.closeModalEl.addEventListener('click', closeModal);
    refs.modalEl.addEventListener('click', closeModal);
    window.addEventListener('keydown', closeModalByEsc);
    upBtn.classList.add('visually-hidden');
    
}

function closeModal (event) {
    if (event.target == this) {
        refs.modalEl.classList.add('visually-hidden');
        refs.bodyEl.classList.remove('overflow-hidden');
        upBtn.classList.remove('visually-hidden');
    clearFilmCard();
    removeModalListener();
    }
    // console.log('my request:', modalEl);
    
}
  
function closeModalByEsc (event) {
    if (event.code === 'Escape') {
        refs.modalEl.classList.add('visually-hidden');
        refs.bodyEl.classList.remove('overflow-hidden');
        
       
        removeModalListener();
    }
};
    
function removeModalListener () {
    refs.closeModalEl.removeEventListener('click', closeModal);
    refs.modalEl.removeEventListener('click', closeModal);
    window.removeEventListener('keydown', closeModalByEsc);
  
};



// // render modal with film


let idFilm;

refs.openModalEl.addEventListener('click', renderModal);


function renderModal(event) {
    idFilm = event.target.dataset.id;
    console.log('my request:', idFilm);

    const getInfoFilm = new ApiService();

    getInfoFilm.getMovieById(idFilm).then(renderFilmCard);

}




function renderFilmCard(film) {
    refs.modalFilmCardEl.insertAdjacentHTML('beforeend', modalFilmTmp(film));
};

function clearFilmCard() {
    refs.modalFilmCardEl.innerHTML = '';
}
