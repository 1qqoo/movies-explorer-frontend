import { MOVIES_URL } from './MoviesApi';
import { SCREEN_SIZE, MOVIES_AMOUNT, ADDED_MOVIES_AMOUNT } from './constants';

const correctMovieFormat = (movies) => {
  return movies.map((movie) => {
    return {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${MOVIES_URL}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${MOVIES_URL}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };
  });
};

function durationFormat(time) {
  return `${Math.floor(time / 60)}ч ${time % 60}м`;
}

// Количество карточек в зависимости от ширины
function countInitialMovies(width) {
  let moviesAmount;
  if (width < SCREEN_SIZE.M) moviesAmount = MOVIES_AMOUNT.S;
  if (width >= SCREEN_SIZE.M) moviesAmount = MOVIES_AMOUNT.M;
  if (width >= SCREEN_SIZE.L) moviesAmount = MOVIES_AMOUNT.L;
  return moviesAmount;
}

function countAddedMovies(width) {
  let addAmount;
  if (width < SCREEN_SIZE.L) addAmount = ADDED_MOVIES_AMOUNT.S;
  if (width >= SCREEN_SIZE.L) addAmount = ADDED_MOVIES_AMOUNT.L;
  return addAmount;
}

export {
  durationFormat,
  countInitialMovies,
  countAddedMovies,
  correctMovieFormat,
};
