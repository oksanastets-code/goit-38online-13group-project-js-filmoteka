const API_KEY = 'bffba07cef2d165abd193feceb46d279';

const BASE_URL =  'https://api.themoviedb.org/3';

export default class ImagesApiService {
  constructor() {
    this.query = '';
    this.page = 1;
    this.firstArrivedElement = null;

  }
  fetchImages() {

    return fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
      .then(r => r.json())
       .then(({ results }) => {
         console.log(results);
         return results;
       });
  }
    
  incrementPage() {
    this.page += 1;
  }

  nullifyPage() {
    this.page = 1;
  }

  getQuery() {
    return this.query;
  }
  setQuery(newQuery) {
    this.query = newQuery;
  }

  getFirstElement() {
    return this.firstArrivedElement;
  }
}