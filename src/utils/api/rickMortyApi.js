const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getCharacters(pageNumber, searchQuery) {
    return fetch(
      `${this._baseUrl}/character/?page=${pageNumber}&name=${searchQuery}`,
      {
        method: "GET",
      }
    ).then(onResponse);
  }
}

const config = {
  baseUrl: "https://rickandmortyapi.com/api",
  headers: {
    "content-type": "application/json",
  },
};

const RickMortyApi = new Api(config);

export default RickMortyApi;
