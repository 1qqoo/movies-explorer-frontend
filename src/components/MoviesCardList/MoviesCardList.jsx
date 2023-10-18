import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({ movies, searchQuery, shortFilm }) => {
  const filteredMovies = movies.filter((movie) => {
    const movieNameRU = movie.nameRU || ''; // Если nameRU не существует, присваиваем пустую строку
    const movieNameEN = movie.nameEN || ''; // Если nameEN не существует, присваиваем пустую строку

    const searchQueryLower = searchQuery ? searchQuery.toLowerCase() : '';

    const isNameRUMatch = movieNameRU
      .toLowerCase()
      .includes(searchQueryLower.toLowerCase());
    const isNameENMatch = movieNameEN
      .toLowerCase()
      .includes(searchQueryLower.toLowerCase());

    return (
      (isNameRUMatch ||
        isNameENMatch || // Поиск по обоим полям
        movie.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (!shortFilm || movie.duration <= 40)
    );
  });

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
