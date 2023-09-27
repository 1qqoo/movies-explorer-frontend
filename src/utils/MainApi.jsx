export const BASE_URL = 'https://api.movies.diploma.nomoredomains.work';

const headers = {
  'Content-Type': 'application/json',
  Authorization: '',
};

const getJson = (res) => {
  return res.ok ? res.json() : Promise.reject(res.status);
};

export const setToken = (token) => {
  headers.Authorization = `Bearer ${token}`;
};

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then(getJson);
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(getJson);
};

export const getUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers,
  }).then(getJson);
};

export const updateUser = (email, name) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({ email, name }),
  }).then(getJson);
};

export const addMovie = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers,
    body: JSON.stringify(movie),
  }).then(getJson);
};

export const deleteMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    headers,
  }).then(getJson);
};

export const getFilms = () => {
  return fetch(`${BASE_URL}/movies`, {
    headers,
  }).then(getJson);
};
