export const BASE_URL = 'https://auth.nomoreparties.co';

const makeRequest = (url, method, mode, body, token) => {
  const options = {
    method: method,
    mode: mode,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  if (token) {
    options.headers.authorization = `Bearer ${token}`;
  }
  return fetch(`${BASE_URL}${url}`, options).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(`Ошибка код ${res.status}`);
  });
};

export const register = ({ name, email, password }) => {
  return makeRequest(
    '/signup',
    'POST',
    'no-cors',
    { name, email, password },
    null
  );
};

export const authorize = ({ email, password }) => {
  return makeRequest('/signin', 'POST', 'no-cors', { email, password }, null);
};

export const getContent = (token) => {
  return makeRequest('/users/me', 'GET', 'no-cors', null, token);
};
