import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const API_KEY = 'bffba07cef2d165abd193feceb46d279';

const BASE_URL = 'https://api.themoviedb.org/3';

function getTotalItems() {
    return fetch(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`)
        .then(r => r.json());
   
}
function renderPaginationTrendMovies(totalItems) {
  const container = document.getElementById('pagination');
  const options = {
    totalItems,
    // itemsPerPage: 18,
    visiblePages: 9,
    page: 1,
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
    pagination.on('afterMove', (event) => {
     const currentPage = event.page;
     console.log(currentPage);
});
}
getTotalItems()
    .then(data => {
        renderPaginationTrendMovies(data.total_pages);
        console.log(data.total_pages);
    });