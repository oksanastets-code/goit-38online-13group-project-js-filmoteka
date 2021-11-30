import refs from './get-refs.js';
import { langText } from './localization.js';

let queueList = [];
let watchedList = [];

refs.modalEl.addEventListener('click', onModalClick);

function onModalClick(e) {
  let movieId = refs.modalEl.getAttribute('id');
  if (e.target.dataset.name === 'queue') {
    onQueueBtnClick(movieId, e.target);
  }
  if (e.target.dataset.name === 'watched') {
    onWatchedBtnClick(movieId, e.target);
  }
}

function onQueueBtnClick(id, btn) {
  if (!localStorage.getItem('queueList')) {
    addToQueueList(id, btn);
    return;
  }
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
  btn.textContent = langText('remove from queue', 'удалить из очереди', 'видалити з черги');
  btn.style.backgroundColor = '#ff6b01';
  btn.style.color = '#ffffff';
  btn.style.borderColor = '#ff6b01';
}

function removeFromQueueList(id, btn) {
  queueList.pop(id);
  localStorage.setItem('queueList', JSON.stringify(queueList));
  btn.textContent = langText('add to queue', 'добавить в очередь', 'додати до черги');
  btn.style.backgroundColor = '#ffffff';
  btn.style.color = '#000000';
  btn.style.borderColor = '#000000';
}

function onWatchedBtnClick(id, btn) {
  if (!localStorage.getItem('watchedList')) {
    addToWatchedList(id, btn);
    return;
  }
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
  btn.textContent = langText(
    'remove from watched',
    'удалить из просмотренного',
    'видалити з перегляду',
  );
  btn.style.backgroundColor = '#ff6b01';
  btn.style.color = '#ffffff';
  btn.style.borderColor = '#ff6b01';
}

function removeFromWatchedList(id, btn) {
  watchedList.pop(id);
  localStorage.setItem('watchedList', JSON.stringify(watchedList));
  btn.textContent = langText(
    'add to watched',
    'добавить к просмотренным',
    'додати до переглянутого',
  );
  btn.style.backgroundColor = '#ffffff';
  btn.style.color = '#000000';
  btn.style.borderColor = '#000000';
}
