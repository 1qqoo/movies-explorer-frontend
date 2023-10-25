import { createContext, useContext, useEffect, useState } from 'react';

const MoviesContext = createContext();

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};

export const MoviesProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [shortFilm, setShortFilm] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);

  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
    localStorage.setItem('searched', searched);
    localStorage.setItem('shortFilm', shortFilm);
    if (foundMovies.length > 0) {
      localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
    }
  }, [searchQuery, searched, shortFilm, foundMovies]);

  useEffect(() => {
    const storedSearchQuery = localStorage.getItem('searchQuery');
    if (storedSearchQuery) {
      setSearchQuery(storedSearchQuery);
    }

    const storedSearched = localStorage.getItem('searched');
    if (storedSearched) {
      setSearched(storedSearched === 'true');
    }

    const storedShortFilm = localStorage.getItem('shortFilm');
    if (storedShortFilm) {
      setShortFilm(storedShortFilm === 'true');
    }

    const storedFoundMovies = localStorage.getItem('foundMovies');
    if (storedFoundMovies) {
      setFoundMovies(JSON.parse(storedFoundMovies));
    }
  }, []);

  const contextValue = {
    searchQuery,
    setSearchQuery,
    searched,
    setSearched,
    shortFilm,
    setShortFilm,
    foundMovies,
    setFoundMovies,
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
};
