import { success } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

// function addtoWatched() {
//   if (!localStorage.getItem('watched')) {
//     localStorage.setItem('watched', JSON.stringify([]));
//   }
// }

// addtoWatched();

// function addtoQueue() {
//   if (!localStorage.getItem('queue')) {
//     localStorage.setItem('queue', JSON.stringify([]));
//   }
// }

// addtoQueue();

// second var

const refs = {
  btnwatched: document.querySelector('.btn__watched'),
  btnqueue: document.querySelector('.btn__queue'),
};

refs.btnwatched.addEventListener('click', putFilmToWatched);
refs.btnqueue.addEventListener('click', putFilmToQueue);

function addtoWatched() {
  const filmLocalStorage = localStorage.getItem('watched');
  if (filmLocalStorage !== null) {
    return JSON.parse(filmLocalStorage);
  }
  return [];
}

function putFilmToWatched(el) {
  let filmsToWatched = addtoWatched();
  const index = filmsToWatched.findIndex(e => e.id === el.id);

  if (index === -1) {
    filmsToWatched.push(el);
  } else {
    filmsToWatched.splice(index, 1);
  }

  localStorage.setItem(filmsToWatched, JSON.stringify(filmsToWatched));
}
function addtoQueue() {
  const filmLocalStorage = localStorage.getItem('queue');
  if (filmLocalStorage !== null) {
    return JSON.parse(filmLocalStorage);
  }
  return [];
}

function putFilmToQueue(el) {
  let filmsToQueue = addtoQueue();

  const index = filmsToQueue.findIndex(e => e.id === el.id);

  if (index === -1) {
    filmsToQueue.push(el);
  } else {
    filmsToQueue.splice(index, 1);
  }

  localStorage.setItem(this.filmsToQueue, JSON.stringify(filmsToQueue));
}

export default localStorage;
