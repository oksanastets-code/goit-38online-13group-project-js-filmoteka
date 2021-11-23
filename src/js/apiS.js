// ЧЕРНОВИК


//   getMovieById(id) {
//     return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
//       .then(r => r.json())
//       .then(( results ) => {      
//         return results;});//  <-render card  without genres



//         // .then(( results ) => {      
//         //   return this.getGenres()//<-- array of genres id+genre
//         //     .then(r => {
//         //       return r.map(film => ({
//         //         ...film,
//         //         genre_ids: this.getGenreName(r, film.genre_ids)
//         //       })
//         //       );
//         //    });
//         // });

//           // .then(r => {
//           //   return console.log(results);
//             // .map(film => ({
//             //   ...film,
//             //   genre_ids: this.getGenreName(r, film.genre_ids)
//             // })
//             // );
//         //  });
//     //   ;
//   }

//   // getMovieById(id) {
//   //   return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
//   //     .then(r => r.json())
//   //     .then(({ results }) => {      
//   //       return this.getGenres()
//   //         .then(r => {
//   //           return results.map(film => ({
//   //             ...film,
//   //             genre_ids: this.getGenreName(r, film.genre_ids)
//   //           })
//   //           );
//   //        });
//   //     });
// //   }

// getGenres() {
//     return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
//       .then(r => r.json())
//       .then(({ genres }) => {
//         return genres;
//       });
// }

//   getGenreName(genres, numbers) {
//     const genreNames = [];
//     let genreNamesList = '';
//     numbers.forEach(number => {
//       genres.find(genre => {
//         if (number === genre.id) {
//           genreNames.push(genre.name);
//         }
//       });
//     });
//     genreNamesList = genreNames.join(', ');
//     return genreNamesList ;
//   }

