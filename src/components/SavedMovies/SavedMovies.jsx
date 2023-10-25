import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import { useMoviesContext } from '../../contexts/MoviesContext';
import { useEffect, useState } from 'react';

const SavedMovies = ({ movies, onDeleteSave, checkSavedMovies }) => {
  const { searchQuery, setSearchQuery, searched, setSearched } =
    useMoviesContext();

  const [shortFilmSave, setShortFilmSave] = useState(false);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setSearched(true);
  };

  const handleShortFilmChange = (checked) => {
    setShortFilmSave(checked);
    localStorage.setItem('shortFilmSave', checked);
  };

  useEffect(() => {
    const storedIsShortFilmChecked = localStorage.getItem('shortFilmSave');
    if (storedIsShortFilmChecked !== null) {
      setShortFilmSave(storedIsShortFilmChecked === 'true');
    }
  }, []);

  return (
    <main className="saved-movies">
      <SearchForm
        onSearch={handleSearchChange}
        onShortFilmChange={handleShortFilmChange}
        shortFilm={shortFilmSave}
      />
      <MoviesCardList
        onDeleteSave={onDeleteSave}
        searched={searched}
        movies={movies}
        searchQuery={searchQuery}
        shortFilm={shortFilmSave}
        checkSavedMovies={checkSavedMovies}
      />
    </main>
  );
};

export default SavedMovies;
