import pageButtonsTeml from './templates/pagination-mobile.hbs';
// const pageNumber = document.querySelector('.pagination-number');
const buttonsContainer = document.querySelector('.pagination-buttons');

const menuMarkup = getPageButtonsMarkup(menu);
buttonsContainer.insertAdjacentHTML('afterbegin', menuMarkup);

function getPageButtonsMarkup() {
    return pageButtonsTeml();
}