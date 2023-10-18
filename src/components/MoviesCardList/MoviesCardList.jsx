import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({
  movies,
  searchQuery,
  shortFilm,
  searched,
  onToggleSave,
  onDeleteSave,
}) => {
  const filteredMovies = searched
    ? movies.filter((movie) => {
        const movieNameRU = (movie.nameRU || '').toLowerCase();
        const movieNameEN = (movie.nameEN || '').toLowerCase();

        const query = searchQuery.search || '';

        const includesSearchQuery =
          movieNameRU.includes(query.toLowerCase()) ||
          movieNameEN.includes(query.toLowerCase());

        return includesSearchQuery && (!shortFilm || movie.duration <= 40);
      })
    : [];

  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {filteredMovies.map((movie) => (
          <MoviesCard
            onDeleteSave={onDeleteSave}
            onToggleSave={onToggleSave}
            movie={movie}
            key={movie.movieId}
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
