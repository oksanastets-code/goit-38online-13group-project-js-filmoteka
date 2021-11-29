import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import ApiService from '../js/apiService.js';
import { renderMovieCard } from './render-movie-card';
import refs from './get-refs';
const paginateService = new ApiService();

// by screen change, @media
refs.mediaTablet.addEventListener('change', onScreenChange);
let visibleButtons = 5;
export function onScreenChange() {

    if (refs.mediaTablet.matches) {
        console.log(5);
        visibleButtons = 5;
    } else {
        console.log(9);
        visibleButtons = 9;
    }
    return visibleButtons;
    //refs.mediaTablet.matches  ? visibleButtons = 5 : visibleButtons = 9;
}


export function renderPaginationTrendMovies(totalItems, page, itemsPerPage, visibleButtons) {

    const options = {
      totalItems: totalItems,
      itemsPerPage: itemsPerPage,
        // visiblePages: visibleButtons,
        visiblePages: 5,
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
    
  const paginationMobile = new Pagination(refs.paginationMobile, options);
    const paginationTablet = new Pagination(refs.paginationTablet, options);
    

    if (refs.mediaTablet.matches) {
        paginationMobile.on('afterMove', (event) => {
      const currentPage = event.page;
      paginateService.getTrendingMovies(currentPage).then(renderMovieCard);;      
    });
    }    
    paginationTablet.on('afterMove', (event) => {
      const currentPage = event.page;
      paginateService.getTrendingMovies(currentPage).then(renderMovieCard);;      
    });
}

export function renderPaginationTrendMoviesforTablet(totalItems, page, itemsPerPage) {
//   const container = document.getElementById('pagination-mobile');
  const options = {
    totalItems: totalItems,
    itemsPerPage: itemsPerPage,
    visiblePages: 9,
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
    
//   const paginationMobile = new Pagination(refs.paginationMobile, options);
  const paginationTablet = new Pagination(refs.paginationTablet, options);

    // paginationMobile.on('afterMove', (event) => {
    //   const currentPage = event.page;
    //   paginateService.getTrendingMovies(currentPage).then(renderMovieCard);;      
    // });
    paginationTablet.on('afterMove', (event) => {
      const currentPage = event.page;
      paginateService.getTrendingMovies(currentPage).then(renderMovieCard);;      
    });
}



export function renderPaginationQuery(totalItems, page, itemsPerPage, query) {

//   const container = document.getElementById('pagination');
  const options = {
    totalItems: totalItems,
    itemsPerPage: itemsPerPage,
    visiblePages: 5,
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
    
  const pagination = new Pagination(refs.paginationMobile, options);

  getQueryForPagination(query);

  function getQueryForPagination(query) {
     pagination.on('afterMove', (event) => {
      const currentPage = event.page;
      paginateService.getMoviesByQueryPagination(currentPage, query).then(renderMovieCard);;      
    });   
  }
}
