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
    cardsToShow = 12;
  } else if (screenWidth >= 768) {
    cardsToShow = 8;
  } else {
    cardsToShow = 5;
  }

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
        .slice(0, cardsToShow)
    : [];

  return (
    <section className="movies-cards">
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
      <button
        type="button"
        className="movies-cards__add-button"
      >
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;
