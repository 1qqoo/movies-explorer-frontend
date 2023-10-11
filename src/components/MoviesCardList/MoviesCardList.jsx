import { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({ movies, searchQuery }) => {
  const filteredMovies = movies.filter((movie) =>
    (movie.nameRU || movie.nameEN)
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const [savedMovies, setSavedMovies] = useState([]);

  const handleSaveMovie = (movie) => {
    setSavedMovies([...savedMovies, movie]);
  };

  const deleteSaveMovie = (movie) => {
    if (savedMovies.includes(movie)) {
      const newArray = savedMovies.filter((item) => item !== movie);
      setSavedMovies(newArray);
    }
  };

  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {filteredMovies.map((movie) => {
          return (
            <MoviesCard
              handleSaveMovie={handleSaveMovie}
              deleteSaveMovie={deleteSaveMovie}
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
