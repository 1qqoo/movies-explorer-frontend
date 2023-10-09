import { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

const SavedMovies = ({ movies }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchMovies = (searchItem) => {
    setSearchQuery(searchItem);
  };

  return (
    <main className="saved-movies">
      <SearchForm searchMovies={searchMovies} />
      <MoviesCardList
        movies={movies}
        searchQuery={searchQuery}
      />
    </main>
  );
};

export default SavedMovies;
