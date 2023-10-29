import { useState } from 'react';
import useResize from '../../hooks/useResize';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import {
  ADDED_MOVIES_AMOUNT,
  MOVIES_AMOUNT,
  SCREEN_SIZE,
} from '../../utils/constants';

const MoviesCardList = ({
  movies,
  onToggleSave,
  onDeleteSave,
  checkSavedMovies,
  searchQuery,
  shortFilm,
  searched,
}) => {
  const screenWidth = useResize();
  let cardsToShow;

  if (screenWidth >= SCREEN_SIZE.L) {
    cardsToShow = MOVIES_AMOUNT.L;
  } else if (screenWidth >= SCREEN_SIZE.M) {
    cardsToShow = MOVIES_AMOUNT.M;
  } else {
    cardsToShow = MOVIES_AMOUNT.S;
  }

  const [visibleCards, setVisibleCards] = useState(cardsToShow);

  const filteredMovies = searched
    ? movies
        .filter((movie) => {
          const movieNameRU = (movie.nameRU || '').toLowerCase();
          const movieNameEN = (movie.nameEN || '').toLowerCase();

          const query = searchQuery || '';

          const includesSearchQuery =
            movieNameRU.includes(query.toLowerCase()) ||
            movieNameEN.includes(query.toLowerCase());

          return includesSearchQuery && (!shortFilm || movie.duration <= 40);
        })
        .slice(0, visibleCards)
    : [];

  const loadMoreCards = () => {
    let newVisibleCards;

    if (screenWidth >= SCREEN_SIZE.L) {
      newVisibleCards = visibleCards + ADDED_MOVIES_AMOUNT.L;
    } else if (screenWidth >= SCREEN_SIZE.M) {
      newVisibleCards = visibleCards + ADDED_MOVIES_AMOUNT.M;
    } else {
      newVisibleCards = visibleCards + ADDED_MOVIES_AMOUNT.S;
    }
    setVisibleCards(newVisibleCards);
  };

  const isLoadMoreVisible = visibleCards === filteredMovies.length;

  return (
    <section className="movies-cards">
      {searched && filteredMovies.length === 0 ? (
        <p>Поиск не дал результатов</p>
      ) : (
        <ul className="movies-cards__list">
          {filteredMovies.map((movie) => (
            <MoviesCard
              onDeleteSave={onDeleteSave}
              onToggleSave={onToggleSave}
              movie={movie}
              key={movie._id || movie.movieId}
              checkSavedMovies={checkSavedMovies}
            />
          ))}
        </ul>
      )}

      {isLoadMoreVisible && (
        <button
          type="button"
          className="movies-cards__add-button"
          onClick={loadMoreCards}
        >
          Ещё
        </button>
      )}
    </section>
  );
};

export default MoviesCardList;
