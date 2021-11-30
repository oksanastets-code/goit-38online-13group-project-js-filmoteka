import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import ApiService from '../js/apiService.js';
import {renderMovieCard} from './render-movie-card';
const paginateService = new ApiService();


export function renderPagination(request, totalItems, itemsPerPage, visiblePages, page, query) {
  const container = document.getElementById('pagination');
  const options = {
    totalItems: totalItems,
    itemsPerPage: itemsPerPage,
    visiblePages: visiblePages,
    page: page,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };
  const pagination = new Pagination(container, options);

  if (request === 'query') {
    pagination.on('afterMove', event => {
      const currentPage = event.page;
      paginateService.getMoviesByQueryPagination(currentPage, query).then(renderMovieCard);
      //   тимчасово закоментовано для тестування пагінації
      const element = document.getElementById('gallary');
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  } else {
    pagination.on('afterMove', event => {
      const currentPage = event.page;
      paginateService.getTrendingMovies(currentPage).then(renderMovieCard);
      //   тимчасово закоментовано для тестування пагінації
      const element = document.getElementById('gallary');
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
}