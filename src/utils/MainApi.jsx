class MainApi {
  #url;
  #headers;
  #authHeaders;
  constructor({ url, headers }) {
    this.#url = url;
    this.#headers = headers;
    this.#authHeaders = null;
  }

  deleteAuthHeaders = () => (this.#authHeaders = null);

  setAuthHeaders = (token) => {
    this.#authHeaders = {
      ...this.#headers,
      authorization: `Bearer ${token}`,
    };
  };

  #handleReply = (res) =>
    res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

  #makeRequest = (method, path, body, notSave) => {
    const reqOptions = {
      method: method,
      headers: notSave ? this.#headers : this.#authHeaders,
    };
    if (body) reqOptions.body = JSON.stringify(body);

    return fetch(`${this.#url}${path}`, reqOptions).then(this.#handleReply);
  };

  registerUser = (regData) =>
    this.#makeRequest('POST', '/signup', regData, 'notSave');

  loginUser = (loginData) =>
    this.#makeRequest('POST', '/signin', loginData, 'notSave');

  // addNewCard = (cardData) => this.#makeRequest('POST', '/cards', cardData);

  // deleteCard = (id) => this.#makeRequest('DELETE', `/cards/${id}`);

  // changeLikeCardStatus = (id, isLiked) => {
  //   const fetchMethod = isLiked ? 'PUT' : 'DELETE';
  //   return this.#makeRequest(fetchMethod, `/cards/${id}/likes`);
  // };
}

const api = new MainApi({
  url: 'https://api.movies.diploma.nomoredomains.work',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default api;
