import { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

const SavedMovies = ({ movies, onDeleteSave, checkSavedMovies }) => {
  const [searched, setSearched] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [shortFilm, setShortFilm] = useState(false);

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
