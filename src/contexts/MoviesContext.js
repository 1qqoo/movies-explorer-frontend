import { createContext, useContext, useState } from 'react';

const MoviesContext = createContext();

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};

export const MoviesProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  // const [shortFilm, setShortFilm] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searched, setSearched] = useState(false);

  const contextValue = {
    searchQuery,
    setSearchQuery,
    // shortFilm,
    // setShortFilm,
    savedMovies,
    setSavedMovies,
    searched,
    setSearched,
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
};
