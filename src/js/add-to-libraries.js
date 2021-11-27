import refs from './get-refs.js';

let queueList = [];
let watchedList = [];

refs.modalEl.addEventListener('click', onModalClick)

function onModalClick(e) {
  let movieId = refs.modalEl.getAttribute('id');
  if (e.target.dataset.name === 'queue') {  
    onQueueBtnClick(movieId, e.target);
  }
  if (e.target.dataset.name === 'watched') {
    onWatchedBtnClick(movieId, e.target)   
  }
}

function onQueueBtnClick(id, btn) {
  if (!(localStorage.getItem('queueList'))) {
    addToQueueList(id, btn);
    return;
  };
  queueList = JSON.parse(localStorage.getItem('queueList'));
    if (queueList.includes(id)) {
      removeFromQueueList(id, btn);
    } else {
      addToQueueList(id, btn);
    }
}

function addToQueueList(id, btn) {
  queueList.push(id);
  localStorage.setItem('queueList', JSON.stringify(queueList));
  btn.textContent = 'remove from queue';
}

function removeFromQueueList(id, btn) {
  queueList.pop(id);
  localStorage.setItem('queueList', JSON.stringify(queueList));
  btn.textContent = 'add to queue';
}

function onWatchedBtnClick(id, btn) {
  if (!(localStorage.getItem('watchedList'))) {
    addToWatchedList(id, btn);
    return;
  };
  queueList = JSON.parse(localStorage.getItem('watchedList'));
    if (watchedList.includes(id)) {
      removeFromWatchedList(id, btn);
    } else {
      addToWatchedList(id, btn);
    }
}

function addToWatchedList(id, btn) {
  watchedList.push(id);
  localStorage.setItem('watchedList', JSON.stringify(watchedList));
  btn.textContent = 'remove from Watched';
}

function removeFromWatchedList(id, btn) {
  watchedList.pop(id);
  localStorage.setItem('watchedList', JSON.stringify(watchedList));
  btn.textContent = 'add to Watched';
}
