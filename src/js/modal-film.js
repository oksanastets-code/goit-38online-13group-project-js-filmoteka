
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
    openModal();
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

  getInfoFilm.getMovieById(idFilm).then(r => {
      renderFilmCard(r);
      let watchedBtnEl = document.querySelector('button[data-name="watched"]');
      let queueBtnEl = document.querySelector('button[data-name="queue"]');
      checkQueueBtn(queueBtnEl, idFilm);
      checkWatchedBtn(watchedBtnEl, idFilm);
      refs.modalEl.setAttribute('id', idFilm);
    }
  );


}



function renderFilmCard(film) {
    refs.modalFilmCardEl.insertAdjacentHTML('afterbegin', modalFilmTmp(film));
};

function clearFilmCard() {
    refs.modalFilmCardEl.innerHTML = '';
}


// check buttons

function checkQueueBtn(btn, id) {
    if (!(localStorage.getItem('queueList'))) return;
    let  queueList = JSON.parse(localStorage.getItem('queueList'));
    if (queueList.includes(id)) {
        btn.textContent = 'remove from queue';
    } else {
        btn.textContent = 'add to queue';
    }
}
function checkWatchedBtn(btn, id) {
    if (!(localStorage.getItem('watchedList'))) return;
    let  queueList = JSON.parse(localStorage.getItem('watchedList'));
    if (queueList.includes(id)) {
        btn.textContent = 'remove from watched';
    } else {
        btn.textContent = 'add to watched';
    }
}