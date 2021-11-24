const API_KEY = 'bffba07cef2d165abd193feceb46d279';

const BASE_URL =  'https://api.themoviedb.org/3';

export default class moviesApiService {
  constructor() {
    this.query = '';
    this.page = 1;

  }
  getTrendingMovies() {
    return fetch(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`)
      .then(r => r.json())
      .then(({ results }) => {      
        return this.getGenres()
          .then(r => {
            return results.map(film => ({
              ...film,
              genre_ids: this.getGenreName(r, film.genre_ids)
            })
            );
         });
      });
  }

  getMovieById(id) {
    return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
      .then(r => r.json())
      .then(({ ...results } ) => {
         results.genres = results.genres.map(genre => genre.name);
         return results;       
      });
  }

  getMoviesByQuery() {
    return fetch(`${BASE_URL}/search/movie?query=${this.query}&api_key=${API_KEY}`)
      .then(r => r.json())
      .then(({ results }) => {      
        return this.getGenres()
          .then(r => {
            return results.map(film => ({
              ...film,
              genre_ids: this.getGenreName(r, film.genre_ids)
            })
            );
         });
      });
}

  getGenres() {
    return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
      .then(r => r.json())
      .then(({ genres }) => {
        return genres;
      });
  }

  getGenreName(genres, numbers) {
    const genreNames = [];
    let genreNamesList = '';
    numbers.forEach(number => {
      genres.find(genre => {
        if (number === genre.id) {
          genreNames.push(genre.name);
          if (genreNames.length > 3) {
            genreNames.splice(2, 2, 'other');
            return;
          }
        }
      });
    });
    genreNamesList = genreNames.join(', ');
    return genreNamesList ;
  }


  incrementPage() {
    this.page += 1;
  }

  nullifyPage() {
    this.page = 1;
  }

  get Query() {
    return this.query;
  }
  set Query(newQuery) {
    this.query = newQuery;
  }
}