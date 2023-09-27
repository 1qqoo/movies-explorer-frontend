const MOVIES_URL = 'https://api.nomoreparties.co';

const getMovies = () =>
  fetch(`${MOVIES_URL}/beatfilm-movies`, { method: 'GET' }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  });
export { getMovies, MOVIES_URL };
