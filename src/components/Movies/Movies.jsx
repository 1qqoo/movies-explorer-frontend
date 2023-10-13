import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = ({ movies, onSaveMovie, deleteMovie, isSaveCheck }) => {
  return (
    <main className="movies">
      <SearchForm movies={movies} />
      <MoviesCardList
        movies={movies}
        onSaveMovie={onSaveMovie}
        isSaveCheck={isSaveCheck}
        deleteMovie={deleteMovie}
      />
    </main>
  );
};

export default Movies;
