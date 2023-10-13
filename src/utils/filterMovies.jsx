import {
  ADDED_MOVIES_AMOUNT,
  MOVIES_AMOUNT,
  SCREEN_SIZE,
  SHORTMOVIES_DURATION,
} from './constants';

function filterMovies(movies, keyword, isShort) {
  const checkInclude = (item) => {
    return item.toLowerCase().includes(keyword.toLowerCase());
  };

  const filteredByKeywordMovies = movies.filter((movie) => {
    return checkInclude(movie.nameRU) || checkInclude(movie.nameEN);
  });

  if (isShort) {
    const shortMovies = filteredByKeywordMovies.filter((movie) => {
      return movie.duration <= SHORTMOVIES_DURATION;
    });
    return shortMovies;
  } else {
    return filteredByKeywordMovies;
  }
}

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

export { filterMovies, countInitialMovies, countAddedMovies };
