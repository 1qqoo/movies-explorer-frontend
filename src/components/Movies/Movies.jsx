import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import { useMoviesContext } from '../../contexts/MoviesContext';
import { useEffect } from 'react';

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
    foundMovies,
    setFoundMovies,
  } = useMoviesContext();

  const handleSearchChange = (query) => {
    if (!searched) {
      getMovies();
      setSearched(true);
    }
    setSearchQuery(query);
    localStorage.setItem('searchQuery', query);
  };

  const handleShortFilmChange = (checked) => {
    setShortFilm(checked);
    localStorage.setItem('shortFilm', checked ? 'true' : 'false');
  };

  useEffect(() => {
    const searchIsSuccessful = foundMovies.length > 0;
    if (searchIsSuccessful) {
      setFoundMovies(foundMovies);
    }
  }, [searchQuery, foundMovies, setFoundMovies, setShortFilm]);

  return (
    <main className="movies">
      <SearchForm
        onSearch={handleSearchChange}
        onShortFilmChange={handleShortFilmChange}
        shortFilm={shortFilm}
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
