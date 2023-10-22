import { useState } from 'react';
import useResize from '../../hooks/useResize';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({
  movies,
  searchQuery,
  shortFilm,
  searched,
  onToggleSave,
  onDeleteSave,
  checkSavedMovies,
}) => {
  const screenWidth = useResize();
  let cardsToShow;

  if (screenWidth >= 1280) {
    cardsToShow = 16;
  } else if (screenWidth >= 768) {
    cardsToShow = 8;
  } else {
    cardsToShow = 5;
  }

  const [visibleCards, setVisibleCards] = useState(cardsToShow);

  const filteredMovies = searched
    ? movies
        .filter((movie) => {
          const movieNameRU = (movie.nameRU || '').toLowerCase();
          const movieNameEN = (movie.nameEN || '').toLowerCase();

          const query = searchQuery.search || '';

          const includesSearchQuery =
            movieNameRU.includes(query.toLowerCase()) ||
            movieNameEN.includes(query.toLowerCase());

          return includesSearchQuery && (!shortFilm || movie.duration <= 40);
        })
        .slice(0, visibleCards)
    : [];

  const loadMoreCards = () => {
    let newVisibleCards;

    if (screenWidth >= 1280) {
      newVisibleCards = visibleCards + 4;
    } else if (screenWidth >= 768) {
      newVisibleCards = visibleCards + 2;
    } else {
      newVisibleCards = visibleCards + 1;
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
