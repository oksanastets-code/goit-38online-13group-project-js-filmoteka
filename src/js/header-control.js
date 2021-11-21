import refs from './get-refs';

refs.homeRef.addEventListener('click', onHomeClick);
refs.libraryRef.addEventListener('click', onLibraryClick);

function onHomeClick(e) {
  e.preventDefault();
  refs.headerRef.classList.remove('library');
  refs.headerInputRef.classList.remove('visually-hidden');
  refs.headerBtnRef.classList.add('visually-hidden');  
}

function onLibraryClick(e) {
  e.preventDefault();
  refs.headerRef.classList.add('library');
  refs.headerInputRef.classList.add('visually-hidden');
  refs.headerBtnRef.classList.remove('visually-hidden');  
}