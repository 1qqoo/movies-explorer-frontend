import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import { useMoviesContext } from '../../contexts/MoviesContext';
import { useEffect, useState } from 'react';

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
    // shortFilm,
    // setShortFilm,
    searched,
    setSearched,
  } = useMoviesContext();

  const [shortFilm, setShortFilm] = useState(false);

  const handleSearchChange = (query) => {
    if (!searched) {
      getMovies();
      setSearched(true);
    }
    setSearchQuery(query);
  };

  const handleShortFilmChange = (checked) => {
    setShortFilm(checked);
    localStorage.setItem('shortFilm', checked);
  };

  useEffect(() => {
    const storedIsShortFilmChecked = localStorage.getItem('shortFilm');
    if (storedIsShortFilmChecked !== null) {
      setShortFilm(storedIsShortFilmChecked === 'true');
    }
  }, []);

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
