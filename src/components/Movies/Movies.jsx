import { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = ({ movies }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchMovies = (searchItem) => {
    setSearchQuery(searchItem);
  };

  return (
    <main className="movies">
      <SearchForm
        movies={movies}
        searchMovies={searchMovies}
      />
      <MoviesCardList
        movies={movies}
        searchQuery={searchQuery}
      />
    </main>
  );
};

export default Movies;
