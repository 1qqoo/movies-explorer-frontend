import { createContext, useContext, useEffect, useState } from 'react';

const MoviesContext = createContext();

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};

export const MoviesProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState(restoreSearchQuery());
  const [searched, setSearched] = useState(restoreSearched());
  const [shortFilm, setShortFilm] = useState(restoreShortFilm());
  const [foundMovies, setFoundMovies] = useState(restoreFoundMovies());

  function restoreSearchQuery() {
    const storedSearchQuery = localStorage.getItem('searchQuery') ?? '';
    return storedSearchQuery;
  }

  function restoreSearched() {
    const storedSearched = localStorage.getItem('searched') ?? false;
    return storedSearched === 'true';
  }

  function restoreShortFilm() {
    const storedShortFilm = localStorage.getItem('shortFilm') ?? false;
    return storedShortFilm === 'true';
  }

  function restoreFoundMovies() {
    const storedFoundMovies = localStorage.getItem('foundMovies') ?? '[]';
    return JSON.parse(storedFoundMovies);
  }

  const resetMoviesContext = () => {
    setSearchQuery('');
    setSearched(false);
    setShortFilm(false);
    setFoundMovies([]);
  };

  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
    localStorage.setItem('searched', searched);
    localStorage.setItem('shortFilm', shortFilm);
    if (foundMovies.length > 0) {
      localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
    }
  }, [searchQuery, searched, shortFilm, foundMovies]);

  const contextValue = {
    searchQuery,
    setSearchQuery,
    searched,
    setSearched,
    shortFilm,
    setShortFilm,
    foundMovies,
    setFoundMovies,
    resetMoviesContext,
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
};
