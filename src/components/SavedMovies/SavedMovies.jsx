import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import { useMoviesContext } from '../../contexts/MoviesContext';

const SavedMovies = ({ movies, onDeleteSave, checkSavedMovies }) => {
  const {
    searchQuery,
    setSearchQuery,
    shortFilm,
    setShortFilm,

    searched,
    setSearched,
  } = useMoviesContext();

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setSearched(true);
  };

  const handleShortFilmChange = (checked) => {
    setShortFilm(checked);
  };

  return (
    <main className="saved-movies">
      <SearchForm
        onSearch={handleSearchChange}
        onShortFilmChange={handleShortFilmChange}
      />
      <MoviesCardList
        onDeleteSave={onDeleteSave}
        searched={searched}
        movies={movies}
        searchQuery={searchQuery}
        shortFilm={shortFilm}
        checkSavedMovies={checkSavedMovies}
      />
    </main>
  );
};

export default SavedMovies;
