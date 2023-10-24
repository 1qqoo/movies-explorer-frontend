import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import { useMoviesContext } from '../../contexts/MoviesContext';

const Movies = ({
  movies,
  onToggleSave,
  onDeleteSave,
  checkSavedMovies,
  getMovies,
}) => {
  const {
    searchQuery,
    setSearchQuery,
    shortFilm,
    setShortFilm,
    searched,
    setSearched,
  } = useMoviesContext();

  const handleSearchChange = (query) => {
    if (!searched) {
      getMovies();
      setSearched(true);
    }
    setSearchQuery(query);
  };

  const handleShortFilmChange = (checked) => {
    setShortFilm(checked);
  };

  return (
    <main className="movies">
      <SearchForm
        onSearch={handleSearchChange}
        onShortFilmChange={handleShortFilmChange}
      />
      <MoviesCardList
        checkSavedMovies={checkSavedMovies}
        onDeleteSave={onDeleteSave}
        onToggleSave={onToggleSave}
        searched={searched}
        movies={movies}
        searchQuery={searchQuery}
        shortFilm={shortFilm}
      />
    </main>
  );
};

export default Movies;
