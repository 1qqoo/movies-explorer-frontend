import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({ movies, searchQuery }) => {
  const filteredMovies = movies.filter((movie) =>
    (movie.nameRU || movie.nameEN)
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {filteredMovies.map((movie) => {
          return (
            <MoviesCard
              key={movie.movieId}
              movie={movie}
            />
          );
        })}
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
