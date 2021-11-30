const API_KEY = 'bffba07cef2d165abd193feceb46d279';

const BASE_URL = 'https://api.themoviedb.org/3';

import { getFromLocalStorage } from './localStorageLang';
import { langText } from './localization.js';

let langs = getFromLocalStorage('lang');

export default class moviesApiService {
  constructor() {
    this.query = '';
    this.totalPages = 1;
  }

  getTrendingMovies(page) {
    return fetch(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=${langs}&page=${page}`)
      .then(r => r.json())
      .then(r => {
        this.setTotalPages(r.total_results);
        return r;
      })
      .then(({ results }) => {
          return this.getGenres().then(r => {
          return results.map(film => ({
            ...film,
            // title: (film.title.length > 35) ? film.title.slice(0, 35) : film.title,
            title: film.title ? this.getCuttedName(film.title) : '',
            name: film.name ? this.getCuttedName(film.name) : '',
            release_date: film.release_date ? this.getCuttedDate(film.release_date) : '',
            first_air_date: film.first_air_date ? this.getCuttedDate(film.first_air_date) : '',
            genre_ids: film.genre_ids ? this.getGenreName(r, film.genre_ids) : [],
          }));
        });
      });
  }
  getMovieById(id) {
    return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${langs}`)
      .then(r => r.json())
      .then(({ ...results }) => { 
        results.genres = results.genres ? results.genres.map(genre => genre.name).join(', ') : [];
        return results;
      });
  }

  getMovieByIdForLibrary(id) {
    return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${langs}`)
      .then(r => r.json())
      .then(({ ...results }) => {
        results.release_date = results.release_date ? this.getCuttedDate(results.release_date) : '';
        (results.title = results.title ? this.getCuttedName(results.title) : ''),
          (results.genres = results.genres ? this.getGenreNameForLibrary(results.genres) : []);
        return results;
      });
  }

  getMoviesByQuery(page) {
    return fetch(
      `${BASE_URL}/search/movie?query=${this.query}&api_key=${API_KEY}&page=${page}&language=${langs}`,
    )
      .then(r => r.json())
      .then(r => {
        this.setTotalPages(r.total_results);
        return r;
      })
      .then(({ results }) => {
        return this.getGenres().then(r => {
          return results.map(film => ({
            ...film,
            title: film.title ? this.getCuttedName(film.title) : '',
            name: film.name ? this.getCuttedName(film.name) : '',
            release_date: film.release_date ? film.release_date.slice(0, 4) : '',
            first_air_date: film.first_air_date ? film.first_air_date.slice(0, 4) : '',
            genre_ids: film.genre_ids ? this.getGenreName(r, film.genre_ids) : [],
          }));
        });
      });
  }

  getMoviesByQueryPagination(page, query) {
    return fetch(
      `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&page=${page}&language=${langs}`,
    )
      .then(r => r.json())
      .then(r => {
        this.setTotalPages(r.total_results);
        return r;
      })
      .then(({ results }) => {
        return this.getGenres().then(r => {
          return results.map(film => ({
            ...film,
            title: film.title ? this.getCuttedName(film.title) : '',
            name: film.name ? this.getCuttedName(film.name) : '',
            release_date: film.release_date ? film.release_date.slice(0, 4) : '',
            first_air_date: film.first_air_date ? film.first_air_date.slice(0, 4) : '',
            genre_ids: film.genre_ids ? this.getGenreName(r, film.genre_ids) : [],
          }));
        });
      });
  }

  getGenres() {
    return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${langs}`)
      .then(r => r.json())
      .then(({ genres }) => {
        return genres;
      });
  }

  getCuttedDate(string) {
    let cuttedDate;
    cuttedDate = string.slice(0, 4);
    return cuttedDate;
    // console.log(string);
  }

  getCuttedName(string) {
    let cuttedName;
    // console.log(string.length);
    cuttedName = string.length <= 35 ? string : string.slice(0, 35) + '...';
    return cuttedName;
    // console.log(string);
  }

  getGenreName(genres, numbers) {
    const genreNames = [];
    let genreNamesList = '';

    numbers.forEach(number => {
      genres.find(genre => {
        if (number === genre.id) {
          genreNames.push(genre.name);
          if (genreNames.length > 3) {
            genreNames.splice(2, 2, langText('Other', 'Другие', 'Інші'));
            return;
          }
        }
      });
    });
    genreNamesList = genreNames.join(', ');
    return genreNamesList;
  }

  getGenreNameForLibrary(genresList) {
    let genres = genresList.map(genre => genre.name);
    if (genres.length > 3) {
      console.log('ddfwfwef', genres);
      genres.splice(2, 2, langText('Other', 'Другие', 'Інші'));
      console.log('ddfwfwef', genres);
      return genres;
    }
    return genres;
  }
  setTotalPages(totalPages) {
    this.totalPages = totalPages;
  }

  getTotalPages() {
    return this.totalPages;
  }

  get Query() {
    return this.query;
  }

  set Query(newQuery) {
    this.query = newQuery;
  }
}
