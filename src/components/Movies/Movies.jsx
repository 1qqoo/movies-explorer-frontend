import { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = ({ movies }) => {
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
    <main className="movies">
      <SearchForm
        onSearch={handleSearchChange}
        onShortFilmChange={handleShortFilmChange}
      />
      <MoviesCardList
        searched={searched}
        movies={movies}
        searchQuery={searchQuery}
        shortFilm={shortFilm}
      />
    </main>
  );
};

export default Movies;
