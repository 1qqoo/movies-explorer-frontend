import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({ movies }) => {
  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {movies.map((movie) => (
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
