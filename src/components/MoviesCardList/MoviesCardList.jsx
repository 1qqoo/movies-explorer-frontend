import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({ movies, searchQuery, shortFilm, searched }) => {
  const filteredMovies = searched
    ? movies.filter((movie) => {
        const movieNameRU = (movie.nameRU || '').toLowerCase();
        const movieNameEN = (movie.nameEN || '').toLowerCase();

        const includesSearchQuery =
          movieNameRU.includes(searchQuery.search.toLowerCase()) ||
          movieNameEN.includes(searchQuery.search.toLowerCase());

        return includesSearchQuery && (!shortFilm || movie.duration <= 40);
      })
    : [];

  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {filteredMovies.map((movie) => (
          <MoviesCard
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
