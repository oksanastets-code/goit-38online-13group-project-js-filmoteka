export default {
  homeRef: document.querySelector('.js-home'),
  libraryRef: document.querySelector('.js-library'),
  headerRef: document.querySelector('.js-header'),
  headerInputRef: document.querySelector('.js-header-input'),
  headerBtnRef: document.querySelector('.js-header-buttons'),
  cardsContainerRef: document.querySelector('.js-card-container'),

  input: document.querySelector('#theme-switch-toggle'),
  
  libraryQueueBtn: document.querySelector('.js-library-queue-btn'),
  libraryWatchedBtn: document.querySelector('.js-library-watched-btn'),

  // search
  headerInputField: document.querySelector('.js-input-field'),
  searchForm: document.querySelector('#search-form'),
  notification: document.querySelector('.header__notification'),
  notificationText: document.querySelector('.header__notification--text'),
  searchIconEl: document.querySelector('.js-search-icon'),

  // modal
  openModalEl: document.querySelector('.card__container'),
  closeModalEl: document.querySelector('.js-close-modal'),
  modalEl: document.querySelector('.js-modal'),
  bodyEl: document.querySelector('body'),
  modalFilmCardEl: document.querySelector('.js-film'),

  //pagination
 pagination: document.querySelector('.pagination'),
}